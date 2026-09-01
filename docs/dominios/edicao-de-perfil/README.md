# Edição de Perfil

## 1. Descrição do Domínio

O domínio de **Edição de Perfil** é responsável pelo gerenciamento completo dos dados cadastrais, bancários, documentais e de identificação de todos os indivíduos vinculados ao ecossistema do ConectaFapes (bolsistas, coordenadores, pesquisadores e gestores). 

Ele atende a dois pilares fundamentais:

- **Autoatendimento (Front-office):** Permite ao bolsista/usuário manter seus dados pessoais e de contato atualizados, vincular sua conta bancária do Banestes (ou solicitar a abertura), atender às exigências documentais das modalidades de bolsa concedidas e emitir o Termo de Responsabilidade com as devidas declarações legais.

- **Gestão Cadastral (Back-office):** Permite aos gestores e administradores da agência de fomento buscar, auditar e manter dados cadastrais de pessoas físicas, gerenciar situações cadastrais (ativação/suspensão), vincular responsáveis legais para menores, consultar/importar currículo Lattes, auditar histórico de alterações e acessar painéis consolidados de vínculos (bolsas e projetos).

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição / Objetivo |
| :--- | :--- | :--- |
| **EPIC-01** | Informar Dados Pessoais, Endereço e Conta Banestes | Permite ao bolsista/usuário consultar e atualizar seus dados pessoais, contato, escolaridade, currículo Lattes e endereço residencial, além de vincular sua conta-corrente Banestes existente ou selecionar agência para abertura/cadastro de conta para viabilizar pagamentos. |
| **EPIC-02** | Informar Documentos e Termo de Responsabilidade | Permite ao bolsista anexar os documentos exigidos para suas bolsas, acompanhar o status de avaliação e gerar o Termo de Responsabilidade após preenchimento de declarações. |
| **EPIC-03** | Consulta ao Dashboard da Pessoa Física (Gestor) | Permite ao gestor visualizar o painel consolidado com o resumo geral, bolsas ativas/encerradas, projetos vinculados e contadores do indivíduo selecionado. |
| **EPIC-04** | Visualização e Importação de Currículo Lattes (Gestor) | Permite ao gestor visualizar a produção acadêmica e dados do currículo Lattes da pessoa física, viabilizando a importação ou sincronização direta caso o currículo ainda não tenha sido importado. |
| **EPIC-05** | Gestão Cadastral e Histórico de Pessoa Física (Gestor) | Permite ao gestor buscar na listagem de pessoas, cadastrar, atualizar dados cadastrais, vincular responsável legal, gerenciar situação cadastral (ativação/suspensão) e auditar o histórico completo de alterações da pessoa física. |

---

## 3. Fluxo de Navegação da Interface

### Front-office (Bolsista / Usuário)

* **Menu Lateral > Minhas Informações**
  * **Aba:** `Meus Dados`
    * **Funcionalidade:** `EPIC-01` (Informar Dados Pessoais, Endereço e Conta Banestes)
  * **Aba:** `Meus Documentos`
    * **Funcionalidade:** `EPIC-02` (Informar Documentos e Termo de Responsabilidade)

### Back-office (Gestor / Agência)

**Menu Lateral > Pessoas**
  
  * **Tela Principal:** `Pessoas Físicas` (Listagem geral para consulta, filtro e acesso aos registros)
    * **Tela:** `Detalhes` (Acessada ao selecionar um indivíduo da lista)
        * **Aba** `Dashboard`**:** `EPIC-03` (Consulta ao Dashboard da Pessoa Física)
        * **Aba Lattes:** `EPIC-04` (Visualização e Importação de Currículo Lattes)
        * **Aba Cadastro:** `EPIC-05` (Gestão Cadastral e Histórico de Pessoa Física)