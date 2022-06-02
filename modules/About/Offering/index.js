import { Box, Container, Grid, styled, Typography } from '@mui/material';
import img1 from '@/assets/images/program_1.png';
import img2 from '@/assets/images/program_2.png';
import img3 from '@/assets/images/program_3.png';
import img4 from '@/assets/images/program_4.png';
import img5 from '@/assets/images/program_5.png';
import img6 from '@/assets/images/program_6.png';
import { CProgramCard } from '~/common/components/other';

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
}));

//#region Data
const data = [
	{
		id: 1,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
		image: img1.src,
	},
	{
		id: 2,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
		image: img2.src,
	},
	{
		id: 3,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
		image: img3.src,
	},
	{
		id: 4,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
		image: img4.src,
	},
	{
		id: 5,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
		image: img5.src,
	},
	{
		id: 6,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
		image: img6.src,
	},
];
//#endregion

const Offering = () => {
	return (
		<StyledBox component="section">
			<Container maxWidth="xl">
				<Box maxWidth={600} m="auto">
					<Typography variant="h2" textAlign="center" mb={3}>
						What I'm Offering
					</Typography>
					<Typography variant="body1" textAlign="center" mb={3}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<Grid container spacing={4}>
					{data?.length > 0 &&
						data.map((item) => (
							<Grid key={item.id} item xl={4}>
								<CProgramCard
									title={item.title}
									content={item.content}
									img={item.image}
								/>
							</Grid>
						))}
				</Grid>
			</Container>
		</StyledBox>
	);
};

export default Offering;
