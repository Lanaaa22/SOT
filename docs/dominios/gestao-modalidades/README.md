# Gestão de Modalidades

## 1. Descrição do Domínio

O domínio de **Gestão de Modalidades** é responsável por estruturar todas as modalidades de bolsas concedidas pela FAPES, seus respectivos níveis de remuneração, versões e critérios de elegibilidade. Ele centraliza as regras que definem os valores pagos, a carga horária e as exigências documentais e acadêmicas necessárias para a concessão de bolsas no âmbito dos projetos fomentados.

Ele atende a dois pilares fundamentais:

- **Parametrização Normativa e Regulamentar (Back-office - Gestor / Analista FAPES):** Permite à equipe técnica da FAPES cadastrar e gerenciar as resoluções oficiais publicadas, definir o catálogo de requisitos e comprovantes exigidos e estruturar as modalidades de bolsas com controle rigoroso de versões, vigências e compatibilidades entre benefícios.

- **Estruturação de Níveis e Critérios de Concessão (Back-office - Gestor / Analista FAPES):** Permite configurar e detalhar os diferentes níveis remuneratórios dentro de cada modalidade (valores mensais, moeda e carga horária semanal), além de vincular requisitos e comprovantes específicos a cada nível para validar a formação e a qualificação dos bolsistas.

---

## 2. EPICs (Funcionalidades)

| EPIC | Nome da Funcionalidade | Descrição / Objetivo |
| :--- | :--- | :--- |
| **EPIC-01** | Gestão de Modalidades e Níveis de Bolsa | Permitir a consulta, pesquisa e visualização detalhada das modalidades de bolsa da FAPES, acompanhando suas versões ativas, versões em edição e os níveis remuneratórios configurados. |
| **EPIC-02** | Cadastrar Modalidade, Níveis e Versões | Permitir a criação de modalidades de bolsa, o gerenciamento de versões com vigência e redução por vínculo, a configuração de níveis remuneratórios (valores, moeda e carga horária) e a ativação de novas versões. |
| **EPIC-03** | Cadastrar Resolução | Permitir o cadastro, consulta, edição e exclusão das resoluções normativas oficiais da FAPES (número, data, ementa, link de publicação e número E-Docs) que regulamentam e dão respaldo legal às modalidades de bolsa. |
| **EPIC-04** | Cadastrar Requisitos de Bolsa | Permitir a inclusão, consulta, edição e exclusão dos requisitos e documentos comprobatórios de elegibilidade (acadêmicos, profissionais e perenes) exigidos para concessão de bolsas nas modalidades e níveis. |

---

## 3. Fluxo de Navegação da Interface

### Back-office (Gestor / Analista FAPES)

**Menu Lateral > Gestão de Bolsas > Modalidades**

* **Tela:** `Modalidades (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-01` (Gestão de Modalidades e Níveis de Bolsa)

* **Tela:** `Cadastrar Modalidade`
  * **Funcionalidade:** `EPIC-02` (Cadastrar Modalidade, Níveis e Versões)

* **Tela:** `Editar Modalidade`
  * **Funcionalidade:** `EPIC-01` (Gestão de Modalidades e Níveis de Bolsa)
  * **Funcionalidade:** `EPIC-02` (Cadastrar Modalidade, Níveis e Versões)
  * **Seção:** `Requisitos da Modalidade`
    * **Funcionalidade:** `EPIC-02` (Cadastrar Modalidade, Níveis e Versões)
  * **Seção:** `Níveis da Modalidade`
    * **Funcionalidade:** `EPIC-02` (Cadastrar Modalidade, Níveis e Versões)

**Menu Lateral > Gestão de Bolsas > Resoluções**

* **Tela:** `Resoluções (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-03` (Cadastrar Resolução)

* **Tela:** `Incluir Resolução`
  * **Funcionalidade:** `EPIC-03` (Cadastrar Resolução)

* **Tela:** `Editar Resolução`
  * **Funcionalidade:** `EPIC-03` (Cadastrar Resolução)

**Menu Lateral > Gestão de Bolsas > Requisitos**

* **Tela:** `Requisitos (Listagem e Filtros)`
  * **Funcionalidade:** `EPIC-04` (Cadastrar Requisitos de Bolsa)

* **Tela:** `Incluir Requisito`
  * **Funcionalidade:** `EPIC-04` (Cadastrar Requisitos de Bolsa)

* **Tela:** `Editar Requisito`
  * **Funcionalidade:** `EPIC-04` (Cadastrar Requisitos de Bolsa)