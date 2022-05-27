import React from 'react';
import { Card, Box, styled, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { ArrowRightAlt } from '@mui/icons-material';

const StyledCard = styled(Card)(() => ({
	padding: '56px',
	borderRadius: '24px',
}));
const ImageBox = styled(Box)(() => ({
	position: 'relative',
	aspectRatio: '4/3',
	maxWidth: 120,
	maxHeight: 90,
	marginBottom: '22px',
}));
const ContentText = styled(Typography)(() => ({
	marginBottom: '22px',
	lineHeight: 1.55,
}));
const CardButton = styled(Button)(() => ({
	padding: 0,
	fontWeight: 700,
}));

const OfferCard = ({ img, title, content }) => {
	return (
		<StyledCard>
			<ImageBox style={{ position: 'relative', aspectRatio: '4/3' }}>
				<Image src={img} alt="image" layout="fill" />
			</ImageBox>
			<Typography variant="h4" color="secondary" mb={2}>
				{title}
			</Typography>
			<ContentText variant="body2">{content}</ContentText>
			<CardButton endIcon={<ArrowRightAlt />}>More Info</CardButton>
		</StyledCard>
	);
};

export default OfferCard;

OfferCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};
