import { Phone } from '@mui/icons-material';
import { Box, Link, IconButton, useTheme } from '@mui/material';

const Contact = () => {
	const theme = useTheme();
	return (
		<Box display="flex" alignItems="center" justifyContent="space-evenly">
			<IconButton
				sx={{
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					marginRight: '10px',
				}}
			>
				<Phone sx={{ fontSize: '18px' }} />
			</IconButton>
			<Link href="tel:0398955548">+1 234 56 78 123</Link>
		</Box>
	);
};

export default Contact;
