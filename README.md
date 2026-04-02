# Online Judge Solution

Solutions :

* [LeetCode In Javascript](./leetcode/README.md)

## Project Structure

```
.
├── README.md                      # This file
├── leetcode/                      # LeetCode solutions in JavaScript
│   ├── README.md                  # Solution index with problem list
│   ├── package.json               # npm scripts for workflow automation
│   ├── problems/                  # Solved problems organized by number ranges
│   │   ├── 000-099/
│   │   ├── 100-199/
│   │   ├── ...
│   │   └── 3200-3299/
│   ├── scripts/                   # Automation scripts
│   │   ├── common.js              # Shared utilities (path management, README updates)
│   │   ├── start.js               # Start solving a problem (npm run start [ID])
│   │   ├── test.js                # Test current solution (npm run test)
│   │   ├── push.js                # Submit solution to LeetCode (npm run push)
│   │   ├── ok.js                  # Mark problem as finished (npm run finish)
│   │   └── plist.js               # List all problems (npm run plist)
│   └── utils/                     # Helper utilities
│       ├── arrayToLinkList.js     # Array ↔ Linked list conversion
│       └── arrayToTree.js         # Array ↔ Binary tree conversion
```

### Problem Organization

Each solved problem is stored under `leetcode/problems/{range}/{number}/` with two files:

- **README.md** – Problem description and solution approach
- **solution.js** – JavaScript implementation

### Workflow

1. `npm run start [ID]` – Download a problem and create working files
2. Edit the solution in `solution.js`
3. `npm run test` – Test the solution locally
4. `npm run push` – Submit the solution to LeetCode
5. `npm run finish` – Move the solution into `problems/` and update the index
