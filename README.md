# Sample Retry Service

## Setup

1. Install dependencies:
   npm install

2. Run the service:
   npm start

## Configuration

- retryCount: number of retry attempts
  - Range: 0–10
  - Default: 1

Example:
```ts
startService({ retryCount: 0 })