import { Box, Container, Typography } from '@mui/material';
import ImagesSlider from './ImagesSlider';

import img1 from '@/assets/images/certificate-1.jpg';
import img2 from '@/assets/images/certificate-2.jpg';

//#region data
const data = [
	{ id: 1, img: img2.src },
	{ id: 2, img: img1.src },
	{ id: 3, img: img2.src },
	{ id: 4, img: img1.src },
];
//#endregion
const Certificates = () => {
	return (
		<Box component="section">
			<Container maxWidth="xl">
				<Box maxWidth={600} m="auto" mb={4}>
					<Typography variant="h2" textAlign="center" mb={3}>
						Certificates
					</Typography>
					<Typography variant="body1" textAlign="center" mb={4}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<ImagesSlider data={data} />
			</Container>
		</Box>
	);
};

export default Certificates;
