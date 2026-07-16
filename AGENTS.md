## Plan Approval and Execution Rules

- If an approved plan includes an explicit file allowlist, agents and subagents may edit any file in that allowlist without asking for additional permission.
- A plan is considered approved when the user explicitly approves it or instructs the agent to implement it.
- Approval does not extend beyond the plan's file allowlist. Ask for permission before editing any file outside the allowlist.
- Do not run a production build or start a development server by default.
- If running a build or development server is necessary, first explain the specific reasons in Vietnamese and wait for the user's explicit permission.

## Node.js Runtime

- Before running any Node.js-related command, agents and subagents must load NVM and switch to Node.js 24 in the same shell session:
  `export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 24`.
- This applies to commands such as `node`, `npm`, `npx`, `pnpm`, `yarn`, framework CLIs, tests, linters, formatters, GitNexus, builds, and development servers.
- Do not rely on the shell's default Node.js version. Verify with `node --version` after switching when beginning a coding or verification task.
- If Node.js 24 is unavailable through NVM, stop and report the blocker instead of installing another version or continuing with a different Node.js version.

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **my-portfolio** (155 symbols, 265 relationships, 10 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> Index stale? Run `node .gitnexus/run.cjs analyze` from the project root — it auto-selects an available runner. No `.gitnexus/run.cjs` yet? `npx gitnexus analyze` (npm 11 crash → `npm i -g gitnexus`; #1939).

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows. For regression review, compare against the default branch: `detect_changes({scope: "compare", base_ref: "main"})`.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `query({search_query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `context({name: "symbolName"})`.
- For security review, `explain({target: "fileOrSymbol"})` lists taint findings (source→sink flows; needs `analyze --pdg`).

## Never Do

- NEVER edit a function, class, or method without first running `impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `rename` which understands the call graph.
- NEVER commit changes without running `detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/my-portfolio/context` | Codebase overview, check index freshness |
| `gitnexus://repo/my-portfolio/clusters` | All functional areas |
| `gitnexus://repo/my-portfolio/processes` | All execution flows |
| `gitnexus://repo/my-portfolio/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |

<!-- gitnexus:end -->
