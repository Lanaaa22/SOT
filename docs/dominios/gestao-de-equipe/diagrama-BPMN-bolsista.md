# Diagrama BPMN do Bolsista

Este documento apresenta o fluxo oficial do processo de **Solicitação de Bolsa** pertencente ao domínio de **Gestão de Equipe**, modelado em conformidade com o padrão BPMN 2.0.

---

## 1. Processo: Solicitação de Bolsa

<div class="bpmn-viewer-card" data-url="diagrama-bolsista.bpmn">
  <div class="bpmn-toolbar">
    <button type="button" class="bpmn-btn btn-bpmn-zoom-in" title="Aproximar (Zoom In)">➕ Zoom In</button>
    <button type="button" class="bpmn-btn btn-bpmn-zoom-out" title="Afastar (Zoom Out)">➖ Zoom Out</button>
    <button type="button" class="bpmn-btn btn-bpmn-zoom-reset" title="Ajustar à Tela">🔄 Ajustar</button>
    <button type="button" class="bpmn-btn btn-bpmn-fullscreen" title="Tela Cheia">⛶ Tela Cheia</button>
  </div>
  <div class="bpmn-canvas"></div>
  <script type="text/xml" class="bpmn-data">
--8<-- "docs/dominios/gestao-de-equipe/diagrama-bolsista.bpmn"
  </script>
</div>

---

## 2. Detalhamento das Raias e Etapas

| Raia / Ator | Elemento | Tipo BPMN | Descrição da Atividade / Regra |
| :--- | :--- | :--- | :--- |
| **Coordenador** | `Solicitar Bolsa` | Evento de Início | O coordenador inicia o processo criando a solicitação, definindo modalidade/vigência e indicando o bolsista. |
| **Bolsista** | `Adicionar Documentos` | Tarefa | O bolsista insere os documentos comprobatórios, preenche dados complementares e aceita o Termo de Responsabilidade. |
| **Bolsista** | `Documentos foram enviados no prazo?` | Decisão (Gateway) | • **Sim:** O bolsista anexa a documentação a tempo; segue para submissão pelo coordenador.<br>• **Não:** O prazo expira sem o envio da documentação; encerra o processo como não implementado. |
| **Coordenador** | `Submeter Solicitação` | Tarefa | O coordenador revisa as informações e documentos enviados pelo bolsista e submete formalmente à FAPES. |
| **Gestor Fapes** | `Avaliar Solicitação` | Tarefa | A equipe técnica da FAPES realiza a análise de conformidade da solicitação e dos documentos anexados. |
| **Gestor Fapes** | `Qual o resultado da avaliação?` | Decisão (Gateway) | • **Aprovada:** A documentação está válida e regular; segue para implementação da bolsa.<br>• **Com pendência:** Há inconformidades sanáveis; retorna para o bolsista corrigir/reenviar os documentos.<br>• **Documentos recusados:** A solicitação é indeferida definitivamente pela FAPES; encerra o processo como não implementado. |
| **Bolsista** | `Bolsa Implementada` | Evento de Fim | Encerramento do fluxo com sucesso: a bolsa é homologada, implementada e ativada no projeto. |
| **Bolsista** | `Bolsa Não Implementada` | Evento de Fim | Encerramento do fluxo sem sucesso: ocorre caso o bolsista não envie os documentos no prazo ou caso a FAPES recuse a documentação em definitivo. |