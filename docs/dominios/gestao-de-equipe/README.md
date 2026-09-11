# Gestão de Equipe

## 1. Descrição do Domínio

O domínio de **Gestão de Equipe** é responsável por gerenciar a composição de membros, bolsistas e voluntários vinculados aos projetos de pesquisa, desenvolvimento e inovação fomentados pela FAPES. Ele contempla todo o ciclo de vida da equipe no projeto: desde a criação de solicitações de bolsa e indicação de voluntários pelo coordenador, o envio de documentos comprobatórios e aceite de termos pelos participantes, a submissão formal e avaliação técnica pela FAPES, até a manutenção contínua dos vínculos por meio de extensões (aditivos), cancelamentos e monitoramento da situação das bolsas.

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição |
| :--- | :--- | :--- |
| **EPIC-01** | Criar Solicitação | Permitir que o Coordenador crie e configure a solicitação de bolsa para um membro da equipe no projeto, definindo modalidade, vigência, cotas e dados iniciais do bolsista. |
| **EPIC-02** | Adicionar Documentos na Solicitação | Permitir que o Bolsista informe seus dados complementares, anexe os documentos comprobatórios exigidos pela modalidade e aceite o Termo de Responsabilidade. |
| **EPIC-03** | Submeter Solicitação | Permitir que o Coordenador revise as informações e documentos enviados pelo bolsista e realize a submissão formal da solicitação de bolsa para avaliação da FAPES. |
| **EPIC-04** | Avaliar Solicitação | Permitir que a equipe técnica da FAPES avalie a solicitação e os documentos comprobatórios, podendo aprovar, solicitar revisão de pendências ou reprovar o pedido antes da implementação da bolsa. |
| **EPIC-05** | Adicionar Voluntário | Permitir que o Coordenador indique membros voluntários para atuar no projeto sem remuneração financeira. |
| **EPIC-06** | Aceitar Voluntariado | Permitir que o usuário indicado como voluntário visualize o convite na página inicial do portal e aceite ou recuse sua participação no projeto. |
| **EPIC-07** | Visualizar Situação de Bolsas | Permitir que os gestores e analistas da FAPES monitorem a situação geral das bolsas, indicadores, solicitações pendentes, aprovadas e reprovadas por edital e projeto. |
| **EPIC-08** | Estender Bolsa | Permitir a solicitação de aditivo/prorrogação do período de vigência de bolsas ativas no projeto. |
| **EPIC-09** | Cancelar Bolsa | Permitir que o Coordenador solicite o cancelamento e encerramento antecipado do vínculo de uma bolsa ativa ou a finalização da atuação de um voluntário no projeto. |
| **EPIC-10** | Acompanhar Pagamentos da Equipe | Permitir ao coordenador consultar, filtrar por bolsista/ano/modalidade/status e acompanhar o extrato consolidado e a situação de pagamentos das bolsas de toda a equipe do projeto. |

---

## 3. Fluxo de Navegação da Interface

### Front-office (Coordenador)

**Menu Lateral > Gerenciamento > Minha equipe**

  * **Aba:** `Informações das Bolsas`
    * Painel de indicadores de bolsas da equipe (orçamento, cotas ativas, planejadas, utilizadas e disponíveis, modalidades e gráfico de tendência).
  * **Aba:** `Bolsistas do Projeto`
    * **Menu Ações > Solicitar Bolsa:** `EPIC-01` (Criar Solicitação)
    * **Menu Ações > Adicionar Voluntário:** `EPIC-05` (Adicionar Voluntário)
    * **Ações da Tabela > Submeter Solicitação:** `EPIC-03` (Submeter Solicitação)
    * **Ações da Tabela > Estender Bolsa:** `EPIC-08` (Estender Bolsa)
    * **Ações da Tabela > Cancelar Bolsa:** `EPIC-09` (Cancelar Bolsa)
  * **Aba:** `Pagamentos`
    * **Funcionalidade:** `EPIC-10` (Acompanhar Pagamentos da Equipe)

### Front-office (Bolsista)

**Menu Lateral > Meu Perfil > Minhas Informações**

  * **Aba:** `Meus Documentos`
    * **Funcionalidade:** `EPIC-02` (Adicionar Documentos na Solicitação)

### Front-office (Voluntário)

**Menu Lateral > Início**

  * **Card:** `Convite de Voluntariado`
    * **Funcionalidade:** `EPIC-06` (Aceitar Voluntariado)

### Back-office (FAPES / Gestor)

**Menu Lateral > Gestão de Bolsas > Visualizar Pendências**

  * **Tela:** `Visualizar Pendências (Listagem e Filtros)`
    * **Funcionalidade:** `EPIC-07` (Visualizar Situação de Bolsas)
    * **Tela:** `Documentos do Bolsista` (Acessada ao clicar no ícone de visualização na listagem)
      * **Funcionalidade:** `EPIC-04` (Avaliar Solicitação)

