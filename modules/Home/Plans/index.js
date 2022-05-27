import React from 'react';
import { styled, Box, Typography, Grid, Container } from '@mui/material';
import PriceCard from './PriceCard';

const StyledBox = styled(Box)(() => ({
	backgroundColor: 'rgba(244, 252, 250, 1) !important;',
}));

const GridContainer = styled(Grid)(() => ({
	'&> .MuiGrid-root:nth-of-type(2)': {
		transform: 'translateY(-30px)',
	},
}));

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
			{ id: 4, title: 'Personal meeting', available: false },
			{ id: 5, title: 'Support 24 hours', available: false },
		],
	},
	{
		id: 3,
		title: 'Duration 30 minutes',
		price: 150,
		benefits: [
			{ id: 1, title: '12 session / month', available: true },
			{ id: 2, title: '6 session / month', available: true },
			{ id: 3, title: 'Group meetting', available: true },
			{ id: 4, title: 'Personal meeting', available: false },
			{ id: 5, title: 'Support 24 hours', available: false },
		],
	},
];
//#endregion

const Plans = () => {
	return (
		<StyledBox component="section">
			<Container maxWidth="xl" disableGutters>
				<Box maxWidth={600} mx="auto" mb={9}>
					<Typography
						variant="h2"
						color="secondary"
						textAlign="center"
						mb={2}
					>
						What I&#39;m Offering
					</Typography>
					<Typography variant="body1" textAlign="center">
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<GridContainer container columnSpacing={5}>
					{data?.length > 0 &&
						data.map((card, index) => (
							<Grid key={card.id} item xs={12} xl={4}>
								<PriceCard
									title={card.title}
									price={card.price}
									benefits={card.benefits}
									index={index}
								/>
							</Grid>
						))}
				</GridContainer>
			</Container>
		</StyledBox>
	);
};

export default Plans;
