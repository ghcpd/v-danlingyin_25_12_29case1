# Sample Retry Service (Fixed)

## Prerequisites

- Node.js (LTS recommended) and `npm` installed ✅

## Quick run (recommended)

1. Initialize the project (only required if you want a package.json):
   ```bash
   npm init -y
   ```

2. Install developer tools to run TypeScript directly:
   ```bash
   npm install --save-dev typescript ts-node
   ```

3. Create a tiny `index.ts` to invoke the service:
   ```ts
   import { startService } from './input';
   startService({}); // uses default retryCount
   ```

4. Run it directly with npx (no package.json scripts required):
   ```bash
   npx ts-node index.ts
   ```

Optional: add a start script to `package.json`:
```json
"scripts": {
  "start": "ts-node index.ts"
}
```
Then run:
```bash
npm start
```

## Configuration

- `retryCount`: number of retry attempts
  - **Range:** 1–5  (enforced by the code; see `input.ts`)
  - **Default:** 3 (used when `retryCount` is omitted)

Example (valid):
```ts
startService({ retryCount: 3 });
```

> Note: Passing `retryCount: 0` will throw an error at runtime: "retryCount must be between 1 and 5" (see `input.ts`).

## Notes

- The original README implied `npm start` would run the service but the repository did not include a `package.json` or a start script; follow the steps above to add one or use `npx ts-node` to run the TypeScript files directly.
- The fixed README matches the actual behavior of `input.ts` and provides explicit, reproducible steps to run the code.
