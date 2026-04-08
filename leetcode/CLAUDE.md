# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LeetCode solutions repository with 511+ solved problems in JavaScript. Uses a custom CLI workflow backed by `leetcode-cli` (npm package, install globally with `npm install -g leetcode-cli`).

## Commands

```bash
pnpm run start <problem_number>   # Fetch problem, create solving.md + solution.js
pnpm run test                     # Run LeetCode test cases against solution.js
pnpm run push                     # Submit solution to LeetCode
pnpm run ok [tags]                # Complete: move to problems/, update README table
pnpm run debug                    # Run solution.js locally with Node
pnpm run list                     # List unsolved problems (algorithms, by difficulty)
pnpm run stat                     # Show solving statistics
```

Tags for `pnpm run ok`: `[arr]` array, `[bt]` backtracking, `[bs]` binary_search, `[bit]` bit_manipulation, `[bfs]` BFS, `[dfs]` DFS, `[dp]` DP, `[ll]` linked_list, `[tr]` tree, `[tp]` two_pointers, and more.

## Workflow

1. Solved problems live in `problems/<range>/<number>/` (e.g., `problems/000-099/1/`)
2. Active work uses root `solution.js` and `solving.md`
3. Each completed problem has `README.md` (description + approach) and `solution.js` (code + inline test cases)
4. The `current` file tracks the active problem number

## Code Conventions

- JavaScript ES6+ with function declarations for algorithms
- camelCase for variables/functions, arrow functions for anonymous expressions
- Module exports enabled for testing individual solutions
- Solution file structure: JSDoc params → algorithm → `// TEST:` section with `console.log` assertions
- Utilities available in `utils/`: `arrayToLinkList.js`, `arrayToTree.js`

## Documentation Conventions

- Problem descriptions maintained in English in solving.md
- Chinese translation appended after the original description
- Solution approach/explanation appended after the description
- README.md contains a comprehensive problem table with status, level, and tags
