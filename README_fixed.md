# Sample Retry Service — Setup & Usage (corrected)

Prerequisites
- Node.js and npm installed (README originally assumed npm).

Quick reproducible run (no repository changes required)
1) Create a small runner file to invoke the exported function:

   Create `run.ts` with the following contents:

   import { startService } from './input';
   startService({ retryCount: 3 });

2) Run the runner using ts-node (recommended via npx):

   npx ts-node run.ts

Alternative (add a project start script)
- npm init -y
- npm install --save-dev ts-node typescript
- Add to package.json scripts: "start": "ts-node run.ts"
- npm start

What this repository contains
- `input.ts` — exports `startService(config)` but does not include a runnable entrypoint. The steps above show how to invoke the function locally.

Configuration (accurate)
- retryCount: number of retry attempts
  - Range: 1–5
  - Default: 3
  - Behavior: passing a value outside 1–5 throws an Error at runtime

Examples
- Use default:
  - create `run.ts` and call `startService({})` or `startService()` (default 3 will be used)
- Valid explicit value:
  startService({ retryCount: 3 })

Notes / gotchas
- The original README had incorrect range/default and an example using `retryCount: 0` (0 is invalid and causes a runtime error).
- There is no `package.json` or `npm start` script in this repository — follow the steps above to run the code locally.

This corrected README matches the actual behavior in `input.ts` (default value and allowed range).