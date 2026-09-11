# Diretrizes do SOT

## Mensagens de Commit (Git & Source Control)
Ao gerar mensagens de commit através do botão de geração automática do Source Control (SCM) ou via chat, siga rigorosamente o padrão **Conventional Commits** em **português do Brasil (pt-br)** conforme a skill `commit-standardizer`:

- Formato: `<tipo>(<escopo opcional>): <descrição em pt-br>`
- Tipos comuns no SOT:
  - `docs`: adição ou alteração de documentação de domínios, EPICs, diagramas BPMN e MkDocs
  - `chore`: ajustes de configuração no mkdocs.yml, extensões, assets
  - `style`: estilos em extra.css, temas e layouts
- Iniciar com letra minúscula após o prefixo (ex: `docs(edicao-de-perfil): atualizar regras do EPIC-01`)
- Descrição curta e objetiva (máximo 72 caracteres)
- Não utilizar ponto final no título
- Retornar diretamente a mensagem pronta
