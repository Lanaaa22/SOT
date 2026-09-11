# Diretrizes para Mensagens de Commit (Source Control & Git)

Sempre que uma mensagem de commit for gerada (especialmente ao clicar no botão "Generate Commit Message" / varinha mágica do Source Control) ou sugerida no chat, siga obrigatoriamente as regras abaixo:

1. **Formato Conventional Commits**:
   `<tipo>(<escopo opcional>): <descrição em pt-br>`

2. **Idioma**:
   - Sempre em **português do Brasil (pt-br)**.

3. **Tipos Aceitos**:
   - `feat`: nova funcionalidade
   - `fix`: correção de bug
   - `docs`: alterações em documentação (Markdown, MkDocs, README, EPICs)
   - `refactor`: refatoração de código sem alteração funcional
   - `style`: formatação, pontuação, estilos de código
   - `test`: testes unitários/integrados
   - `chore`: manutenção, dependências, scripts
   - `perf`: melhorias de performance
   - `ci`: integração contínua (Drone, GitHub Actions)
   - `build`: scripts de build e pacotes

4. **Estilo e Restrições**:
   - Descrição curta e objetiva (máximo **72 caracteres** na primeira linha).
   - Iniciar com letra minúscula após o tipo/dois-pontos (ex: `docs: adicionar...`).
   - Verbo no infinitivo ou imperativo conciso (`adicionar`, `atualizar`, `corrigir`, `remover`).
   - **Nunca** colocar ponto final na linha do título.
   - Retornar apenas a mensagem de commit pronta, sem preâmbulos, aspas extras ou explicações adicionais.
