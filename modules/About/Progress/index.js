import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image';
import { CProgressCard } from '~/common/components/other';
import img from '@/assets/images/About_progress.jpg';

//#region data
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

const Progress = () => {
	return (
		<Box component="section" className="pt-0">
			<Container maxWidth="xl">
				<Grid container>
					<Grid item xl={6}>
						<Box className="fl-center" height="100%">
							<Grid container spacing={4}>
								{data?.length > 0 &&
									data.map((item, index) => (
										<Grid key={item.id} item xl={6}>
											<CProgressCard
												number={index + 1}
												title={item.title}
												content={item.content}
											/>
										</Grid>
									))}
							</Grid>
						</Box>
					</Grid>
					<Grid item xl={6}>
						<Box ml={4} position="relative" height={717}>
							<Image src={img.src} alt="image" layout="fill" />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Progress;
