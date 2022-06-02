import { Box, Container, Grid } from '@mui/material';
import { HeaderMui } from './components';
import Contact from './Contact';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
	return (
		<HeaderMui component="header">
			<Container maxWidth="xl">
				<Grid container>
					<Grid item xs={3}>
						<Logo />
					</Grid>
					<Grid item xs={9}>
						<Box display="flex" justifyContent="space-between">
							<Navigation />
							<Contact />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</HeaderMui>
	);
};

export default Header;
