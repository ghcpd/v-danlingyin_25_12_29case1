# Sample Retry Service — Developer Quickstart (fixed)

Prerequisites
- Node.js (LTS) and npm installed on PATH.

Quick verification (one-liner, no project files needed)
- Run (uses `ts-node` via `npx`):

  npx ts-node -e "const { startService } = require('./input'); startService({ retryCount: 3 });"

Recommended (reproducible) project setup
1. Initialize project and install developer tools:

   npm init -y
   npm install --save-dev typescript ts-node @types/node

2. Create a tiny runner and start:

   echo "import { startService } from './input'; startService({ retryCount: 3 });" > run.ts
   npx ts-node run.ts

(Or add a script to package.json: "start": "ts-node run.ts")

What this repository contains
- `input.ts` — exports `startService(config)` (TypeScript). It does not add a CLI or automatically start itself; you must call the exported function (see quickstart above).

Configuration (accurate)
- retryCount: number of retry attempts
  - Range: 1–5
  - Default (when omitted): 3
  - Behavior: passing a value outside [1,5] throws an Error with message: "retryCount must be between 1 and 5"

Examples
- Valid (uses default):
  - Command: `npx ts-node -e "const { startService } = require('./input'); startService({});"`
  - Output: `Service started with retryCount=3`

- Valid (explicit):
  - `npx ts-node -e "const { startService } = require('./input'); startService({ retryCount: 2 });"`
  - Output: `Service started with retryCount=2`

- Invalid (will throw):
  - `npx ts-node -e "const { startService } = require('./input'); startService({ retryCount: 0 });"`
  - Error: `Error: retryCount must be between 1 and 5`

Notes / assumptions made by the code (do not rely on undocumented behavior)
- `input.ts` only exports the function; there is no built-in server loop or CLI.
- This README documents exactly how to run the exported function without changing source files.

Troubleshooting
- "Cannot find module 'ts-node'": install with `npm install --save-dev ts-node` or use the recommended setup above.
- If you expect the project to start with `npm start`, add a `run.ts` runner and a `start` script to `package.json` as shown above.

License / contact
- (unchanged)