# Sample Retry Service

## Setup

No setup required. This is a TypeScript module.

## Usage

Import the `startService` function and call it with configuration.

## Configuration

- retryCount: number of retry attempts
  - Range: 1–5
  - Default: 3

Example:
```ts
import { startService } from './input';

startService({ retryCount: 3 });
```