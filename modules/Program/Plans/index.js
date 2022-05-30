import { Box, Typography, Container } from '@mui/material';
import { StyledBox } from './components';
import { CPricePlans } from '~/common/components/other';

//#region Data
const data = [
	{
		id: 1,
		title: 'Light session',
		price: 150,
		benefits: [
			{ id: 1, title: '6 session / month', available: true },
			{ id: 2, title: 'Duration 30 minutes', available: true },
			{ id: 3, title: 'Group meetting', available: true },
			{ id: 4, title: 'Personal meeting', available: false },
			{ id: 5, title: 'Support 24 hours', available: false },
		],
	},
	{
		id: 2,
		title: 'Standard session',
		price: 250,
		benefits: [
			{ id: 1, title: '10 session / month', available: true },
			{ id: 2, title: 'Duration 30 minutes', available: true },
			{ id: 3, title: 'Group meetting', available: true },
			{ id: 4, title: 'Personal meeting', available: true },
			{ id: 5, title: 'Support 24 hours', available: false },
		],
	},
	{
		id: 3,
		title: 'Individual session',
		price: 400,
		benefits: [
			{ id: 1, title: '12 session / month', available: true },
			{ id: 2, title: '6 session / month', available: true },
			{ id: 3, title: 'Group meetting', available: true },
			{ id: 4, title: 'Personal meeting', available: true },
			{ id: 5, title: 'Support 24 hours', available: true },
		],
	},
];
//#endregion

const Plans = () => {
	return (
		<StyledBox component="section">
			<Container maxWidth="xl">
				<Box maxWidth={600} mx="auto" mb={9}>
					<Typography variant="h2" textAlign="center" mb={2}>
						Pricing plans
					</Typography>
					<Typography variant="body1" textAlign="center">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<CPricePlans data={data} />
			</Container>
		</StyledBox>
	);
};

export default Plans;
