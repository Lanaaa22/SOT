# EPIC-03 - Gerenciar Modalidades, Níveis e Versões

## 1. Descrição

O **EPIC-03 - Gerenciar Modalidades, Níveis e Versões** é a funcionalidade central do Back-office voltada a gestores e analistas da FAPES para estruturar todas as modalidades de bolsas concedidas pela fundação. 

Por meio desta funcionalidade, o gestor realiza:

1. **Consulta e Pesquisa de Modalidades:** Visualização de listagem de modalidades com identificação de Sigla, Nome, Versão Ativa e Versão em Edição, com filtros direcionados por Sigla, Nome, Versão Ativa ou Em Edição;
2. **Cadastro de Modalidade e Versão Inicial:** Criação de uma nova modalidade de bolsa com escolha de resolução, definição de sigla, nome da modalidade, compatibilidade de acúmulo com outras bolsas e parâmetros da primeira versão;
3. **Gerenciamento de Requisitos da Modalidade:** Vinculação e desvinculação de requisitos de elegibilidade gerais da modalidade a partir do catálogo oficial;
4. **Configuração de Níveis Remuneratórios:** Parametrização dos níveis de remuneração da bolsa, definindo sigla do nível, carga horária semanal, moeda e valor mensal do benefício (além do valor proporcional com redução por vínculo);
5. **Requisitos Específicos por Nível:** Associação de exigências documentais e acadêmicas aplicáveis exclusivamente a cada nível da modalidade, com recurso para copiar requisitos entre níveis;
6. **Ciclo de Vida e Versionamento:** Criação de novas versões em rascunho a partir da versão vigente e posterior ativação formal da versão, promovendo-a para uso em editais e arquivando a versão anterior no histórico.

As configurações estabelecidas neste EPIC definem as regras e valores que serão utilizados na elaboração de editais e na concessão de bolsas em projetos fomentados.

---

## 2. Fluxo de Navegação

### Back-office (Gestor / Analista FAPES)

**Menu Lateral > Gestão de Bolsas > Modalidades**

* **Tela:** `Modalidades (Listagem e Filtros)` (`/modalidade/IndexModalidade`)
  * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões)
  * Apresenta a listagem das modalidades com pesquisa por Sigla, Nome, Versão Ativa e Em Edição, botão "Cadastrar Modalidade" e botão de ação para editar ou visualizar a modalidade.

* **Tela:** `Cadastrar Modalidade` (`/modalidade/CreateModalidade`)
  * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões)
  * Formulário de cadastro dos dados de identificação da modalidade e parâmetros da primeira versão.

* **Tela:** `Editar Modalidade` (`/modalidade/EditModalidade/:id`)
  * **Funcionalidade:** `EPIC-03` (Gerenciar Modalidades, Níveis e Versões)
  * Painel integrado contendo:
    * **Identificação e Versão:** Edição de vigência, resolução normativa vinculada e parâmetros de redução por vínculo empregatício;
    * **Seção Requisitos da Modalidade:** Adição e remoção dos requisitos gerais que se aplicam a toda a modalidade;
    * **Seção Níveis da Modalidade:** Gerenciamento dos níveis remuneratórios (valores, carga horária e requisitos por nível);
    * **Ações de Versão:** Ativar versão, criar nova versão em rascunho ou excluir versão em edição.

---

## 3. Regras de Negócio

- **RN01 - Obrigatoriedade da Sigla e Nome da Modalidade:** A sigla e o nome da modalidade são de preenchimento obrigatório e devem ser únicos no catálogo da FAPES.
- **RN02 - Acúmulo de Bolsas e Modalidades Compatíveis:** O gestor pode indicar se a modalidade permite acúmulo com outras modalidades de bolsa da FAPES e elencar expressamente quais modalidades cadastradas são compatíveis.
- **RN03 - Vinculação Obrigatória de Resolução Normativa:** Toda versão de modalidade de bolsa deve estar formalmente vinculada a uma resolução oficial da FAPES, garantindo respaldo legal às concessões.
- **RN04 - Período de Vigência da Versão:** A versão da modalidade possui data de início de vigência obrigatória e data de término facultativa (indicando vigência por prazo indeterminado quando não informada). A data de término não pode ser anterior à data de início.
- **RN05 - Parametrização de Redução por Vínculo:** É possível habilitar se a versão prevê redução de valor e carga horária para bolsistas que possuem vínculo empregatício, registrando o percentual aplicável.
- **RN06 - Ciclo de Vida e Unicidade de Versão Ativa:** Cada modalidade pode possuir apenas uma versão ativa e no máximo uma versão em edição simultaneamente. Ao ativar uma nova versão, a versão atualmente ativa é encerrada e transferida para o histórico, protegendo as concessões de bolsas já implementadas contra alterações retroativas.
- **RN07 - Exclusão Restrita a Versões em Edição:** Somente versões em modo de rascunho (em edição) podem ser excluídas. Versões ativas ou históricas têm sua exclusão bloqueada pelo sistema.
- **RN08 - Configuração de Níveis e Carga Horária:** Cada nível remuneratório cadastrado deve conter sigla, carga horária semanal (em horas) e valor mensal da bolsa. Se a modalidade prever redução por vínculo, o sistema calcula e valida automaticamente o valor reduzido correspondente.
- **RN09 - Requisitos por Modalidade e por Nível:** O gestor pode vincular requisitos tanto no escopo amplo da modalidade (exigidos em todos os níveis) quanto de forma individual em níveis específicos (como exigências de titulação ou tempo de experiência particulares).
- **RN10 - Cópia de Requisitos entre Níveis:** Para agilizar o preenchimento, o sistema disponibiliza a funcionalidade de copiar os requisitos de um nível já configurado para outro nível da mesma modalidade.

---

## 4. Endpoints Relacionados

| Método | Rota / Endpoint | Descrição da Ação | Repositório / Controller |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/modalidadebolsa/modalidadebolsa` | Consulta a listagem completa de modalidades de bolsa com suas respectivas versões | `leds-conectafapes-backend-admin` / `ModalidadeBolsaController` |
| `GET` | `/api/modalidadebolsa/modalidadebolsa/{id}` | Retorna as informações detalhadas da modalidade indicada pelo identificador (GUID) | `leds-conectafapes-backend-admin` / `ModalidadeBolsaController` |
| `POST` | `/api/modalidadebolsa/modalidadebolsa` | Cadastra uma nova modalidade de bolsa no sistema com sua primeira versão | `leds-conectafapes-backend-admin` / `ModalidadeBolsaController` |
| `PUT` | `/api/modalidadebolsa/modalidadebolsa/{id}` | Atualiza os dados cadastrais básicos da modalidade de bolsa | `leds-conectafapes-backend-admin` / `ModalidadeBolsaController` |
| `POST` | `/api/modalidadebolsa/versaomodalidadebolsa` | Cria uma nova versão em edição para a modalidade indicada | `leds-conectafapes-backend-admin` / `VersaoModalidadeBolsaController` |
| `PUT` | `/api/modalidadebolsa/versaomodalidadebolsa/{id}` | Atualiza atributos da versão (vigência, resolução vinculada e redução por vínculo) | `leds-conectafapes-backend-admin` / `VersaoModalidadeBolsaController` |
| `PATCH` | `/api/modalidadebolsa/versaomodalidadebolsa/ativar/{id}` | Promove a versão selecionada para ativa e arquiva a versão anterior no histórico | `leds-conectafapes-backend-admin` / `VersaoModalidadeBolsaController` |
| `DELETE` | `/api/modalidadebolsa/versaomodalidadebolsa/{id}` | Remove uma versão que ainda se encontre em estágio de rascunho (em edição) | `leds-conectafapes-backend-admin` / `VersaoModalidadeBolsaController` |
| `POST` | `/api/modalidadebolsa/versaonivelbolsa` | Cadastra e parametriza os níveis remuneratórios e cargas horárias associados à versão | `leds-conectafapes-backend-admin` / `VersaoNivelBolsaController` |
