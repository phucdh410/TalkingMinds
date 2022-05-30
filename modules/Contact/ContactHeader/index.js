import { Box, Button, Container, Typography } from '@mui/material';
import { StyledHeaderBox } from './components';

const ContactHeader = () => {
	return (
		<StyledHeaderBox>
			<Container maxWidth="xl">
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h1">Contact</Typography>

					<Box className="fl-center">
						<Button sx={{ p: 0, fontWeight: 600 }}>Home</Button>
						<Typography component="span">-&nbsp;Contact</Typography>
					</Box>
				</Box>
			</Container>
		</StyledHeaderBox>
	);
};

export default ContactHeader;
