import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query'
import { FC, PropsWithChildren } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </ReactQueryClientProvider>
  )
}

export default QueryClientProvider
