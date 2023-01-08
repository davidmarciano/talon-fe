import { useApiCall } from '../../../hooks';
import { buildQueryString } from '../utils';

interface User {
  name: string;
  email: string;
}

interface Audit {
  eventType: string;
  os: string;
  severity: string;
  time: string;
  user: User
  _id: string;
}

interface Args {
  count: number;
  offset: number;
  eventTypes: string[];
}

interface UseGetAudit {
  data: Audit[];
  isLoading: boolean;
  error: string;
}

const useGetAudit = (args: Args): UseGetAudit => {
  const queryString = buildQueryString(args);

  const { data = [],
          isLoading,
          error
        } = useApiCall({ url: `/audit`, queryString, });

  return { 
    data,
    isLoading,
    error,
  };
};

export default useGetAudit;