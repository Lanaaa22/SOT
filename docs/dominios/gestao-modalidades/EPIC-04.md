# EPIC-04 - Visualizar Pendências

## 1. Descrição

O **EPIC-04 - Visualizar Pendências** é a funcionalidade operacional do Back-office voltada a gestores e analistas da FAPES para o monitoramento, triagem e auditoria das solicitações de bolsas e documentos comprobatórios submetidos por bolsistas e coordenadores nos projetos de fomento.

Por meio desta funcionalidade, o gestor realiza:

1. **Painel de Indicadores do Mês:** Acompanhamento dos quantitativos consolidados de bolsas aprovadas e reprovadas referentes ao mês de vigência;
2. **Triagem de Pendências:** Consulta e filtragem avançada de alocações pendentes de análise por Edital, por Projeto e por Status da solicitação;
3. **Auditoria Documental Individual:** Acesso detalhado à relação de requisitos e documentos comprobatórios de cada bolsista, com visualização integrada dos arquivos em formato PDF;
4. **Avaliação Individual de Documentos:** Homologação item a item dos comprovantes anexados, com opção de aprovação ou solicitação de revisão fundamentada com motivo da inconsistência;
5. **Implementação ou Reprovação da Concessão:** Ativação formal da bolsa no ecossistema (quando todos os documentos exigidos forem aprovados) ou reprovação motivada da solicitação.

Esta funcionalidade garante o cumprimento rigoroso dos critérios de elegibilidade definidos nas modalidades e versões de bolsa antes do início do pagamento dos benefícios.

---

## 2. Fluxo de Navegação

### Back-office (Gestor / Analista FAPES)

**Menu Lateral > Gestão de Bolsas > Visualizar Pendências**

* **Tela:** `Visualizar Pendências (Listagem e Filtros)` (`/gestao-bolsa/visualizar-pendencias`)
  * **Funcionalidade:** `EPIC-04` (Visualizar Pendências)
  * Apresenta os cartões com indicadores do mês, filtros suspensos por Edital, Projeto e Status, tabela com a relação de solicitações pendentes e botão de ação para avaliar os documentos de cada bolsista.

* **Tela:** `Documentos do Bolsista` (`/gestao-bolsa/documentos-bolsista/:id`)
  * **Funcionalidade:** `EPIC-04` (Visualizar Pendências)
  * Tela de auditoria documental contendo:
    * **Cartão de Informações do Bolsista:** Dados consolidados do bolsista, projeto, edital, modalidade e nível;
    * **Relação de Requisitos com Comprovante:** Lista de documentos anexados com indicador de status, visualizador de PDF em tela e ações individuais de aprovação ou solicitação de revisão;
    * **Relação de Requisitos sem Comprovante:** Exibição dos requisitos que possuem caráter declaratório ou normativo contínuo;
    * **Ações de Conclusão da Solicitação:** Botões para efetivar a implementação da bolsa ou para reprovação da solicitação com registro de justificativa.

---

## 3. Regras de Negócio

- **RN01 - Filtros Combinados de Triagem:** A listagem de pendências permite pesquisar e filtrar alocações por edital, projeto e status da solicitação, facilitando a priorização da fila de trabalho da equipe técnica.
- **RN02 - Indicadores do Mês de Referência:** A tela exibe cartões informativos com o mês de vigência e os totais acumulados de bolsas aprovadas e reprovadas naquele período.
- **RN03 - Visualização Integrada de Documentos:** O sistema permite a abertura e leitura direta dos arquivos comprobatórios submetidos em formato PDF sem necessidade de download externo.
- **RN04 - Avaliação Individual de Comprovantes:** Cada documento comprobatório anexado deve ser avaliado individualmente pelo analista, recebendo o status de aprovado ou de pedido de revisão.
- **RN05 - Pedido de Revisão Motivado:** Ao solicitar a revisão de um documento, o gestor deve registrar obrigatoriamente uma justificativa explicando o motivo do apontamento (como documento ilegível, fora do prazo de validade ou incompleto), reabrindo a oportunidade para o bolsista reenviar o comprovante regularizado.
- **RN06 - Condição Mandatória para Implementar a Bolsa:** A implementação formal da bolsa só pode ser acionada após todos os documentos comprobatórios obrigatórios terem sido individualmente aprovados pela equipe da FAPES. O botão correspondente permanece bloqueado enquanto houver documentos pendentes ou em revisão.
- **RN07 - Reprovação Formal com Justificativa:** A solicitação de bolsa pode ser reprovada de forma global a qualquer momento da análise, sendo obrigatório o preenchimento de justificativa formal registrada no histórico do projeto.
- **RN08 - Tratamento de Requisitos sem Documento:** Requisitos que não demandam envio de comprovante no momento da solicitação (critérios gerais ou autodeclaratórios) são destacados na interface de auditoria, não impedindo a implementação da bolsa.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/gestaobolsa/visualizarpendencias` | Retorna a listagem paginada de solicitações de bolsa com pendências | `leds-conectafapes-backend-admin` / `VisualizarPendenciasController` |
| `GET` | `/api/gestaobolsa/visualizarpendencias/informacoesgerais` | Retorna os indicadores consolidados de bolsas aprovadas e reprovadas no mês | `leds-conectafapes-backend-admin` / `VisualizarPendenciasController` |
| `GET` | `/api/gestaobolsa/visualizarpendencias/select/editais` | Lista os editais disponíveis para alimentação do filtro de seleção | `leds-conectafapes-backend-admin` / `VisualizarPendenciasController` |
| `GET` | `/api/gestaobolsa/visualizarpendencias/select/projetos` | Lista os projetos disponíveis para alimentação do filtro de seleção | `leds-conectafapes-backend-admin` / `VisualizarPendenciasController` |
| `GET` | `/api/gestaobolsa/visualizarpendencias/select/projetos/{editalId}` | Lista os projetos vinculados ao edital informado para refinamento do filtro | `leds-conectafapes-backend-admin` / `VisualizarPendenciasController` |
| `POST` | `/api/gestaobolsa/visualizarpendencias/buscapersonalizada` | Executa a consulta filtrada de pendências conforme parâmetros selecionados | `leds-conectafapes-backend-admin` / `VisualizarPendenciasController` |
| `GET` | `/api/gestaobolsa/documentos/requisitobolsa/alocacao/{id}` | Consulta os requisitos e status dos documentos de uma solicitação específica | `leds-conectafapes-backend-admin` / `DocumentoMetadadoController` |
| `GET` | `/api/gestaobolsa/documentos/carregardocumento` | Recupera o arquivo PDF de comprovação para visualização em tela | `leds-conectafapes-backend-admin` / `DocumentoMetadadoController` |
| `POST` | `/api/gestaobolsa/documentos/aprovar` | Registra a aprovação individual de um documento comprobatório | `leds-conectafapes-backend-admin` / `DocumentoMetadadoController` |
| `POST` | `/api/gestaobolsa/documentos/pedirrevisao` | Emite pedido de revisão para o documento com justificativa registrada | `leds-conectafapes-backend-admin` / `DocumentoMetadadoController` |
| `POST` | `/api/importacaoedital/alocacaobolsista/ativar` | Homologa e implementa formalmente a concessão da bolsa | `leds-conectafapes-backend-admin` / `AlocacaoBolsistaController` |
| `POST` | `/api/importacaoedital/alocacaobolsista/reprovar` | Reprova formalmente a solicitação de concessão da bolsa | `leds-conectafapes-backend-admin` / `AlocacaoBolsistaController` |
