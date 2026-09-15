# EPIC-02 - Informar Documentos e Termo de Responsabilidade

## 1. Descrição

O **EPIC-02 - Informar Documentos e Termo de Responsabilidade** é a funcionalidade de autoatendimento (Front-office) voltada a bolsistas vinculados a projetos de pesquisa e inovação da FAPES para cumprimento das exigências documentais e formalização da concessão de bolsa.

Por meio desta funcionalidade, o usuário consulta e/ou gerencia:

1. **Documentos Comprobatórios da Bolsa:**
   - Consulta a lista de requisitos documentais exigidos pela modalidade e nível de bolsa (ex: diplomas, comprovantes de matrícula, vínculos profissionais, documentos de identificação e requisitos perenes), acompanhando o prazo limite para envio;
   - Realiza o upload inicial de arquivos comprobatórios (formatos aceitos como PDF e imagens, limitados a 5 MB por arquivo);
   - Substitui ou reenvia documentos quando solicitado ajuste ou quando reprovados na conferência;
   - Realiza o download e a pré-visualização em tela dos arquivos já anexados;
   - Acompanha o status de avaliação de cada item (`Não Enviado`, `Enviado`, `Em Processamento`, `Pedido de Revisão`, `Reprovado por IA`, `Aprovado por IA`, `Pendente de Avaliação`, `Aprovado` ou `Reprovado`), visualizando as justificativas e pareceres registrados pela equipe técnica da FAPES ou pela validação automatizada.

2. **Termo de Responsabilidade:**
   - Preenchimento das declarações legais obrigatórias:
     * *Declaração de Outra Bolsa:* indicação se recebe ou não outra remuneração por bolsa, informando instituição, modalidade e vigência caso afirmativo;
     * *Declaração de Parentesco:* indicação de existência ou não de vínculo consanguíneo ou por afinidade com o coordenador do projeto;
     * *Declaração de Atividade Remunerada:* indicação de exercício ou não de atividade remunerada concomitante, detalhando instituição, cargo, tipo de atividade, carga horária e vínculo caso afirmativo;
   - Geração automática e visualização do Termo de Responsabilidade oficial em PDF;
   - Assinatura digital/formal e aceite das cláusulas normativas da FAPES;
   - Exclusão e regeneração do termo caso seja necessário retificar qualquer declaração antes do envio final.

3. **Submissão para Avaliação:**
   - Envio formal do pacote documental completo para análise da FAPES, transicionando a bolsa para a situação `Em Avaliação` após todos os requisitos estarem preenchidos e o termo devidamente assinado.

---

## 2. Fluxo de Navegação

### Front-office (Bolsista / Usuário)

**Menu Lateral > Meu Perfil > Minhas Informações**

  * **Aba:** `Meus Documentos`
    * **Funcionalidade:** `EPIC-02` (Informar Documentos e Termo de Responsabilidade)

---

## 3. Regras de Negócio

- **RN01 - Edição Condicionada ao Status da Bolsa:** O upload, substituição e exclusão de documentos e do Termo de Responsabilidade são permitidos exclusivamente enquanto a alocação da bolsa estiver no status `DOCUMENTACAO_PENDENTE`. Uma vez submetida (`EM_AVALIACAO`), aprovada (`ATIVA`), encerrada (`FINALIZADA`) ou `CANCELADA`, a aba opera em modo estritamente de consulta (somente leitura).
- **RN02 - Limite de Tamanho por Arquivo:** O tamanho de cada arquivo enviado no upload não pode exceder o limite máximo de **5 MB**. Arquivos maiores que esse limite são rejeitados pelo servidor com código HTTP 413 (*Content Too Large*).
- **RN03 - Observância do Prazo Limite de Envio:** O envio dos documentos deve ocorrer obrigatoriamente dentro do prazo limite estipulado na concessão. Caso o prazo expire, o envio é bloqueado, sendo necessário que o coordenador do projeto faça uma nova soliticação de bolsa.
- **RN04 - Validação Automatizada de Documentos (IA / Serviço Externo):** Determinados documentos passam por verificação automatizada prévia (status transitório `EM_PROCESSAMENTO`). Se houver inconsistência identificada pelo motor de validação, o status é atualizado para `REPROVADO_IA`, exibindo o motivo específico da inconformidade para que o bolsista possa providenciar a substituição imediata.
- **RN05 - Atendimento a Pedidos de Revisão e Reprovações Manuais:** Caso um analista técnico da FAPES aponte pendências saneáveis (`PEDIDO_REVISAO`) ou rejeição (`REPROVADO_MANUAL`), o sistema exibe o parecer justificativo e reabre a edição pontual para substituição exclusiva do documento reprovado.
- **RN06 - Obrigatoriedade das Declarações do Termo de Responsabilidade:** A geração do Termo de Responsabilidade exige o preenchimento de três declarações:
    * Se declarada a percepção de outra bolsa, é mandatório informar instituição, modalidade e vigência;
    * É obrigatório declarar se possui ou não parentesco consanguíneo ou afim com a coordenação do projeto;
    * Se declarado o exercício de atividade remunerada, é mandatório informar instituição empregadora, cargo, tipo de atividade, carga horária semanal e tipo de vínculo.
- **RN07 - Assinatura e Retificação do Termo:** O Termo de Responsabilidade deve ser assinado digitalmente pelo bolsista após sua geração. Caso o bolsista precise corrigir alguma declaração antes da submissão, o termo atual deve ser excluído no sistema para permitir a inserção de novos parâmetros e posterior regeneração.
- **RN08 - Condição de Submissão Completa:** O acionamento da ação de submissão da documentação para análise da FAPES só é liberado quando **100% dos requisitos documentais** obrigatórios da bolsa estiverem anexados e o Termo de Responsabilidade estiver devidamente gerado e assinado.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/portalfapes/minha-bolsa/bolsas/projetos/{projetoId}` | Lista todas as bolsas/alocações do usuário no projeto informado | `leds-conectafapes-backend-portal-fapes` / `AlocacaoBolsistaController` |
| `GET` | `/api/portalfapes/minha-bolsa/documentos?alocacaoId={id}` | Consulta a lista de requisitos de documentos da modalidade e o prazo limite de envio | `leds-conectafapes-backend-portal-fapes` / `AlocacaoBolsistaController` |
| `GET` | `/api/portalfapes/documentos/requisitobolsa/pessoal` | Consulta a relação de requisitos documentais perenes e pessoais do bolsista | `leds-conectafapes-backend-portal-fapes` / `RequisitoBolsaController` |
| `GET` | `/api/portalfapes/minha-bolsa/visualizar/{documentoId}` | Recupera em base64 o arquivo de um documento comprobatório para visualização/download | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `POST` | `/api/portalfapes/minha-bolsa/documentos` | Realiza o upload de um arquivo para comprovação de um requisito documental da bolsa | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `PUT` | `/api/portalfapes/minha-bolsa/documentos/{documentoId}` | Substitui o arquivo de um documento comprobatório previamente anexado | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `POST` | `/api/portalfapes/minha-bolsa/termo` | Gera o documento PDF do Termo de Responsabilidade com base nas declarações preenchidas | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `POST` | `/api/portalfapes/minha-bolsa/termo/assinar` | Registra a assinatura e aceite formal das declarações do Termo pelo bolsista | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `DELETE` | `/api/portalfapes/minha-bolsa/termo/{alocacaoBolsistaId}` | Exclui o Termo de Responsabilidade gerado para permitir retificação das declarações | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `POST` | `/api/portalfapes/alocacao-bolsista/alterar/status/emavaliacao` | Finaliza a submissão dos documentos e altera a situação da bolsa para `EM_AVALIACAO` | `leds-conectafapes-backend-portal-fapes` / `AlocacaoBolsistaController` |
| `GET` | `/api/gestaobolsa/documentos/requisitobolsa/alocacao/{id}` | Consulta os requisitos e status dos documentos sob a perspectiva da gestão/back-office | `leds-conectafapes-backend-admin` / `DocumentoMetadadoController` |
| `GET` | `/api/gestaobolsa/documentos/carregardocumento` | Carrega o arquivo do documento metadado para auditoria e parecer técnico na FAPES | `leds-conectafapes-backend-admin` / `DocumentoMetadadoController` |

---

## 5. Referências

- **Domínio SOT:**
    - [`docs/dominios/edicao-de-perfil/README.md`](https://github.com/Lanaaa22/SOT/blob/main/docs/dominios/edicao-de-perfil/README.md)
- **Front-end (`leds-conectafapes-frontoffice-frontend`):**
    - [`src/modules/PortalCoordenador/resources/MinhasInformacoes/components/MeusDocumentos.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontoffice-frontend/blob/develop/src/modules/PortalCoordenador/resources/MinhasInformacoes/components/MeusDocumentos.vue)
    - [`src/modules/PortalCoordenador/resources/MinhasInformacoes/composables/useMeusDocumentos.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontoffice-frontend/blob/develop/src/modules/PortalCoordenador/resources/MinhasInformacoes/composables/useMeusDocumentos.ts)
    - [`src/modules/PortalCoordenador/resources/MinhasInformacoes/api/services/Documento.service.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontoffice-frontend/blob/develop/src/modules/PortalCoordenador/resources/MinhasInformacoes/api/services/Documento.service.ts)
    - [`src/modules/PortalCoordenador/resources/MinhasInformacoes/components/EnviarDocumentosModal.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontoffice-frontend/blob/develop/src/modules/PortalCoordenador/resources/MinhasInformacoes/components/EnviarDocumentosModal.vue)
    - [`src/modules/PortalCoordenador/resources/MinhasInformacoes/view/MinhasInformacoes.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontoffice-frontend/blob/develop/src/modules/PortalCoordenador/resources/MinhasInformacoes/view/MinhasInformacoes.vue)
- **Back-end (`leds-conectafapes-backend-portal-fapes`):**
    - [`src/ConectaFapes/ConectaFapes.WebAPI/Controllers/ImportacaoEditais/AlocacaoBolsistaController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-portal-fapes/blob/develop/src/ConectaFapes/ConectaFapes.WebAPI/Controllers/ImportacaoEditais/AlocacaoBolsistaController.cs)
    - [`src/ConectaFapes/ConectaFapes.WebAPI/Controllers/ImportacaoEditais/DocumentoController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-portal-fapes/blob/develop/src/ConectaFapes/ConectaFapes.WebAPI/Controllers/ImportacaoEditais/DocumentoController.cs)
    - [`src/ConectaFapes/ConectaFapes.WebAPI/Controllers/CadastroModalidadesBolsas/RequisitoBolsaController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-portal-fapes/blob/develop/src/ConectaFapes/ConectaFapes.WebAPI/Controllers/CadastroModalidadesBolsas/RequisitoBolsaController.cs)
- **Back-end (`leds-conectafapes-backend-admin`):**
    - [`src/ConectaFapes/ConectaFapes.WebApi/Controllers/GestaoBolsa/DocumentoMetadadoController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.WebApi/Controllers/GestaoBolsa/DocumentoMetadadoController.cs)
    - [`src/ConectaFapes/ConectaFapes.WebApi/Controllers/ImportacaoEditais/AlocacaoBolsistaController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.WebApi/Controllers/ImportacaoEditais/AlocacaoBolsistaController.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/UseCases/GestaoBolsa/Entities/DocumentoCase/CarregarDocumento/CarregarDocumentoHandler.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/UseCases/GestaoBolsa/Entities/DocumentoCase/CarregarDocumento/CarregarDocumentoHandler.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/UseCases/GestaoBolsa/Entities/DocumentoCase/RequisitosDocumentoCase/GetRequisitosDocumentoHandler.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/UseCases/GestaoBolsa/Entities/DocumentoCase/RequisitosDocumentoCase/GetRequisitosDocumentoHandler.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/UseCases/ImportacaoEditais/AlocacaoBolsistaCase/SetStatusEmAvaliacaoAlocacaoBolsista/SetStatusEmAvaliacaoAlocacaoBolsistaHandler.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/UseCases/ImportacaoEditais/AlocacaoBolsistaCase/SetStatusEmAvaliacaoAlocacaoBolsista/SetStatusEmAvaliacaoAlocacaoBolsistaHandler.cs)

