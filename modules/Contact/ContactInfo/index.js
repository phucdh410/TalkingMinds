import { Box, Container, Grid } from '@mui/material';
import Infos from './Infos';
import Map from './Map';

const ContactInfo = () => {
	return (
		<Box component="section">
			<Container maxWidth="xl">
				<Grid container columnSpacing={6}>
					<Grid item xl={6}>
						<Infos />
					</Grid>
					<Grid item xl={6}>
						<Map srcMap="https://maps.google.com/maps?q=234%20Ng%C3%B4%20T%E1%BA%A5t%20T%E1%BB%91&t=&z=15&ie=UTF8&iwloc=&output=embed" />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ContactInfo;
