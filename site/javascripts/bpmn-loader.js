/**
 * BPMN Loader for MkDocs Material
 * Renderiza diagramas BPMN 2.0 interativos com suporte a zoom, pan e tela cheia.
 */
function initBpmnViewers() {
  if (typeof BpmnJS === 'undefined') {
    setTimeout(initBpmnViewers, 100);
    return;
  }

  const containers = document.querySelectorAll('.bpmn-viewer-card:not([data-bpmn-loaded])');

  containers.forEach(async (wrapper) => {
    wrapper.setAttribute('data-bpmn-loaded', 'true');

    const canvasContainer = wrapper.querySelector('.bpmn-canvas');
    const xmlElement = wrapper.querySelector('.bpmn-data');
    const url = wrapper.getAttribute('data-url');

    if (!canvasContainer) return;

    try {
      const viewer = new BpmnJS({
        container: canvasContainer,
        keyboard: { bindTo: document }
      });

      let xmlContent = '';

      if (xmlElement) {
        xmlContent = xmlElement.textContent.trim();
      } else if (url) {
        // Resolve URL relativo à localização da página atual
        const resolvedUrl = new URL(url, window.location.href).href;
        const response = await fetch(resolvedUrl);
        if (!response.ok) throw new Error(`Falha ao carregar BPMN de: ${resolvedUrl}`);
        xmlContent = await response.text();
      }

      if (!xmlContent) return;

      await viewer.importXML(xmlContent);

      const canvas = viewer.get('canvas');

      const fitDiagram = () => {
        try {
          canvas.resized();
          canvas.zoom('fit-viewport', 'auto');
        } catch (e) {
          console.warn('Erro ao ajustar viewport do BPMN:', e);
        }
      };

      // Ajuste inicial com múltiplos ticks para garantir cálculo após render do layout
      fitDiagram();
      requestAnimationFrame(fitDiagram);
      setTimeout(fitDiagram, 100);
      setTimeout(fitDiagram, 300);

      // Botões de controle
      const btnZoomIn = wrapper.querySelector('.btn-bpmn-zoom-in');
      const btnZoomOut = wrapper.querySelector('.btn-bpmn-zoom-out');
      const btnZoomReset = wrapper.querySelector('.btn-bpmn-zoom-reset');
      const btnFullscreen = wrapper.querySelector('.btn-bpmn-fullscreen');

      if (btnZoomIn) {
        btnZoomIn.addEventListener('click', () => {
          canvas.zoom(canvas.zoom() * 1.25);
        });
      }

      if (btnZoomOut) {
        btnZoomOut.addEventListener('click', () => {
          canvas.zoom(canvas.zoom() * 0.8);
        });
      }

      if (btnZoomReset) {
        btnZoomReset.addEventListener('click', fitDiagram);
      }

      if (btnFullscreen) {
        btnFullscreen.addEventListener('click', () => {
          if (!document.fullscreenElement && !document.webkitFullscreenElement) {
            if (wrapper.requestFullscreen) {
              wrapper.requestFullscreen();
            } else if (wrapper.webkitRequestFullscreen) {
              wrapper.webkitRequestFullscreen();
            }
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
              document.webkitExitFullscreen();
            }
          }
        });
      }

      document.addEventListener('fullscreenchange', () => {
        setTimeout(fitDiagram, 150);
      });
      document.addEventListener('webkitfullscreenchange', () => {
        setTimeout(fitDiagram, 150);
      });

      window.addEventListener('resize', () => {
        fitDiagram();
      });

    } catch (err) {
      console.error('Erro ao renderizar diagrama BPMN:', err);
      canvasContainer.innerHTML = `<div class="bpmn-error-msg" style="padding: 20px; color: #d32f2f; text-align: center;">Não foi possível renderizar o diagrama BPMN: ${err.message}</div>`;
    }
  });
}

// Inicializa no carregamento do DOM
document.addEventListener('DOMContentLoaded', initBpmnViewers);

// Suporte para navegação instantânea do MkDocs Material
if (typeof document$ !== 'undefined') {
  document$.subscribe(initBpmnViewers);
}
