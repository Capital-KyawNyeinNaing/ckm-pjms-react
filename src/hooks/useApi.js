import { useState } from 'react';
import { controller } from '../controller';

const useApi = (apiEndpoint) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const request = async (...data) => {
    setIsLoading(true);
    try {
      const result = await controller(apiEndpoint, ...data);
      setResponseData(result.data);
      setError('');
      return result;
    } catch (err) {
      setError(err.message || 'Unexpected Error!');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    responseData,
    error,
    isLoading,
    request
  };
};

export default useApi;
