import { useEffect, useState, useMemo } from 'react';

interface Args {
  url: string;
  queryString?: string;
}

const useApiCall = ({url, queryString}: Args) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fullPath = useMemo(
    () => queryString ? `${url}?${queryString}` : url,
    [url, queryString]
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(fullPath);

      if(response.ok) {
        const data = await response.json();
        setData(data);        
      }
      else {
        setError(response.statusText);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [fullPath]);

  return {
    isLoading,
    error,
    data,
  };
};

export default useApiCall;