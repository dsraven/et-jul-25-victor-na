import { useEffect, useState } from 'react';

interface UseFetchResult<T> {
  data: T | undefined;
  loading: boolean;
  error: Error | undefined;
}

export function useFetch<T>(fetcher: () => Promise<T>): UseFetchResult<T> {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    let isCancelled = false;

    const loadData = async () => {
      try {
        const result = await fetcher();
        if (!isCancelled) {
          setData(result);
          setError(undefined);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err : new Error('Unknown'));
          setData(undefined);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [fetcher]);

  return { data, loading, error };
}
