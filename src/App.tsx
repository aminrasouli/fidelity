import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SnackbarProvider } from 'notistack'
import RouteContainer from 'src/components/containers/RouteContainer'
import routes from 'src/routes'
import queryClient from 'src/api/libs/clients/queryClient'
import CustomThemeProvider from './components/containers/CustomThemeProvider'

export default function App(): JSX.Element {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
            <ReactQueryDevtools initialIsOpen={false} />
            <RouteContainer routes={routes} />
          </SnackbarProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </CustomThemeProvider>
  )
}
