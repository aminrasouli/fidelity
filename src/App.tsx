import { useState } from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import RouteSwitcher from 'src/routes/components/RouteSwitcher'
import { getTheme, ThemeContext } from 'src/theme'
import routes from 'src/routes'
import queryClient from 'src/api/libs/clients/queryClient'
import storage from 'src/utils/storage'

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
