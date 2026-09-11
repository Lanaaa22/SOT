# EPIC-01 - Informar Dados Pessoais, Endereço e Conta Banestes

## 1. Descrição

O **EPIC-01 - Informar Dados Pessoais, Endereço e Conta Banestes** é a funcionalidade de autoatendimento (Front-office) voltada a bolsistas, pesquisadores, coordenadores e demais usuários do ecossistema ConectaFapes para manutenção e conformidade de seus dados cadastrais fundamentais.

Por meio desta funcionalidade, o usuário consulta e/ou atualiza:

1. Dados pessoais (nome completo, nome social, cpf, data de nascimento, nome da mãe, naturalidade, e-mail, celular, genero, etnia, link do currículo Lattes e nivel acadêmico);

2. Documento de Identificação (tipo de documento, número, órgão emissor, UF do órgão emissor e data de emissão);

3. Endereço Residencial (CEP, Rua, Número, Complemento, Bairro, Município, Estado e País);

    * Permite também informar um endereço profissional alternativo, sendo necessário indicar qual o endereço deverá ser utilizado para correspondência.

4. Dados Bancários (agência e/ou conta do Banestes).

    * Permite informar dados de uma conta-corrente Banestes existente ou selecionar uma agência do banco no município de residência para registrar uma solicitação formal de abertura/cadastro de conta corrente, etapa indispensável para habilitar o pagamento regular de bolsas pela FAPES.

---

## 2. Fluxo de Navegação

### Front-office (Bolsista / Usuário)

**Menu Lateral > Meu Perfil > Minhas Informações**

  * **Aba:** `Meus Dados`
    * **Funcionalidade:** `EPIC-01` (Informar Dados Pessoais, Endereço e Conta Banestes)

---

## 3. Regras de Negócio

- **RN01 - Provisionamento Automático via Acesso Cidadão:** No primeiro acesso do usuário, autenticado pelo Acesso Cidadão, os dados primários (`Nome`, `CPF` e `E-mail`) são provisionados automaticamente a partir das claims do token de autenticação. Ou seja, nenhuma conta pode ser criada manualmente.
- **RN02 - Validação de Data de Nascimento:** O preenchimento da data de nascimento é obrigatório. Não é permitido informar datas futuras nem datas anteriores a 01/01/1900.
- **RN03 - Obrigatoriedade e Formato do Currículo Lattes:** A URL do currículo Lattes é obrigatória para a regularidade cadastral e deve seguir rigorosamente o padrão oficial do CNPq (`http://` ou `https://lattes.cnpq.br/{16_digitos}`).
- **RN04 - Exclusividade Bancária Banestes:** A liquidação dos benefícios de bolsas da FAPES exige conta vinculada ao Banestes (Banco do Estado do Espírito Santo), não sendo admitidas contas de outras instituições financeiras para este fim.
- **RN05 - Vinculação Bancária (Conta Existente):** Caso o usuário já possua conta-corrente no Banestes, é obrigatório informar o número da agência (3 a 5 dígitos) e o número da conta com dígito verificador (8 a 11 dígitos numéricos).
- **RN06 - Solicitação de Abertura / Cadastro de Conta Banestes:** Caso o usuário não possua conta corrente, o sistema viabiliza a seleção de uma agência Banestes no município desejado para criar uma solicitação formal de abertura de conta bancária vinculada à FAPES.
- **RN07 - Endereço Residencial e Consulta de CEP:** O CEP do endereço residencial é de preenchimento obrigatório, acionando busca assistida por serviço de CEP. São campos mandatórios do domicílio: rua, número, bairro, município, estado e país.
- **RN08 - Endereço Profissional Opcional e Correspondência:** O usuário pode declarar um endereço profissional alternativo. Caso desmarque a opção, qualquer endereço profissional previamente gravado é excluído do sistema. O usuário deve eleger explicitamente qual endereço será utilizado para o envio de correspondências oficiais.
- **RN09 - Formato dos Contatos Telefônicos:** O número de telefone celular pessoal deve seguir o padrão nacional com DDD `(XX) XXXXX-XXXX` (9 dígitos). Se informado telefone fixo no endereço profissional, este deve atender ao padrão `(XX) XXXX-XXXX` ou `(XX) XXXXX-XXXX`.
- **RN10 - Registro de Nome Social:** É facultado ao usuário cadastrar ou atualizar seu nome social, respeitando a identidade de gênero. A alteração de nome social é armazenada em endpoint específico sem sobrescrever o nome civil proveniente do cadastro de pessoa física.
- **RN11 - Cálculo da Completude Cadastral:** O sistema audita periodicamente se todos os dados essenciais (dados pessoais, contato, Lattes, endereço completo, documento de identificação e naturalidade) estão preenchidos. Um cadastro incompleto impede a geração de Termos de Responsabilidade e a implementação de concessões de bolsa.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/portalfapes/meuperfil` | Consulta os dados cadastrais consolidados do usuário logado (pessoais, contatos, nível acadêmico, endereços e dados bancários) | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `GET` | `/api/portalfapes/meuperfil/status/cadastro` | Retorna o indicador de completude cadastral do usuário (`ehCadastroCompleto`) | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `PATCH` | `/api/portalfapes/meuperfil` | Salva as alterações parciais do perfil (dados pessoais, celular, endereços residencial/profissional e dados da conta Banestes) | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `PATCH` | `/api/portalfapes/meuperfil/nome-social` | Registra ou atualiza o nome social da pessoa | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `POST` | `/api/portalfapes/perfil/solicitar/cadastrobanestes` | Registra uma nova solicitação de abertura/cadastro de conta junto à agência Banestes informada | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `PUT` | `/api/portalfapes/perfil/solicitar/cadastrobanestes` | Atualiza a solicitação de abertura de conta Banestes com nova agência desejada | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `DELETE` | `/api/portalfapes/perfil/delete/enderecoprofissional` | Remove o endereço profissional registrado da pessoa física | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `GET` | `/api/portalfapes/perfil/municipios` | Lista municípios disponíveis para seleção e autocomplete de naturalidade | `leds-conectafapes-backend-portal-fapes` / `MeuPerfilController` |
| `POST` | `/api/importacaoedital/naturalidade` | Cadastra dados de naturalidade (município e UF de nascimento) da pessoa | `leds-conectafapes-backend-portal-fapes` / `NaturalidadeController` |
| `PUT` | `/api/importacaoedital/naturalidade/{id}` | Atualiza o registro de naturalidade da pessoa | `leds-conectafapes-backend-portal-fapes` / `NaturalidadeController` |
| `POST` | `/api/importacaoedital/documento` | Cadastra documento de identificação pessoal (tipo, número, órgão emissor, UF e data) | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
| `PUT` | `/api/importacaoedital/documento/{id}` | Atualiza documento de identificação pessoal da pessoa | `leds-conectafapes-backend-portal-fapes` / `DocumentoController` |
