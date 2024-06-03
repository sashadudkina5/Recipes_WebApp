import { useState, useCallback, useEffect } from 'react';

/**
 * Custom hook for fetching data from an API.
 * @param apiCall The API call function that returns the data. It must return a promise.
 * @param params Optional parameters to pass to the API call.
 */
function useFetch<T>(apiCall: (params?: any) => Promise<T>, params?: any): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiCall(params);
      setData(result);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [apiCall, params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
