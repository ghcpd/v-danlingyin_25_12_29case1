# Sample Retry Service

## Setup

1. Install dependencies:
   npm install

2. Run the service:
   npm start

## Configuration

- retryCount: number of retry attempts
  - Range: 1–5
  - Default: 3

Example:
```ts
startService({ retryCount: 2 })
```
