# EPIC-01 - Gerenciar Requisitos de Bolsa

## 1. Descrição

O **EPIC-01 - Gerenciar Requisitos de Bolsa** é a funcionalidade administrativa do Back-office voltada a gestores e analistas da FAPES para o gerenciamento centralizado do catálogo de requisitos e critérios de elegibilidade exigidos para a concessão e implementação de bolsas.

Por meio desta funcionalidade, o gestor realiza:

1. **Consulta e Pesquisa de Requisitos:** Visualização da listagem paginada de todos os requisitos cadastrados, com filtros específicos por nome do requisito ou por especificação do comprovante exigido;
2. **Inclusão de Requisitos:** Cadastro padronizado de requisitos contendo nomenclatura, especificação de comprovante documental, texto descritivo e parametrização de flags operacionais (requisito perene e requisito para bolsa com redução);
3. **Edição de Requisitos Existentes:** Manutenção e atualização dos atributos do requisito, garantindo conformidade com as resoluções vigentes e instruções normativas da FAPES.


Os requisitos cadastrados neste EPIC formam a base normativa e documental que será vinculada às modalidades e níveis de bolsa (no EPIC-03) e posteriormente auditada pela equipe técnica da FAPES na homologação de bolsas e documentos dos bolsistas (no EPIC-04).

---

## 2. Fluxo de Navegação

### Back-office (Gestor / Analista FAPES)

**Menu Lateral > Gestão de Bolsas > Requisitos**

* **Tela:** `Requisitos (Listagem e Filtros)` (`/gestao-bolsa/requisitos`)
  * **Funcionalidade:** `EPIC-01` (Gerenciar Requisitos de Bolsa)
  * Apresenta os cards de requisitos com paginação, filtros de pesquisa ("Requisito" ou "Comprovante"), botão para inclusão e botão de ação para edição (ícone de lápis) em cada item.

* **Tela:** `Incluir Requisito` (`/gestao-bolsa/incluir-requisito`)
  * **Funcionalidade:** `EPIC-01` (Gerenciar Requisitos de Bolsa)
  * Formulário de cadastro com validação em tempo real, prevenção de duplicidade e retenção de rascunho.

* **Tela:** `Editar Requisito` (`/gestao-bolsa/editar-requisito/:id`)
  * **Funcionalidade:** `EPIC-01` (Gerenciar Requisitos de Bolsa)
  * Formulário carregado com os dados do registro selecionado para alteração.

---

## 3. Regras de Negócio

- **RN01 - Obrigatoriedade e Extensão do Nome do Requisito:** O campo "Requisito" é obrigatório e deve conter entre 2 e 100 caracteres. Espaços em branco no início e final são automaticamente removidos.
- **RN02 - Unicidade do Requisito:** Não é permitido incluir ou renomear um requisito com denominação idêntica a outro requisito previamente cadastrado. Caso ocorra duplicidade, a gravação é bloqueada e uma notificação de erro é exibida.
- **RN03 - Condicionalidade do Comprovante Documental:** A exigência de comprovação é indicada pelo seletor "Possui comprovante?". Quando habilitado, o campo "Comprovante" torna-se obrigatório, com limite de até 300 caracteres, descrevendo o documento aceito (ex.: diploma, contrato, CTPS ou declaração). Quando desabilitado, o campo permanece bloqueado para edição.
- **RN04 - Descrição Orientadora:** O campo "Descrição" é de preenchimento opcional, com tamanho máximo de 700 caracteres, servindo para orientações contextuais, instruções normativas ou detalhes adicionais aos analistas e bolsistas.
- **RN05 - Requisito Perene:** A opção "É requisito perene?" estabelece que o documento comprobatório vinculado ao requisito possui validade contínua no cadastro do bolsista, dispensando a necessidade de reenvio em futuras concessões de bolsa.
- **RN06 - Requisito para Bolsas com Redução:** A opção "É um requisito para bolsas com redução?" sinaliza critérios de elegibilidade específicos para proponentes com vínculo empregatício que demandam redução de carga horária ou valor de bolsa. Na listagem de requisitos, itens com esta regra exibem uma etiqueta distintiva.
- **RN07 - Indisponibilidade de Exclusão:** Para preservar o histórico legal e evitar inconsistências com editais, modalidades e comprovações de bolsistas já submetidas, os requisitos não possuem opção de exclusão na interface gráfica. Caso haja necessidade de alteração de texto ou regras, o gestor deve utilizar a edição do registro.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/modalidadebolsa/requisitobolsa/pagination` | Consulta paginada dos requisitos com suporte a filtros por tipo (`tipo`), termo pesquisado (`nome`), número da página (`pageNumber`) e quantidade por página (`pageSize`) | `leds-conectafapes-backend-admin` / `RequisitoBolsaController` |
| `GET` | `/api/modalidadebolsa/requisitobolsa/{id}` | Retorna as informações detalhadas de um requisito a partir de seu identificador (GUID) | `leds-conectafapes-backend-admin` / `RequisitoBolsaController` |
| `POST` | `/api/modalidadebolsa/requisitobolsa` | Realiza a inclusão de um novo requisito de bolsa com os atributos de comprovação, descrição e parametrizações | `leds-conectafapes-backend-admin` / `RequisitoBolsaController` |
| `PUT` | `/api/modalidadebolsa/requisitobolsa/{id}` | Atualiza integralmente os dados cadastrais do requisito de bolsa indicado pelo identificador | `leds-conectafapes-backend-admin` / `RequisitoBolsaController` |
| `DELETE` | `/api/modalidadebolsa/requisitobolsa/{id}` | Endpoint de exclusão lógica (não exposto na interface do usuário por diretriz de segurança de integridade) | `leds-conectafapes-backend-admin` / `RequisitoBolsaController` |
| `GET` | `/api/modalidadebolsa/requisitobolsa/alocacao/{id}` | Consulta e agrupa os requisitos associados a uma alocação específica, separando-os em listas de com e sem comprovante | `leds-conectafapes-backend-admin` / `RequisitoBolsaController` |
