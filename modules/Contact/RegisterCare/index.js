import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import image from '@/assets/images/Contact_register.jpg';
import {
	CButton,
	CControlItem,
	CInput,
	CTextarea,
} from '~/common/components/controls';

const RegisterCare = () => {
	return (
		<Box component="section" className="pt-0">
			<Container maxWidth="xl">
				<Grid container>
					<Grid item xl={6}>
						<Container>
							<Box position="relative" height={680}>
								<Image
									src={image.src}
									alt="image"
									layout="fill"
								/>
							</Box>
						</Container>
					</Grid>
					<Grid item xl={6}>
						<Container sx={{ ml: 2 }} className="fl-center">
							<Box height="100%">
								<Typography variant="h2">
									Take care of your mental health
								</Typography>
								<Box mt={4}>
									<Grid
										container
										columnSpacing={1}
										rowGap={3}
									>
										<Grid item xl={6}>
											<CControlItem
												id="first name"
												label="First name"
											>
												<CInput id="first name" />
											</CControlItem>
										</Grid>
										<Grid item xl={6}>
											<CControlItem
												id="email"
												label="Email"
												required
											>
												<CInput id="email" />
											</CControlItem>
										</Grid>
										<Grid item xl={6}>
											<CControlItem
												id="country"
												label="Country/Region"
											>
												<CInput id="country" />
											</CControlItem>
										</Grid>
										<Grid item xl={6}>
											<CControlItem
												id="program"
												label="Program"
											>
												<CInput id="program" />
											</CControlItem>
										</Grid>
										<Grid item xl={12}>
											<CControlItem
												id="message"
												label="Message"
											>
												<CTextarea
													id="message"
													style={{
														height: 120,
														width: '100%',
														maxWidth:
															'calc(100% - 40px)',
														minHeight: 90,
													}}
												/>
											</CControlItem>
										</Grid>
									</Grid>
									<Box className="fl-center" mt={6}>
										<CButton variant="contained">
											Submit
										</CButton>
									</Box>
								</Box>
							</Box>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default RegisterCare;
