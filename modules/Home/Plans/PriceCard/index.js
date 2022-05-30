import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { CButton } from '~/common/components/controls';
import { StyledCard, StyledDivider, ContentText } from '../components';

const PriceCard = ({ title, price, benefits, index }) => {
	return (
		<StyledCard>
			<Typography variant="h4" mb={3}>
				{title}
			</Typography>
			<Typography variant="h6" color="primary">
				&#36;{price}
			</Typography>
			<StyledDivider />
			<Box component="ul" m="auto" maxWidth={202}>
				{benefits?.length > 0 &&
					benefits.map((item) => (
						<ContentText
							key={item.id}
							variant="body2"
							className={!item.available && 'NotAvailable'}
						>
							{item.title}
						</ContentText>
					))}
			</Box>

			<CButton variant={index === 1 ? 'contained' : 'outlined'}>
				Buy now
			</CButton>
		</StyledCard>
	);
};

export default PriceCard;

PriceCard.propTypes = {
	title: PropTypes.string,
	price: PropTypes.number,
	benefits: PropTypes.array,
	index: PropTypes.number,
};
