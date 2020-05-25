export default function useCacheKey<T>(storageKeyBase: string): [(defaultValue?: T) => T | undefined, (value: T) => T];
