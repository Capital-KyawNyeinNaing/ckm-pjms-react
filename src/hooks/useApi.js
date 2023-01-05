import { useCallback, useEffect, useState } from 'react';
import { controller } from '../controller';

const useApi = (apiEndpoint) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // call back function
  const request = useCallback(
    async (...data) => {
      setIsLoading(true);
      try {
        // fetch data
        const result = await controller(apiEndpoint, ...data);
        setResponseData(result.data);
        setError('');
        return result;
      } catch (err) {
        setError(err.message || 'Unexpected Error!');
      } finally {
        setIsLoading(false);
      }
    },
    [apiEndpoint]
  );

  return {
    responseData,
    setResponseData,
    error,
    isLoading,
    request
  };
};

export default useApi;
