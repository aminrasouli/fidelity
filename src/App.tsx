import {ThemeProvider} from '@mui/material/styles';
import {getTheme} from "./theme";
import {useTheme} from "./hooks";
import RouteSwitcher from "./views/components/RouteSwitch";
import routes from "./routes";
import {BrowserRouter} from "react-router-dom";

export default function App(): JSX.Element {
    const {isDark} = useTheme();

    return (
        <ThemeProvider theme={getTheme(isDark)}>
            <BrowserRouter>
                <RouteSwitcher routes={routes}/>
            </BrowserRouter>
        </ThemeProvider>
    );
}