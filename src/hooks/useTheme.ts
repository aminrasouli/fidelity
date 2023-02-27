import {useEffect, useState} from "react";

const useTheme = () => {
    const [isDark, setIsDark] = useState<boolean>(true)

    useEffect(() => {
        const existingPreference = localStorage.getItem("theme");
        existingPreference && setIsDark(existingPreference === "dark");
    }, []);

    const handleThemeChange = () => {
        const newTheme = isDark ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };

    const isLight = !isDark;

    return {isDark, isLight, handleThemeChange};
}

export default useTheme;