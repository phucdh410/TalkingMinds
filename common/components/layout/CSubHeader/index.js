import { Box, Button, Container, Typography } from '@mui/material';
import { StyledHeaderBox } from './components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CSubHeader = ({ title }) => {
	return (
		<StyledHeaderBox>
			<Container maxWidth="xl">
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h1">{title}</Typography>

					<Box className="fl-center">
						<Link href="/" passHref>
							<Button sx={{ p: 0, fontWeight: 600 }}>Home</Button>
						</Link>
						<Typography fontSize={18} component="span">
							-&nbsp;{title}
						</Typography>
					</Box>
				</Box>
			</Container>
		</StyledHeaderBox>
	);
};

export default CSubHeader;
CSubHeader.propTypes = {
	title: PropTypes.string,
};
