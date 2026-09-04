# Gerir Pagamentos

## 1. Descrição do Domínio

O domínio de **Gerir Pagamentos** é responsável pelo planejamento, controle orçamentário, operacionalização e liquidação financeira dos pagamentos mensais de bolsas concedidas a pesquisadores e estudantes vinculados aos editais da FAPES.

Ele atende a dois pilares fundamentais:

- **Operação e Controle Técnico (Back-office / Áreas Técnicas):** Permite às gerências das áreas finalísticas da FAPES auditar os projetos e bolsistas ativos da competência, verificar a conformidade dos valores previstos e autorizar ou negar formalmente a liberação dos editais sob sua gestão para inclusão na folha de pagamento mensal.

- **Gestão Financeira e Liquidação Bancária (Back-office / GEPOF e DIRAF):** Permite à Gerência de Planejamento e Orçamento Financeiro (GEPOF) e à Diretoria Administrativa e Financeira (DIRAF) estabelecer o calendário anual de marcos (M1, M2 e M3), gerenciar bônus por modalidade, processar e autorizar as folhas de pagamento consolidadas, gerenciar e auditar as cotas de pagamento dos bolsistas e emitir os arquivos de remessa bancária integrados ao Banestes e ao Bandes.

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição |
| :--- | :--- | :--- |
| **EPIC-01** | Edição de Calendário de Pagamento | Permite configurar e manter o calendário anual com os marcos de solicitação de bolsas (M1), geração da folha (M2) e data de pagamento (M3) para cada mês de competência. |
| **EPIC-02** | Liberar Edital para Pagamento | Permite que a área técnica responsável revise os bolsistas e projetos vinculados ao edital na competência e autorize ou negue a inclusão do edital na folha de pagamento mensal. |
| **EPIC-03** | Monitorar Liberação de Editais | Permite acompanhar em tempo real o status de liberação dos editais pelas diferentes áreas técnicas da FAPES, identificando pendências antes da geração da folha. |
| **EPIC-04** | Gestão de Folhas de Pagamento | Permite aos gestores listar as folhas de pagamento geradas, consultar o detalhamento analítico de valores e beneficiários por edital e disparar a geração da folha da competência. |
| **EPIC-05** | Aprovação de Pagamento | Permite à Diretoria Administrativa e Financeira (DIRAF) avaliar os valores consolidados da folha de pagamento gerada e autorizar formalmente o pagamento ou cancelar a folha para ajustes. |
| **EPIC-06** | Cadastro de Bônus de Pagamento | Permite cadastrar, editar ou excluir bonificações extraordinárias (valor fixo ou percentual sobre a bolsa) a serem concedidas aos bolsistas em determinadas competências. |
| **EPIC-07** | Gestão de Cotas de Pagamento | Permite aos gestores consultar os dados do bolsista no projeto e gerenciar suas cotas de pagamento, possibilitando a inclusão de novas cotas, exclusão de cotas e registro de pagamentos externos mediante justificativa. |
| **EPIC-08** | Gerar e Monitorar Remessas Bancárias | Permite gerar, exportar e acompanhar os arquivos de remessa para o Banestes (cadastro de beneficiários e ordens de pagamento da folha aprovada) e emitir solicitações de transferência ao Bandes. |
| **EPIC-09** | Cadastrar e Gerenciar Editais | Permite cadastrar novos editais de fomento no sistema, consultar a listagem geral de editais existentes e atualizar suas configurações, vigências e parâmetros operacionais. |

---

## 3. Fluxo de Navegação da Interface

### Back-office (Gestão Financeira / Áreas Técnicas)

**Menu Lateral > Calendário**

* **Tela:** `Calendário da Folha`
    * **Funcionalidade:** `EPIC-01` (Edição de Calendário de Pagamento)

**Menu Lateral > Liberar Editais**

* **Tela:** `Liberação de Editais`
    * **Funcionalidade:** `EPIC-02` (Liberar Edital para Pagamento)
    * **Tela:** `Visualizar Projetos de Edital`
        * **Tela:** `Visualizar Bolsistas`
            * **Funcionalidade:** `EPIC-02` (Liberar Edital para Pagamento)

**Menu Lateral > Monitorar Liberação Das Áreas**

* **Tela:** `Monitorar Liberação Das Áreas`
    * **Funcionalidade:** `EPIC-03` (Monitorar Liberação de Editais)
    * **Tela:** `Gerar Folha` (Acessada ao clicar em `Prosseguir para geração`)
        * **Funcionalidade:** `EPIC-04` (Gestão de Folhas de Pagamento)

**Menu Lateral > Listar Folhas**

* **Tela:** `Listar Folhas`
    * **Funcionalidade:** `EPIC-04` (Gestão de Folhas de Pagamento)
    * **Tela:** `Visualizar Folha`
        * **Funcionalidade:** `EPIC-04` (Gestão de Folhas de Pagamento)
        * **Funcionalidade:** `EPIC-05` (Aprovação de Pagamento)
        * **Tela:** `Monitorar Remessas`
            * **Funcionalidade:** `EPIC-08` (Gerar e Monitorar Remessas Bancárias)
      * **Tela:** `Solicitar Transferência de Recursos`
        * **Funcionalidade:** `EPIC-08` (Gerar e Monitorar Remessas Bancárias)

**Menu Lateral > Bônus de Pagamento**

* **Tela:** `Bônus de pagamento`
    * **Funcionalidade:** `EPIC-06` (Cadastro de Bônus de Pagamento)
    * **Tela:** `Editar Bônus de Pagamento`
        * **Funcionalidade:** `EPIC-06` (Cadastro de Bônus de Pagamento)

**Menu Lateral > Gerenciar Cotas**

* **Tela:** `Gerenciar Pagamento Bolsista`
    * **Funcionalidade:** `EPIC-07` (Gestão de Cotas de Pagamento)
    * **Aba:** `Gerenciar Cotas` (Acessada ao clicar no ícone de cifrão `$` na linha do bolsista)
        * **Funcionalidade:** `EPIC-07` (Gestão de Cotas de Pagamento)

* **Tela:** `Processar Remessa de Cadastro`
  * **Funcionalidade:** `EPIC-08` (Gerar e Monitorar Remessas Bancárias)

**Menu Lateral > Gestão de Editais**

* **Tela:** `Editais`
  * **Funcionalidade:** `EPIC-09` (Cadastrar e Gerenciar Editais)
  * **Tela:** `Editar Edital`
    * **Funcionalidade:** `EPIC-09` (Cadastrar e Gerenciar Editais)