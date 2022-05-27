import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#26aba3',
			contrastText: '#fff',
		},
		secondary: {
			main: '#333',
			contrastText: '#fff',
		},
		warning: {
			main: '#f7ab1e',
			contrastText: '#fff',
		},
		active: {
			main: '#f7ab1e',
			contrastText: '#fff',
		},
	},
	breakpoints: {
		values: {
			xs: 360,
			sm: 450,
			md: 768,
			lg: 1024,
			xl: 1400,
		},
	},
	typography: {
		fontFamily: 'Open Sans',
		fontSize: 18,
		fontWeightMedium: 500,
		h1: {
			fontSize: 54,
			fontWeight: 800,
			lineHeight: '56px',
		},
		h2: {
			fontSize: 42,
			fontWeight: 800,
			lineHeight: '50px',
		},
		h3: {
			fontSize: 45,
			fontWeight: 800,
			lineHeight: 1,
			'&.Orange': {
				color: '#f7ab1e',
			},
		},
		h4: {
			fontSize: 24,
			fontWeight: 700,
			lineHeight: '30px',
		},
		h6: {
			fontSize: '54px',
			lineHeight: '60px',
			fontWeight: 800,
		},
		body1: {
			fontSize: 20,
			fontWeight: 400,
			lineHeight: '32px',
		},
		body2: {
			fontSize: 18,
			fontWeight: 400,
			lineHeight: '22px',
		},
	},
	components: {
		//#region Control
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					lineHeight: '24.5px',
					boxShadow: 'none',
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: 'none',
				},
			},
		},
		//#endregion
		//#region Display
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
				},
			},
		},
		//#endregion
	},
});

export default theme;
