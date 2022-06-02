import { Box, Container, Grid, Typography } from '@mui/material';

import { CButton } from '@/components/controls';
import OfferCard from './OfferCard';
import service1 from '@/assets/images/program_1.png';
import service2 from '@/assets/images/program_2.png';
import service3 from '@/assets/images/program_3.png';
import { StyledBox, GridContainer } from './components';

//#region Data
const data = [
	{
		id: 1,
		img: service1.src,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 2,
		img: service2.src,
		title: 'Couples counceling',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 3,
		img: service3.src,
		title: 'Relationship',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
];
//#endregion

const Offering = () => {
	return (
		<StyledBox component="section">
			<Container maxWidth="xl" disableGutters>
				<Box maxWidth={600} mx="auto" mb={9}>
					<Typography variant="h2" textAlign="center" mb={2}>
						What I&#39;m Offering
					</Typography>
					<Typography variant="body1" textAlign="center">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<GridContainer container columnSpacing={5}>
					{data?.length > 0 &&
						data.map((card) => (
							<Grid key={card.id} item xs={12} xl={4}>
								<OfferCard
									img={card.img}
									title={card.title}
									content={card.content}
								/>
							</Grid>
						))}
				</GridContainer>
				<Box mt={7}>
					<CButton
						variant="contained"
						sx={{ left: '50%', transform: 'translateX(-50%)' }}
					>
						All services
					</CButton>
				</Box>
			</Container>
		</StyledBox>
	);
};

export default Offering;
