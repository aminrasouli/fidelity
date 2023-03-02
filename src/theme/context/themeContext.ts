import { createContext } from 'react';
import storage from '../../utils/storage';

export const ThemeContext = createContext({
	isDark: storage.isEqual('theme', 'dark'),
	setIsDark: (isDark: boolean) => {},
});
