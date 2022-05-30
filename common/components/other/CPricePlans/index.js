import { Grid } from '@mui/material';
import { GridContainer } from './components';
import PriceCard from './PriceCard';
import PropTypes from 'prop-types';

const CPricePlans = ({ data }) => {
	return (
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
	);
};

export default CPricePlans;
CPricePlans.propTypes = {
	data: PropTypes.array,
};
