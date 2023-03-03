import { SnackbarProvider } from 'notistack'
import routes from 'src/routes'
import RouteContainer from 'src/components/containers/RouteContainer'
import ThemeProvider from 'src/components/containers/ThemeProvider'
import QueryClientProvider from 'src/components/containers/QueryClientProvider'

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <QueryClientProvider>
        <SnackbarProvider maxSnack={3}>
          <RouteContainer routes={routes} />
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
