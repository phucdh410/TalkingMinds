import React from 'react';
import { Box, Container, Grid, styled } from '@mui/material';
import Contact from './Contact';
import Logo from './Logo';
import Navigation from './Navigation';

const HeaderMui = styled(Box)(() => ({
	backgroundColor: 'white',
	minHeight: '56px',
	padding: '28px 0',
	boxShadow: '0px 8px 30px 0px #2baba012;',
}));

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
