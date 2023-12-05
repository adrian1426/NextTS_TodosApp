import { useState, useEffect, useCallback } from 'react';

const useApi = (url: string, _options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const doFetch = useCallback(async (options = _options) => {
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const dataResponse = await response.json();
      setData(dataResponse);

    } catch (errorResponse: any) {
      setError(errorResponse.message);
    }

    setIsLoading(false);
  }, [_options, url]);

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  return { isLoading, data, error, refetch: doFetch };
};

export default useApi;