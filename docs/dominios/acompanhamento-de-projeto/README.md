# D003 - Acompanhamento de Projeto

## 1. Descrição do Domínio

O domínio de **Acompanhamento de Projeto** é responsável pelo monitoramento contínuo da execução física e orçamentária dos projetos de pesquisa, desenvolvimento e inovação fomentados pelo ConectaFapes, bem como pelo acompanhamento das bolsas concedidas.

Ele atende a dois pilares fundamentais:

- **Visão do Bolsista (Front-office):** Permite ao bolsista consultar os detalhes de seu vínculo com o projeto, visualizar o plano de trabalho e as atividades previstas/executadas, além de acompanhar o extrato detalhado de pagamentos de bolsa recebidos e programados.

- **Visão do Coordenador e Gestão (Front-office & Back-office):** Permite ao coordenador monitorar os indicadores de vigência e saúde financeira do projeto (orçamento, rubricas e saldo), bem como planejar e executar o remanejamento de cotas de bolsas e recursos financeiros entre modalidades, funcionalidade que também pode ser auditada e operada pela agência de fomento no Back-office.

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição / Objetivo |
| :--- | :--- | :--- |
| **EPIC-01** | Acompanhar Pagamento de Bolsa (Bolsista) | Permite ao bolsista consultar, filtrar por projeto/ano/status e acompanhar o extrato de parcelas pagas e previstas da sua bolsa, com opção de exportação dos registros em CSV. |
| **EPIC-02** | Consultar Dados da Bolsa no Projeto (Bolsista) | Permite ao bolsista visualizar os dados consolidados da sua bolsa ativa no projeto (modalidade, vigência e orientador) e o detalhamento das atividades do plano de trabalho. |
| **EPIC-03** | Consultar Dados e Indicadores do Projeto (Coordenador) | Permite ao coordenador acompanhar o resumo geral do projeto, edital de origem, datas de início/fim de vigência, resumo financeiro, rubricas e detalhamento orçamentário. |
| **EPIC-04** | Remanejamento de Recursos e Cotas de Bolsa (Coordenador / Gestor) | Permite ao coordenador ou gestor ajustar quantidades de cotas por nível/modalidade de bolsa, simular impactos no saldo orçamentário, confirmar remanejamentos e auditar o histórico de alterações. |

---

## 3. Fluxo de Navegação da Interface

### Front-office (Bolsista / Coordenador)

**Menu Lateral > Início**

* **Tela:** `Portal Fapes` / `Informações da Bolsa`
  * **Funcionalidade:** `EPIC-02` (Consultar Dados da Bolsa no Projeto)

**Menu Lateral > Meus Pagamentos**

* **Tela:** `Pagamentos`
  * **Funcionalidade:** `EPIC-01` (Acompanhar Pagamento de Bolsa)

**Menu Lateral > Meu Projeto**

* **Tela:** `Meu Projeto`
  * **Funcionalidade:** `EPIC-03` (Consultar Dados e Indicadores do Projeto)

**Menu Lateral > Remanejamento**

* **Tela:** `Remanejamento`
  * **Funcionalidade:** `EPIC-04` (Remanejamento de Recursos e Cotas de Bolsa)

### Back-office (Gestor / Agência)

**Menu Lateral > Remanejamento**

* **Tela:** `Remanejamento` (Pesquisa e seleção do projeto na base)
  * **Funcionalidade:** `EPIC-04` (Remanejamento de Recursos e Cotas de Bolsa)
