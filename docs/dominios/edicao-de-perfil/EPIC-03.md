# EPIC-03 - Consultar o Dashboard da Pessoa Física (Gestor)

## 1. Descrição

O **EPIC-03 - Consultar o Dashboard da Pessoa Física (Gestor)** é a funcionalidade de auditoria e monitoramento cadastral do ambiente de Back-office do ConectaFapes, voltada aos gestores, analistas e administradores da FAPES.

Seu objetivo é disponibilizar uma visão consolidada, unificada e em tempo real sobre todo o histórico de atuação e fomento concedido a um determinado indivíduo (pesquisador, bolsista, voluntário ou coordenador) dentro dos projetos da agência de fomento.

Por meio desta funcionalidade, o gestor consulta:

1. **Painel de Indicadores e Contadores Gerais:**
   - **Projetos Vinculados:** Quantidade total de projetos em que o indivíduo atua ou atuou formalmente (como coordenador ou pesquisador/bolsista);
   - **Bolsas Recebidas:** Total acumulado de concessões de bolsas já vinculadas à pessoa física ao longo de todo o histórico;
   - **Bolsas em Andamento:** Quantidade de bolsas que se encontram atualmente com status ativo (`ATIVA`);
   - **Valor Mensal Ativo:** Montante total financeiro (R$) transferido mensalmente à pessoa física pela FAPES com base nas bolsas ativas, considerando deduções legais caso haja vínculo empregatício.

2. **Projetos Vinculados:**
    - "Projetos em que a pessoa está presente";
    - Papel de atuação exercido no projeto (`Coordenador` ou `Pesquisador`);
    - Nome do edital/programa de fomento de origem;
    - Período de vigência do projeto (data de início e previsão de término da atividade);
    - Status da situação do projeto (`Em Andamento`, `Cancelado`, `Substituído`, `Finalizado`, `Suspenso` ou `Indefinido`).

3. **Histórico de Bolsas do Indivíduo:**
    - "Bolsas recebidas ou em recebimento";
    - Sigla da modalidade e nível de fomento da bolsa;
    - Projeto vinculado à concessão;
    - Valor mensal da bolsa (calculado com o fator de redução caso possua vínculo laboral concomitante);
    - Período de vigência da bolsa (data de início e data final de atividade);
    - Situação detalhada da bolsa (`Ativa`, `Documentação Pendente`, `Em Avaliação`, `Aguardando Aceites`, `Pendente de Avaliação`, `Suspensa`, `Cancelada`, `Finalizada`, `Em Edição` ou `Reprovada`).

---

## 2. Fluxo de Navegação

### Back-office (Gestor / Agência)

**Menu Lateral > Cadastros > Pessoas**

  * **Tela Principal:** `Pessoas Físicas` (Listagem geral para consulta, filtro e acesso aos registros)
    * **Tela:** `Detalhes` (Acessada ao selecionar um indivíduo da lista)
        * **Aba:** `Dashboard`
            * **Funcionalidade:** `EPIC-03` (Consultar o Dashboard da Pessoa Física)

---

## 3. Regras de Negócio

- **RN01 - Controle de Acesso e Perfis Autorizados (Back-office):** A visualização do dashboard da pessoa física no back-office é restrita a usuários autenticados que possuam os papéis de `ADMIN` ou `GERENTE_GEPOF`. Requisições realizadas por usuários sem esses papéis são rejeitadas pela API.
- **RN02 - Composição dos Contadores Consolidados:** As métricas em destaque no topo da tela refletem a apuração instantânea dos vínculos cadastrados:
    * **Projetos Vinculados:** Quantidade total de projetos em que a pessoa consta na coordenação ou possui alocação de bolsa;
    * **Bolsas Recebidas:** Quantidade total histórica de alocações de bolsa já criadas para a pessoa física;
    * **Bolsas em Andamento:** Quantidade de alocações que se encontram estritamente no status `ATIVA`;
    * **Valor Mensal Ativo:** Somatório do valor mensal de todas as bolsas ativas da pessoa física, formatado em moeda corrente (BRL / R$).
- **RN03 - Cálculo do Valor Mensal e Redução por Vínculo Empregatício:** O valor financeiro de cada alocação é obtido a partir do valor estipulado para a versão do nível da bolsa. Caso a bolsa possua indicativo de redução, o sistema calcula o valor efetivo multiplicando o valor base pelo índice de redução configurado na modalidade (`VersaoNivel.Valor * VersaoModalidade.ReducaoPorVinculo`). Caso não haja redução, é considerado o valor integral base. Se as referências de nível ou modalidade não existirem, o valor é contabilizado como 0.
- **RN04 - Apuração do Papel e Dados de Projetos:** Na listagem de projetos vinculados à pessoa física:
    * O papel do participante é categorizado dinamicamente como **Coordenador** caso o identificador da pessoa conste na lista de coordenadores do projeto; caso contrário, é categorizado como **Pesquisador**;
    * Caso o projeto não possua um programa ou edital associado cadastrado no banco de dados, o sistema exibe o rótulo de contingência *"Sem programa"*;
    * O período de vigência é apresentado no padrão `DD/MM/YYYY - DD/MM/YYYY`, utilizando traço (`—`) para datas não preenchidas.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/gestaocadastro/pessoafisica/{id}/dashboard` | Retorna os contadores resumidos, a relação de projetos e o histórico de bolsas da pessoa física | `leds-conectafapes-backend-admin` / `PessoaFisicaController` |
| `GET` | `/api/gestaocadastro/pessoafisica/{id}` | Recupera os dados cadastrais básicos da pessoa física para alimentar o cabeçalho e navegação de detalhes | `leds-conectafapes-backend-admin` / `PessoaFisicaController` |
| `POST` | `/api/gestaocadastro/pessoafisica/list` | Realiza a consulta paginada e filtrada de pessoas físicas na listagem principal do back-office | `leds-conectafapes-backend-admin` / `PessoaFisicaController` |

---

## 5. Referências

- **Domínio SOT:**
    - [`docs/dominios/edicao-de-perfil/README.md`](https://github.com/Lanaaa22/SOT/blob/main/docs/dominios/edicao-de-perfil/README.md)
- **Front-end (`leds-conectafapes-frontend-backoffice`):**
    - [`src/modules/Pessoas/components/DashboardPessoa.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/components/DashboardPessoa.vue)
    - [`src/modules/Pessoas/composables/usePessoaDashboard.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/composables/usePessoaDashboard.ts)
    - [`src/modules/Pessoas/api/services/PessoaService.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/api/services/PessoaService.ts)
    - [`src/modules/Pessoas/entities/pessoaEntities.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/entities/pessoaEntities.ts)
    - [`src/modules/Pessoas/view/DetalhesPessoa.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/view/DetalhesPessoa.vue)
- **Back-end (`leds-conectafapes-backend-admin`):**
    - [`src/ConectaFapes/ConectaFapes.WebApi/Controllers/GestaoCadastro/PessoaFisicaController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.WebApi/Controllers/GestaoCadastro/PessoaFisicaController.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/DashboardPessoaFisicaService.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/DashboardPessoaFisicaService.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/UseCase/DashboardPessoaFisicaHandler.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/UseCase/DashboardPessoaFisicaHandler.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/UseCase/DashboardPessoaFisicaCommand.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/UseCase/DashboardPessoaFisicaCommand.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaResponseDto.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaResponseDto.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaContadoresDto.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaContadoresDto.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaProjetoDto.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaProjetoDto.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaBolsaDto.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Dashboard/Dtos/DashboardPessoaFisicaBolsaDto.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Shared/PessoaFisicaAuthorizationHelper.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/GestaoCadastro/PessoaFisica/Shared/PessoaFisicaAuthorizationHelper.cs)

