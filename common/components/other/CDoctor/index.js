import { useRef } from 'react';
import { CButton } from '@/components/controls';
import { Container, Grid, Typography, Box } from '@mui/material';
import { PlayArrow } from '@mui/icons-material';
import BigPicture from 'bigpicture';
import doctorImg from '@/assets/images/Home_doctor.jpg';
import Image from 'next/image';
import {
	StyledBox,
	TypographyName,
	TechnicalItem,
	PlayButton,
} from './components';

const CDoctor = () => {
	const linkRef = useRef();

	const openVideo = (e) => {
		e.preventDefault();
		var bp = BigPicture({
			el: linkRef.current,
			iframeSrc: 'https://www.youtube.com/embed/TKlXc3iywoM',
			dimensions: [900, 500],
		});
	};

	return (
		<Container maxWidth="xl" disableGutters sx={{ position: 'relative' }}>
			<Grid container>
				<Grid item xs={6}>
					<Container sx={{ height: '100%' }}>
						<StyledBox>
							<Box>
								<Typography variant="h2" mb={2}>
									<TypographyName
										component="span"
										color="primary"
									>
										Dr Merry Stone
									</TypographyName>
									&nbsp;—&nbsp;Licensed Mental Health
									Counselor, Psychotherapist
								</Typography>
								<Typography variant="body1" mb={3}>
									It is a long established fact that a reader
									will be distracted by the readable content
									of a page. Sed ut perspiciatis unde lorem
									ipsum omnis iste natus error.
								</Typography>
							</Box>

							<Box
								display="flex"
								justifyContent="space-between"
								maxWidth={550}
							>
								<Box component="ul">
									<TechnicalItem component="li">
										Personal consultation
									</TechnicalItem>
									<TechnicalItem component="li">
										Group therapy
									</TechnicalItem>
									<TechnicalItem component="li">
										Online therapy
									</TechnicalItem>
								</Box>
								<Box component="ul">
									<TechnicalItem component="li">
										Unique technique
									</TechnicalItem>
									<TechnicalItem component="li">
										Couple problem
									</TechnicalItem>
								</Box>
							</Box>

							<Box mt={3}>
								<CButton variant="contained" sx={{ mr: 4 }}>
									Read more
								</CButton>
							</Box>
						</StyledBox>
					</Container>
				</Grid>
				<Grid item xs={6}>
					<Container sx={{ marginLeft: '30px' }}>
						<div
							style={{
								position: 'relative',
								height: '701px',
							}}
						>
							<Image
								priority
								src={doctorImg.src}
								alt="image"
								layout="fill"
							/>
							<PlayButton
								component="a"
								onClick={openVideo}
								ref={linkRef}
							>
								<PlayArrow />
							</PlayButton>
						</div>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
};

export default CDoctor;
