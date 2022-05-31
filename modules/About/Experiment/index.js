import { Box, Container, Grid, Typography } from '@mui/material';
import { StyledBox, DataNumber } from './components';

const Experiment = () => {
	return (
		<Box component="section" className="py-0">
			<Container maxWidth="xl">
				<StyledBox container className="fl-center">
					<Grid item xl={4}>
						<Box padding="80px 14px">
							<DataNumber textAlign="center">20+</DataNumber>
							<Typography textAlign="center" variant="h4" mb={1}>
								Years of experience
							</Typography>
							<Typography
								textAlign="center"
								variant="body2"
								pt={1}
							>
								in psychology
							</Typography>
						</Box>
					</Grid>
					<Grid item xl={4}>
						<Box padding="80px 14px">
							<DataNumber textAlign="center">840+</DataNumber>
							<Typography textAlign="center" variant="h4" mb={1}>
								Patients received help
							</Typography>
							<Typography
								textAlign="center"
								variant="body2"
								pt={1}
							>
								This year
							</Typography>
						</Box>
					</Grid>
					<Grid item xl={4}>
						<Box padding="80px 14px">
							<DataNumber textAlign="center">98%</DataNumber>
							<Typography textAlign="center" variant="h4" mb={1}>
								Positive feedback
							</Typography>
							<Typography
								textAlign="center"
								variant="body2"
								pt={1}
							>
								From our doctors
							</Typography>
						</Box>
					</Grid>
				</StyledBox>
			</Container>
		</Box>
	);
};

export default Experiment;
