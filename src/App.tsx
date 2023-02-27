import {ThemeProvider} from '@mui/material/styles';
import {getTheme} from "./theme";
import RouteSwitcher from "./views/components/RouteSwitch";
import routes from "./routes";
import {BrowserRouter} from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeContext} from './theme/context/themeContext';
import {useState} from "react";

export default function App(): JSX.Element {
    const [isDark, setIsDark] = useState<boolean>(true);

    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <ThemeProvider theme={getTheme(isDark)}>
                <CssBaseline/>
                <BrowserRouter>
                    <RouteSwitcher routes={routes}/>
                </BrowserRouter>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}