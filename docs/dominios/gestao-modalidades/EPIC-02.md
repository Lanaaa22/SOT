# EPIC-02 - Gerenciar Resoluções

## 1. Descrição

O **EPIC-02 - Gerenciar Resoluções (CRUD)** é a funcionalidade administrativa do Back-office voltada a gestores e analistas da FAPES para o cadastro e manutenção das resoluções normativas oficiais da fundação que regulamentam e dão respaldo legal às modalidades e níveis de bolsa.

Por meio desta funcionalidade, o gestor realiza:

1. **Consulta e Pesquisa de Resoluções:** Visualização da listagem de todas as resoluções cadastradas, com filtros por Número da Resolução, por Ementa ou busca geral por palavra-chave;
2. **Inclusão de Resoluções:** Cadastro de novas resoluções oficiais contendo número, data de publicação, ementa, link de publicação oficial e número do E-Docs;
3. **Edição de Resoluções Existentes:** Atualização dos dados cadastrais de uma resolução previamente registrada, assegurando que as informações permaneçam alinhadas às publicações oficiais do Estado;
4. **Acesso Direto à Publicação Oficial:** Redirecionamento assistido para o documento oficial publicado no portal da FAPES por meio do link registrado no card;
5. **Exclusão com Validação de Vínculo:** Exclusão segura de resoluções que ainda não estejam vinculadas a versões de modalidades de bolsa.

As resoluções cadastradas neste EPIC fundamentam a vigência legal e os atos normativos associados a cada modalidade de bolsa gerenciada no EPIC-03.

---

## 2. Fluxo de Navegação

### Back-office (Gestor / Analista FAPES)

**Menu Lateral > Gestão de Bolsas > Resoluções**

* **Tela:** `Resoluções (Listagem e Filtros)` (`/gestao-bolsa/resolucoes`)
  * **Funcionalidade:** `EPIC-02` (Gerenciar Resoluções)
  * Apresenta os cards de resoluções com paginação, filtros de pesquisa (Número da Resolução, Ementa ou Geral), botão de inclusão e ações no card para abrir publicação, editar e excluir a resolução.

* **Tela:** `Incluir Resolução` (`/gestao-bolsa/incluir-resolucao`)
  * **Funcionalidade:** `EPIC-02` (Gerenciar Resoluções)
  * Formulário de cadastro com validação de dados, obrigatoriedade de link no domínio da FAPES, verificação de duplicidade e retenção de rascunho.

* **Tela:** `Editar Resolução` (`/gestao-bolsa/editar-resolucao/:id`)
  * **Funcionalidade:** `EPIC-02` (Gerenciar Resoluções)
  * Formulário carregado com os dados da resolução selecionada para alteração.

---

## 3. Regras de Negócio

- **RN01 - Obrigatoriedade e Formato do Número da Resolução:** O número da resolução é de preenchimento obrigatório e deve ser um número inteiro positivo maior que zero.
- **RN02 - Unicidade do Número da Resolução:** O número da resolução deve ser único no sistema. Não é permitido cadastrar ou atualizar uma resolução com um número que já pertença a outro registro.
- **RN03 - Data de Publicação Obrigatória:** A data de publicação da resolução é de preenchimento obrigatório e deve ser selecionada através do calendário oficial.
- **RN04 - Obrigatoriedade e Limite da Ementa:** A ementa da resolução é obrigatória e deve conter no máximo 500 caracteres, descrevendo de forma concisa o objeto e a finalidade da norma. O formulário apresenta um contador visual de caracteres preenchidos.
- **RN05 - Link Oficial no Domínio da FAPES:** O link da publicação é obrigatório e deve ser uma URL válida pertencente exclusivamente ao domínio oficial da FAPES (`https://fapes.es.gov.br`). Links externos fora deste domínio são rejeitados na validação.
- **RN06 - Número de Rastreio no E-Docs Opcional e Único:** O registro do número do E-Docs é opcional, mas, caso seja informado, deve ser único no sistema, impedindo que duas resoluções compartilhem o mesmo código de rastreio documental.
- **RN07 - Impedimento de Exclusão com Modalidades Vinculadas:** Uma resolução não pode ser excluída caso já esteja atribuída a qualquer versão de modalidade de bolsa. Nesses casos, o sistema bloqueia a exclusão e orienta o gestor sobre os vínculos existentes.


---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/modalidadebolsa/resolucao` | Consulta a listagem de resoluções com suporte a parâmetros OData de contagem e paginação | `leds-conectafapes-backend-admin` / `ResolucaoController` |
| `GET` | `/api/modalidadebolsa/resolucao/{id}` | Retorna as informações detalhadas de uma resolução a partir de seu identificador (GUID) | `leds-conectafapes-backend-admin` / `ResolucaoController` |
| `POST` | `/api/modalidadebolsa/resolucao` | Cadastra uma nova resolução normativa da FAPES com validação de unicidade de número e E-Docs | `leds-conectafapes-backend-admin` / `ResolucaoController` |
| `PUT` | `/api/modalidadebolsa/resolucao/{id}` | Atualiza os dados cadastrais da resolução, garantindo a integridade dos dados e unicidade | `leds-conectafapes-backend-admin` / `ResolucaoController` |
| `DELETE` | `/api/modalidadebolsa/resolucao/{id}` | Realiza a exclusão da resolução desde que não haja nenhuma versão de modalidade associada | `leds-conectafapes-backend-admin` / `ResolucaoController` |
