import { useContext, useLayoutEffect } from 'react';
import { ThemeContext } from '../theme';
import storage from '../utils/storage';

const useTheme = () => {
	const { isDark, setIsDark } = useContext(ThemeContext);

	useLayoutEffect(() => {
		const existingPreference = storage.get('theme');
		existingPreference && setIsDark(storage.isEqual('theme', 'dark'));
	}, [setIsDark]);

	const handleThemeChange = () => {
		const newTheme = isDark ? 'light' : 'dark';
		storage.set('theme', newTheme);
		setIsDark(!isDark);
	};

	const isLight = !isDark;

	return { isDark, isLight, handleThemeChange };
};

export default useTheme;
