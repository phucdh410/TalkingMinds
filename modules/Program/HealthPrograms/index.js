import { Box, Container, Grid, Typography } from '@mui/material';
import program1 from '@/assets/images/program_1.png';
import program2 from '@/assets/images/program_2.png';
import program3 from '@/assets/images/program_3.png';
import program4 from '@/assets/images/program_4.png';
import program5 from '@/assets/images/program_5.png';
import program6 from '@/assets/images/program_6.png';
import { CProgramCard } from '~/common/components/other';

//#region Data
const data = [
	{
		id: 1,
		img: program1.src,
		title: 'Depression therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 2,
		img: program2.src,
		title: 'Couples counceling',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 3,
		img: program3.src,
		title: 'Relationship',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 4,
		img: program4.src,
		title: 'Anxiety Disorder',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 5,
		img: program5.src,
		title: 'Children Therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
	{
		id: 6,
		img: program6.src,
		title: 'Individual Therapy',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium.',
	},
];
//#endregion

const HealthPrograms = () => {
	return (
		<Box component="section" className="pb-0">
			<Container maxWidth="xl">
				<Box maxWidth={600} m="auto">
					<Typography variant="h2" textAlign="center" mb={3}>
						Mental health therapy programs
					</Typography>
					<Typography variant="body1" textAlign="center" mb={5}>
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
									img={item.img}
									content={item.content}
								/>
							</Grid>
						))}
				</Grid>
			</Container>
		</Box>
	);
};

export default HealthPrograms;
