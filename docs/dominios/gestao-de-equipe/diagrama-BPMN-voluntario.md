# Diagrama BPMN do Voluntário

Este documento apresenta o fluxo oficial do processo de **Solicitação de Voluntário** pertencente ao domínio de **Gestão de Equipe**, modelado em conformidade com o padrão BPMN 2.0.

---

## 1. Processo: Solicitação de Voluntário

<div class="bpmn-viewer-card" data-url="diagrama-voluntario.bpmn">
  <div class="bpmn-toolbar">
    <button type="button" class="bpmn-btn btn-bpmn-zoom-in" title="Aproximar (Zoom In)">➕ Zoom In</button>
    <button type="button" class="bpmn-btn btn-bpmn-zoom-out" title="Afastar (Zoom Out)">➖ Zoom Out</button>
    <button type="button" class="bpmn-btn btn-bpmn-zoom-reset" title="Ajustar à Tela">🔄 Ajustar</button>
    <button type="button" class="bpmn-btn btn-bpmn-fullscreen" title="Tela Cheia">⛶ Tela Cheia</button>
  </div>
  <div class="bpmn-canvas"></div>
  <script type="text/xml" class="bpmn-data">
--8<-- "docs/dominios/gestao-de-equipe/diagrama-voluntario.bpmn"
  </script>
</div>

---

## 2. Detalhamento das Raias e Etapas

| Raia / Ator | Elemento | Tipo BPMN | Descrição da Atividade / Regra |
| :--- | :--- | :--- | :--- |
| **Coordenador** | `Solicitar Voluntário` | Evento de Início | O coordenador inicia o processo cadastrando a indicação do membro voluntário para compor a equipe. |
| **Voluntário** | `Responder Solicitação de Voluntariado` | Tarefa | O voluntário indicado recebe a solicitação e avalia se aceita ou recusa o convite para o projeto. |
| **Voluntário** | `Aceitou?` | Decisão (Gateway) | • **Sim:** O voluntário aceita a solicitação e o fluxo prossegue para ativação.<br>• **Não:** O voluntário recusa o convite e o fluxo é encerrado. |
| **Voluntário** | `Voluntário Ativado` | Evento de Fim | Encerramento do fluxo com a vinculação e ativação confirmada do voluntário na equipe do projeto. |
| **Voluntário** | `Vinculado Recusado` | Evento de Fim | Encerramento do fluxo com o registro de recusa do convite pelo voluntário. |