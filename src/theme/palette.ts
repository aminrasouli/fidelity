import { PaletteMode } from '@mui/material';
import { indigo, red } from '@mui/material/colors';
import { PaletteOptions } from '@mui/material/styles/createPalette';

const sharedPalette: PaletteOptions = {
	primary: {
		main: indigo[500],
	},
	secondary: {
		main: red[500],
	},
};

const lightPalette: PaletteOptions = {
	mode: 'light',
};

const darkPalette: PaletteOptions = {
	mode: 'dark',
};

const palette: (mode: PaletteMode) => PaletteOptions = (mode) => ({
	...(mode === 'dark' ? darkPalette : lightPalette),
	...sharedPalette,
});

export default palette;
