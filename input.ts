
interface Config {
  retryCount?: number;
}

export function startService(config: Config) {
  const retryCount = config.retryCount ?? 3;

  if (retryCount < 1 || retryCount > 5) {
    throw new Error("retryCount must be between 1 and 5");
  }

  console.log(`Service started with retryCount=${retryCount}`);
}
