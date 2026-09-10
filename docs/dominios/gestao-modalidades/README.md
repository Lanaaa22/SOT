# Gestão de Modalidades / Níveis de Bolsa

## 1. Descrição do Domínio

O domínio de **Gestão de Modalidades / Níveis de Bolsa** é responsável por estruturar todas as modalidades de bolsas concedidas pela FAPES, seus respectivos níveis de remuneração, versões e critérios de elegibilidade. Por meio do Back-office (Gestor / Analista FAPES), a equipe técnica centraliza o cadastro das resoluções, modalidades, níveis e versões, e os critérios de bolsa, garantindo o controle rigoroso, compatibilidade e a validação das exigências documentais e acadêmicas para a concessão de bolsas nos projetos fomentados.

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição / Objetivo |
| :--- | :--- | :--- |
| **EPIC-01** | Gerenciar Requisitos de Bolsa (CRUD) | Permitir a consulta, pesquisa, inclusão, edição e exclusão dos requisitos e documentos comprobatórios de elegibilidade (acadêmicos, profissionais e perenes) exigidos para concessão de bolsas nas modalidades e níveis. |
| **EPIC-02** | Gerenciar Resoluções (CRUD) | Permitir a consulta, pesquisa, cadastro, edição e exclusão das resoluções normativas oficiais da FAPES (número, data, ementa, link de publicação e número E-Docs) que regulamentam e dão respaldo legal às modalidades de bolsa, bem como o download da publicação oficial em PDF. |
| **EPIC-03** | Gerenciar Modalidades, Níveis e Versões (CRUD) | Permitir a consulta, pesquisa, criação, edição e ativação de modalidades de bolsa da FAPES, gerenciamento de versões com vigência e redução por vínculo, e configuração de níveis remuneratórios (valores, moeda e carga horária). |
| **EPIC-04** | Visualizar Pendências | Permitir ao gestor da FAPES consultar, filtrar e auditar as pendências de bolsas e documentos comprobatórios submetidos nos editais e projetos, acompanhando status de aprovação e avaliando documentações para aprovação, reprovação ou solicitação de revisão. |

---

## 3. Fluxo de Navegação da Interface

### Back-office (Gestor / Analista FAPES)

**Menu Lateral > Gestão de Bolsas > Requisitos**

* **Tela:** `Requisitos (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-01` (Gerenciar Requisitos de Bolsa (CRUD))

* **Tela:** `Incluir Requisito`
  * **Funcionalidade:** `EPIC-01` (Gerenciar Requisitos de Bolsa (CRUD))

* **Tela:** `Editar Requisito`
  * **Funcionalidade:** `EPIC-01` (Gerenciar Requisitos de Bolsa (CRUD))

**Menu Lateral > Gestão de Bolsas > Resoluções**

* **Tela:** `Resoluções (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-02` (Gerenciar Resoluções (CRUD))

* **Tela:** `Incluir Resolução`
  * **Funcionalidade:** `EPIC-02` (Gerenciar Resoluções (CRUD))

* **Tela:** `Editar Resolução`
  * **Funcionalidade:** `EPIC-02` (Gerenciar Resoluções (CRUD))

**Menu Lateral > Gestão de Bolsas > Modalidades**

* **Tela:** `Modalidades (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões (CRUD))

* **Tela:** `Cadastrar Modalidade`
  * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões (CRUD))

* **Tela:** `Editar Modalidade`
  * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões (CRUD))
  * **Seção:** `Requisitos da Modalidade`
    * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões (CRUD))
  * **Seção:** `Níveis da Modalidade`
    * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões (CRUD))

**Menu Lateral > Gestão de Bolsas > Visualizar Pendências**

* **Tela:** `Visualizar Pendências (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-04` (Visualizar Pendências)

* **Tela:** `Documentos do Bolsista`
  * **Funcionalidade:** `EPIC-04` (Visualizar Pendências)