# Prestação de Contas

## 1. Descrição do Domínio

O domínio de **Prestação de Contas** é responsável pelo controle e comprovação da execução financeira dos projetos de pesquisa, desenvolvimento e inovação fomentados pela FAPES. Ele abrange desde a conciliação e o monitoramento do saldo bancário e das rubricas orçamentárias autorizadas, passando pelo detalhamento e comprovação de gastos realizados com recursos públicos (documentos fiscais, diárias, passagens e cotações de fornecedores), até a análise técnica e deliberação formal pelas equipes da FAPES.

- **Execução e Comprovação Financeira (Front-office - Coordenador):** Permite ao coordenador do projeto monitorar a evolução dos gastos em relação ao orçamento previsto, acompanhar o extrato das transações bancárias da conta vinculada (débitos e créditos), prestar contas detalhadas de cada despesa anexando comprovantes fiscais e cotações exigidas e submeter a prestação de contas para avaliação da FAPES.

- **Auditoria e Homologação de Contas (Back-office - Gestor / Agência):** Permite aos analistas e gestores da FAPES auditar as prestações de contas financeiras submetidas, conferir a autenticidade e conformidade de documentos fiscais e orçamentos, aprovar prestações, devolver para revisão apontando pendências ou negar despesas não conformes, assegurando o cumprimento das normas legais e dos editais de fomento.

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição / Objetivo |
| :--- | :--- | :--- |
| **EPIC-01** | Acrescentar Gasto | Permite ao coordenador do projeto detalhar e comprovar despesas vinculadas a transações de débito da conta do projeto, incluindo documentos fiscais (NF-e/NFS-e, diárias, passagens ou invoices), orçamentos de fornecedores concorrentes, classificação contábil por rubrica e submissão formal para análise da FAPES. |
| **EPIC-02** | Visualizar Extrato do Projeto | Permite ao coordenador do projeto consultar e acompanhar o extrato completo das transações bancárias da conta vinculada (débitos e créditos), filtrar movimentações por data, tipo, status e faixa de valor, e exportar a relação de lançamentos em formato CSV. |
| **EPIC-03** | Visualizar Progresso do Orçamento | Permite ao coordenador acompanhar visualmente o consumo orçamentário do projeto, monitorando os limites aprovados, valores executados e saldo disponível consolidado e por conta contábil em tempo real. |
| **EPIC-04** | Acompanhar (Gestor) | Permite aos gestores e analistas da FAPES gerenciar, filtrar e auditar as prestações de contas financeiras submetidas, analisar documentos fiscais e cotações, homologar aprovações, solicitar correções e revisões ou registrar negações fundamentadas. |

---

## 3. Fluxo de Navegação da Interface

### Front-office (Coordenador)

**Menu Lateral > Prestação de Contas > Financeiro**

  * **Tela:** `Prestação de Contas Financeira`
    * **Funcionalidade:** `EPIC-02` (Visualizar Extrato do Projeto)
    * **Funcionalidade:** `EPIC-03` (Visualizar Progresso do Orçamento)
  * **Tela:** `Detalhes`
    * **Funcionalidade:** `EPIC-01` (Acrescentar Gasto)
  * **Tela:** `Classificar Crédito`
    * **Funcionalidade:** `EPIC-01` (Acrescentar Gasto)

### Back-office (Gestor / Agência)

**Menu Lateral > Prestação de Contas > Financeiro**

  * **Tela:** `Listagem de Prestações Financeiras`
    * **Funcionalidade:** `EPIC-04` (Acompanhar (Gestor))
  * **Tela:** `Débitos`
    * **Funcionalidade:** `EPIC-04` (Acompanhar (Gestor))
  * **Tela / Visão:** `Créditos`
    * **Funcionalidade:** `EPIC-04` (Acompanhar (Gestor))

---

## Termos Básicos

* **Rubricas Orçamentárias:** Categorias que definem os tipos de gastos autorizados no projeto (ex.: *Passagens*, *Diárias*, *Material de Consumo*, *Serviços de Terceiros*, *Equipamentos*). Na prestação de contas, toda despesa declarada deve ser vinculada à sua respectiva rubrica e abatida do saldo orçamentário aprovado pela FAPES.