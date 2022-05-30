import { Box, Container, Grid, Typography } from '@mui/material';
import { CProcessCard } from '~/common/components/other';

//#region Data
const data = [
	{
		id: 1,
		title: 'Request',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
	},
	{
		id: 2,
		title: 'Timing',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
	},
	{
		id: 3,
		title: 'Conducting',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
	},
	{
		id: 4,
		title: 'Review',
		content:
			'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
	},
];
//#endregion

const Process = () => {
	return (
		<Box component="section">
			<Container maxWidth="xl">
				<Box maxWidth={600} m="auto">
					<Typography variant="h2" textAlign="center" mb={3}>
						Counseling Process
					</Typography>
					<Typography variant="body1" textAlign="center" mb={5}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<Grid container spacing={4}>
					{data?.length > 0 &&
						data.map((item, index) => (
							<Grid key={item.id} item xl={3}>
								<CProcessCard
									number={index + 1}
									title={item.title}
									content={item.content}
								/>
							</Grid>
						))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Process;
