import { any } from 'prop-types';
import { MainLayout } from '@/components/layout';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import '../common/styles/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</ThemeProvider>
	);
}

export default MyApp;

MyApp.propTypes = {
	Component: any,
	pageProps: any,
};
