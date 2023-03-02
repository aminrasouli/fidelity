import { QueryClient, QueryFunction } from 'react-query';
import queryFn from './queryFn';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
			refetchOnWindowFocus: false,
			queryFn: queryFn as QueryFunction<any, any>,
		},
	},
});

export default queryClient;
