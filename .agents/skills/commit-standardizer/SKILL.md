---
name: commit-standardizer
description: >-
  Padroniza e gera mensagens de commit para o Git e Source Control no padrão Conventional Commits em português do Brasil (pt-br). Deve ser utilizada para gerar, validar ou sugerir mensagens de commit curtas e objetivas ao realizar commits nos repositórios do SOT e conectafapes-workspace.
---

# Padronização de Mensagens de Commit (`commit-standardizer`)

Esta skill define as diretrizes obrigatórias para geração e formatação de mensagens de commit nos repositórios do **SOT** e do **conectafapes-workspace**, garantindo conformidade com o padrão **Conventional Commits** em **português do Brasil (pt-br)**.

---

## 1. Formato Obrigatório

```text
<tipo>(<escopo opcional>): <descrição curta em pt-br>

[corpo opcional detalhando o motivo ou contexto da mudança]

[rodapé opcional com referências a issues/tickets, ex: Closes #123]
```

### Regras Fundamentais:
1. **Idioma:** Sempre em **português do Brasil (pt-br)**.
2. **Caixa Baixa:** O tipo, escopo e o início da descrição devem estar em letras minúsculas (ex: `docs: adicionar...`).
3. **Sem Ponto Final:** A primeira linha (título) **nunca** termina com ponto final.
4. **Objetividade e Tamanho:** O título deve ser curto, claro e direto, com no máximo **72 caracteres**.
5. **Verbo de Ação:** Usar verbos no infinitivo ou imperativo conciso (ex: `adicionar`, `corrigir`, `atualizar`, `remover`, `implementar`).
6. **Escopo (Opcional, mas Recomendado):** Quando a mudança for pontual em um domínio, pacote ou módulo, indique entre parênteses:
   - *Exemplos:* `docs(edicao-de-perfil): ...`, `docs(mkdocs): ...`, `feat(pagamento): ...`, `fix(perfil): ...`.

---

## 2. Tipos de Commit Permitidos

| Tipo | Quando Utilizar | Exemplo em pt-br |
| :--- | :--- | :--- |
| **`feat`** | Nova funcionalidade ou recurso para o usuário | `feat(pagamento): implementar cálculo de bônus por modalidade` |
| **`fix`** | Correção de bug ou comportamento inesperado | `fix(perfil): corrigir validação de dígito da agência banestes` |
| **`docs`** | Alterações puramente em documentação (MkDocs, README, EPICs) | `docs(edicao-de-perfil): adicionar detalhamento do EPIC-01` |
| **`refactor`** | Refatoração de código sem alterar lógica/recursos externos | `refactor(auth): simplificar extração de claims do token` |
| **`style`** | Formatação, espaços em branco, ponto e vírgula, linting | `style(frontend): ajustar identação e regras do eslint` |
| **`test`** | Adição, correção ou refatoração de testes automatizados | `test(perfil): adicionar testes de validação do formato lattes` |
| **`chore`** | Tarefas de manutenção, dependências, scripts auxiliares | `chore(deps): atualizar versão das bibliotecas do vue` |
| **`perf`** | Alteração de código visando melhoria de desempenho | `perf(api): otimizar consulta sql de busca de bolsistas` |
| **`ci`** | Alterações em pipelines, GitHub Actions ou Drone CI | `ci(build): ajustar etapas de validação no drone.yml` |
| **`build`** | Mudanças que afetam o sistema de build ou pacotes externos | `build(vite): atualizar configuração de build de produção` |

---

## 3. Diretrizes para Geração Automática (Source Control)

Ao analisar o `git diff` (arquivos preparados/staged ou modificados) para gerar a mensagem no campo de commit do Source Control:

1. **Identifique a Natureza Principal da Alteração**:
   - Apenas arquivos `.md`, `mkdocs.yml` ou documentação? Use **`docs`**.
   - Criação ou modificação de endpoints, telas ou novas regras? Use **`feat`**.
   - Correção de falha ou regressão? Use **`fix`**.
   - Mudanças de dependência (`package.json`, `.csproj`) ou tarefas rotineiras? Use **`chore`**.

2. **Identifique o Escopo**:
   - No **SOT**: use o nome do domínio ou funcionalidade (ex: `docs(edicao-de-perfil)`, `docs(mkdocs)`).
   - No **conectafapes-workspace**: use o nome do serviço ou módulo afetado (ex: `feat(backoffice)`, `fix(portal-fapes)`).

3. **Gere Apenas o Texto do Commit**:
   - Retorne diretamente a mensagem no formato final, pronta para ser gravada sem explicações extras em volta.
