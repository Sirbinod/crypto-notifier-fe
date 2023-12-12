/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosResponse } from 'axios';

import { useCallback, useEffect, useState } from 'react';

import { fetchData } from './request';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  refetch: () => void;
}

const useGetApiRequest = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const getData = useCallback(async () => {
      try {
        setLoading(true);
        setError(null);

        const response: AxiosResponse<T> = await fetchData(url);

        setData(response.data);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
  
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  const refetch = useCallback(() => {
    getData();
  }, [fetchData]);

  return { data, loading, error,refetch };
};

export default useGetApiRequest;
