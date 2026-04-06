import { randomBytes } from 'crypto';

export function generateIdempotencyKey(): string {
  return randomBytes(16).toString('hex');
}

export function generateNonce(): string {
  return randomBytes(32).toString('hex');
}

export function calculateBucketId(timestamp: number, bucketSizeMs: number = 1000): string {
  return Math.floor(timestamp / bucketSizeMs).toString();
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000,
): Promise<T> {
  return new Promise(async (resolve, reject) => {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const result = await fn();
        return resolve(result);
      } catch (error) {
        if (attempt === maxRetries) {
          return reject(error);
        }
        const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 1000;
        await sleep(delay);
      }
    }
  });
}

export function parseIntSafe(value: string | undefined, defaultValue: number): number {
  if (!value) return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export function centsToDecimal(cents: number): number {
  return cents / 100;
}

export function decimalToCents(decimal: number): number {
  return Math.round(decimal * 100);
}
