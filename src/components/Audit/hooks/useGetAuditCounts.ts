import { buildQueryString } from '../utils';
import { useApiCall } from '../../../hooks';

interface UseAudits {
  data: number;
  isLoading: boolean;
  error: string;
}

interface Args {
  eventTypes: string[];
}

const useGetAuditCounts = ({ eventTypes }: Args): UseAudits => {
  const queryString = buildQueryString({ eventTypes });

  const { data = 0,
          isLoading,
          error
        } = useApiCall({ url: '/audit/counts', queryString });

  return { 
    data,
    isLoading,
    error,
  };
};

export default useGetAuditCounts;