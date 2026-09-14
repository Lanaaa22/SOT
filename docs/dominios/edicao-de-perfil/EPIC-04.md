# EPIC-04 - Visualizar e Importar Currículo Lattes (Gestor)

## 1. Descrição

O **EPIC-04 - Visualizar e Importar Currículo Lattes (Gestor)** é a funcionalidade de consulta, importação e sincronização acadêmica do ambiente de Back-office do ConectaFapes, destinada aos gestores e analistas da FAPES.

Essa funcionalidade permite auditar a trajetória técnico-científica e acadêmica de pesquisadores, bolsistas e coordenadores cadastrados na agência, consultando as informações estruturadas da base da Plataforma Lattes do CNPq de forma integrada ao perfil da pessoa física.

Por meio desta funcionalidade, o gestor pode:

1. **Consultar o Currículo Importado:**
    - Visualizar o resumo da trajetória profissional e a principal área de atuação;
    - Consultar o link oficial do currículo na Plataforma Lattes;
    - Acompanhar a data da última atualização no Lattes e a data da última sincronização realizada no ConectaFapes;
    - Navegar pelas produções acadêmicas organizadas por seções temáticas: **Artigos**, **Orientações**, **Projetos**, **Formações**, **Livros**, **Eventos e Prêmios** e **Idiomas**;
    - Filtrar em tempo real os registros de cada seção através de busca textual por palavras-chave.

2. **Importar Currículo Automaticamente:**
    - Quando o indivíduo ainda não possui currículo importado no sistema, o gestor aciona a importação automática diretamente na interface;
    - O sistema resolve o identificador Lattes a partir da URL informada nos dados pessoais ou por busca automatizada no CNPq por CPF, nome e data de nascimento, realizando o download e processamento do currículo.

3. **Sincronizar sob Demanda:**
    - Atualizar os dados acadêmicos com as alterações mais recentes registradas na Plataforma Lattes através do botão de sincronização, mantendo o histórico sempre atualizado para avaliação e concessão de fomento.

---

## 2. Fluxo de Navegação

### Back-office (Gestor / Agência)

**Menu Lateral > Cadastros > Pessoas**

  * **Tela Principal:** `Pessoas Físicas` (Listagem geral para consulta, filtro e acesso aos registros)
    * **Tela:** `Detalhes` (Acessada ao selecionar um indivíduo da lista)
        * **Aba:** `Lattes`
            * **Funcionalidade:** `EPIC-04` (Visualizar e Importar Currículo Lattes)

---

## 3. Regras de Negócio

- **RN01 - Controle de Acesso e Perfis Autorizados (Back-office):** O acesso à visualização, importação e sincronização do currículo Lattes é restrito a usuários autenticados no Back-office com permissões administrativas e de gestão de pessoas da FAPES.
- **RN02 - Estado de Currículo Não Importado e Ação de Importação:** Caso a pessoa física ainda não possua currículo importado (retorno HTTP 404 da consulta), a interface exibe um estado visual informativo (*empty state*) acompanhado do botão para acionar a importação automática imediata.
- **RN03 - Resolução Automática do Identificador Lattes:** No fluxo de importação automática, o sistema busca o número Lattes (16 dígitos numéricos) seguindo a ordem de precedência:
    * Extração do identificador a partir da URL do Lattes já preenchida no cadastro da pessoa física;
    * Caso a URL não exista ou não contenha o número, consulta a API do CNPq utilizando CPF, nome e data de nascimento cadastrados para localizar o identificador, gravando a URL resolvida de volta no perfil da pessoa.
- **RN04 - Unicidade do Currículo e do Número Lattes:** Uma pessoa física pode possuir apenas um único currículo vinculado. Da mesma forma, um mesmo número Lattes não pode estar vinculado a mais de uma pessoa física distinta no sistema.
- **RN05 - Cooldown de Sincronização sob Demanda:** Para evitar sobrecarga e bloqueios nos serviços do CNPq, a sincronização sob demanda possui um intervalo mínimo de tolerância (*cooldown*) de **1 hora** a partir da última sincronização. Tentativas de sincronização antes desse prazo são rejeitadas pela API, informando a data e o horário a partir dos quais uma nova atualização será liberada.
- **RN06 - Otimização de Sincronização por Data da Fonte (Short-circuit):** Ao solicitar a sincronização, o sistema realiza uma checagem preliminar da data de atualização do currículo no CNPq. Se a data na fonte for igual ou anterior à já importada, o processo conclui renovando o registro da sincronização sem a necessidade de reprocessar todos os registros nem incrementar a versão do currículo.
- **RN07 - Preservação dos Dados em Falhas Externas:** Caso ocorra indisponibilidade temporária, erro de rede ou inconsistência de resposta nos servidores do CNPq durante a importação ou sincronização, os dados do currículo anteriormente gravados no sistema são integralmente preservados.
- **RN08 - Estruturação e Busca Dinâmica nas Seções Acadêmicas:** As produções acadêmicas do currículo são segmentadas nas categorias oficiais (Artigos, Orientações, Projetos, Formações, Livros, Eventos/Prêmios e Idiomas). A tela exibe contadores por seção com navegação rápida por âncoras e oferece um campo de pesquisa para filtrar instantaneamente os registros exibidos nas tabelas.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/curriculum/pessoas/{id}/curriculo` | Retorna o currículo Lattes completo importado da pessoa física (ou 404 caso não importado) | `leds-conectafapes-backend-admin` / `CurriculoController` |
| `POST` | `/api/curriculum/pessoas/{id}/curriculo/importacao-automatica` | Realiza a importação automática do currículo Lattes resolvendo o identificador via URL ou CNPq | `leds-conectafapes-backend-admin` / `CurriculoController` |
| `POST` | `/api/curriculum/pessoas/{id}/curriculo/sincronizacoes` | Sincroniza e atualiza os dados acadêmicos a partir da Plataforma Lattes sob demanda (cooldown de 1h) | `leds-conectafapes-backend-admin` / `CurriculoController` |
| `POST` | `/api/curriculum/pessoas/{id}/curriculo` | Vincula um número Lattes informado manualmente e realiza a importação da primeira versão | `leds-conectafapes-backend-admin` / `CurriculoController` |
| `POST` | `/api/curriculum/pessoas/{id}/curriculo/identificador` | Consulta o serviço do CNPq por CPF, nome e data de nascimento para localizar o número Lattes | `leds-conectafapes-backend-admin` / `CurriculoController` |

---

## 5. Referências

- **Domínio SOT:**
    - [`docs/dominios/edicao-de-perfil/README.md`](https://github.com/Lanaaa22/SOT/blob/main/docs/dominios/edicao-de-perfil/README.md)
- **Front-end (`leds-conectafapes-frontend-backoffice`):**
    - [`src/modules/Pessoas/components/CurriculoLattes.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/components/CurriculoLattes.vue)
    - [`src/modules/Pessoas/composables/usePessoaCurriculo.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/composables/usePessoaCurriculo.ts)
    - [`src/modules/Pessoas/api/services/PessoaService.ts`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/api/services/PessoaService.ts)
    - [`src/modules/Pessoas/view/DetalhesPessoa.vue`](https://github.com/leds-conectafapes/leds-conectafapes-frontend-backoffice/blob/develop/src/modules/Pessoas/view/DetalhesPessoa.vue)
- **Back-end (`leds-conectafapes-backend-admin`):**
    - [`src/ConectaFapes/ConectaFapes.WebApi/Controllers/Curriculum/CurriculoController.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.WebApi/Controllers/Curriculum/CurriculoController.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/ImportarCurriculoAutomatico/ImportarCurriculoAutomaticoService.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/ImportarCurriculoAutomatico/ImportarCurriculoAutomaticoService.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/SincronizarCurriculo/SincronizarCurriculoService.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/SincronizarCurriculo/SincronizarCurriculoService.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/VincularCurriculo/VincularCurriculoService.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/VincularCurriculo/VincularCurriculoService.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/ObterCurriculo/ObterCurriculoService.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/ObterCurriculo/ObterCurriculoService.cs)
    - [`src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/ObterCurriculo/ObterCurriculoDto.cs`](https://github.com/leds-conectafapes/leds-conectafapes-backend-admin/blob/develop/src/ConectaFapes/ConectaFapes.Application/Services/Curriculum/Curriculo/ObterCurriculo/ObterCurriculoDto.cs)

