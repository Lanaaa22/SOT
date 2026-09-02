# Diagrama BPMN do Bolsista

Este documento apresenta o fluxo oficial do processo de **Solicitação de Bolsa** pertencente ao domínio de **Gestão de Equipe**, modelado em conformidade com o padrão BPMN 2.0.

---

## 1. Processo: Solicitação de Bolsa

<div class="bpmn-viewer-card" data-url="diagram.bpmn">
  <div class="bpmn-toolbar">
    <button type="button" class="bpmn-btn btn-bpmn-zoom-in" title="Aproximar (Zoom In)">➕ Zoom In</button>
    <button type="button" class="bpmn-btn btn-bpmn-zoom-out" title="Afastar (Zoom Out)">➖ Zoom Out</button>
    <button type="button" class="bpmn-btn btn-bpmn-zoom-reset" title="Ajustar à Tela">🔄 Ajustar</button>
    <button type="button" class="bpmn-btn btn-bpmn-fullscreen" title="Tela Cheia">⛶ Tela Cheia</button>
  </div>
  <div class="bpmn-canvas"></div>
  <script type="text/xml" class="bpmn-data">
--8<-- "docs/dominios/gestao-de-equipe/diagram.bpmn"
  </script>
</div>

---

## 2. Detalhamento das Raias e Etapas

| Raia / Ator | Elemento | Tipo BPMN | Descrição da Atividade / Regra |
| :--- | :--- | :--- | :--- |
| **Coordenador** | `Solicitar Bolsa` | Evento de Início | O coordenador inicia o processo criando a solicitação e indicando o bolsista. |
| **Bolsista** | `Adicionar Documentos na Solicitação` | Tarefa | O bolsista insere os documentos comprobatórios e dados exigidos. |
| **Coordenador** | `Submeter Solicitação` | Tarefa | O coordenador revisa os dados e envia formalmente a solicitação à FAPES. |
| **Gestor Fapes** | `Avaliar Solicitação` | Tarefa | A equipe técnica da FAPES faz a análise de conformidade da solicitação. |
| **Gestor Fapes** | `Documentação está válida?` | Decisão (Gateway) | • **Sim:** Segue para implementação da bolsa.<br>• **Não:** Retorna para o bolsista corrigir a documentação. |
| **Bolsista** | `Bolsa Implementada` | Evento de Fim | Encerramento do fluxo com a implementação e ativação da bolsa no projeto. |