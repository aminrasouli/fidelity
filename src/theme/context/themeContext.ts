import {createContext} from "react";


export const ThemeContext = createContext({
    isDark: false,
    setIsDark: (isDark: boolean) => {},
})