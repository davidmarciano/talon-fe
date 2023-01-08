import { useApiCall } from '../../../hooks';

interface UseAudits {
  data: string[];
  isLoading: boolean;
  error: string;
}

const useGetAllEventTypes = (): UseAudits => {
  const { data = [],
          isLoading,
          error
        } = useApiCall({ url: '/audit/get-all-event-types' });

  return { 
    data,
    isLoading,
    error,
  };
};

export default useGetAllEventTypes;