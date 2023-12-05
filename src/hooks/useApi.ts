import { useState, useEffect, useCallback } from 'react';

const useApi = (url: string, _options?: RequestInit) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const doFetch = useCallback(async (actionAfterFetch?: Function) => {
    try {
      const response = await fetch(url, _options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const dataResponse = await response.json();
      setData(dataResponse);
      actionAfterFetch && actionAfterFetch();

    } catch (errorResponse: any) {
      setError(errorResponse.message);
    }

    setIsLoading(false);
  }, [_options, url]);

  useEffect(() => {
    if (!_options) {
      doFetch();
    } else {
      setIsLoading(false);
      setError('');
      setData(null);
    }
  }, [doFetch, _options]);

  return { isLoading, data, error, refetch: doFetch };
};

export default useApi;