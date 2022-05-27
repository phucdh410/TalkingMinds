import React from 'react';
import {
	Box,
	Grid,
	styled,
	Typography,
	Container,
	Divider,
} from '@mui/material';
import img from '@/assets/images/Home_intro.jpg';
import Image from 'next/image';
import { CButton } from '~/common/components/controls';

const StyledBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	height: '100%',
}));
const NumberItem = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	marginRight: '56px',
}));
const StyledDivider = styled(Divider)(({ theme }) => ({
	width: '44px',
	maxWidth: '44px',
	height: '2px',
	backgroundColor: theme.palette.primary.main,
	border: 0,
	margin: '12px 0',
	opacity: 0.5,
}));

const Intro = () => {
	return (
		<Box>
			<Container maxWidth="xl" disableGutters>
				<Grid container>
					<Grid item xs={6}>
						<Container sx={{ height: '100%' }}>
							<StyledBox>
								<Box mb={2}>
									<Typography
										variant="h1"
										color="secondary"
										mb={2}
									>
										Private Mental Health Consultation from
										a Professional
									</Typography>
									<Typography variant="body1" mb={3}>
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Sed
										ut perspiciatis unde omnis iste natus
										error sit voluptatem
									</Typography>
								</Box>

								<Box display="flex">
									<CButton variant="contained" sx={{ mr: 4 }}>
										Get a consultation
									</CButton>
									<CButton variant="outlined">
										Learn more
									</CButton>
								</Box>
								<Box
									position="absolute"
									bottom={0}
									display="flex"
								>
									<NumberItem>
										<Typography
											variant="h3"
											className="Orange"
										>
											20&#43;
										</Typography>
										<StyledDivider />
										<Typography variant="body2">
											Years of experience
										</Typography>
									</NumberItem>
									<NumberItem>
										<Typography
											variant="h3"
											className="Orange"
										>
											840&#43;
										</Typography>
										<StyledDivider />
										<Typography variant="body2">
											Patients received help this year
										</Typography>
									</NumberItem>
									<NumberItem>
										<Typography
											variant="h3"
											className="Orange"
										>
											98&#37;
										</Typography>
										<StyledDivider />
										<Typography variant="body2">
											Client improved their condition
										</Typography>
									</NumberItem>
								</Box>
							</StyledBox>
						</Container>
					</Grid>
					<Grid item xs={6}>
						<Container>
							<div
								style={{
									position: 'relative',
									height: '671px',
									marginLeft: '30px',
								}}
							>
								<Image
									priority
									src={img.src}
									alt="image"
									layout="fill"
								/>
							</div>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Intro;
