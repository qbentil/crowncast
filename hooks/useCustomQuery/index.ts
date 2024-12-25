import {
    QueryFunction,
    QueryKey,
    UseQueryResult,
    useQuery,
} from "@tanstack/react-query";

import { IUser } from "@/models/user.model";

const useCustomQuery = <T>(
    queryKey: QueryKey,
    queryFn: QueryFunction<T, QueryKey>,
    errorMessage?: string
  ) => {
    const query: UseQueryResult<T> = useQuery<T>({
      queryKey,
      queryFn,
      meta: {
        errorMessage,
      },
    });
  
    return {
      data: query.data,
      isLoading: query.isLoading,
      error: query.error,
      status: query.status,
      refetch: query.refetch
    };
  };
  
  export default useCustomQuery;
  