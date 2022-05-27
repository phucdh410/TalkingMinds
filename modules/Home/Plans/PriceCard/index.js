import React from 'react';
import { Card, Box, styled, Typography, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import { CButton } from '~/common/components/controls';

const StyledCard = styled(Card)(() => ({
	padding: '56px',
	borderRadius: '24px',
	textAlign: 'center',
}));
const ContentText = styled(Typography)(() => ({
	paddingLeft: '21px',
	textAlign: 'left',
	marginBottom: '22px',
	lineHeight: 1.55,
	'&.NotAvailable': {
		textDecoration: 'line-through',
		color: '#8c8f92',
	},
}));
const StyledDivider = styled(Divider)(() => ({
	border: 0,
	backgroundColor: '#e0e4e8',
	width: 50,
	height: 2,
	margin: 'auto',
	marginTop: '19px',
	marginBottom: '37px',
}));

const PriceCard = ({ title, price, benefits, index }) => {
	return (
		<StyledCard>
			<Typography variant="h4" color="secondary" mb={3}>
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
							key={item.key}
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
