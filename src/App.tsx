import { ThemeProvider } from '@mui/material/styles'
import { getTheme, ThemeContext } from './theme'
import RouteSwitcher from './views/components/RouteSwitcher'
import routes from './routes'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import { QueryClientProvider } from 'react-query'
import queryClient from './api/libs/queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import storage from './utils/storage'
import { SnackbarProvider } from 'notistack'

export default function App(): JSX.Element {
  const [isDark, setIsDark] = useState<boolean>(storage.isEqual('theme', 'dark'))

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={getTheme(isDark)}>
        <CssBaseline />
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <SnackbarProvider maxSnack={3}>
              <ReactQueryDevtools initialIsOpen={false} />
              <RouteSwitcher routes={routes} />
            </SnackbarProvider>
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
