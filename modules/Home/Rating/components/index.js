import { styled, Box, Card, Typography } from '@mui/material';

const iconSize = 40;

const StyledSlider = styled(Box)(({ theme }) => ({
	'& .slick-arrow': {
		'&:before': {
			color: theme.palette.primary.main,
			fontSize: iconSize,
			height: iconSize,
			width: iconSize,
		},
		'&.slick-prev': {
			left: -50,
		},
		'&.slick-next': {
			right: -30,
		},
	},
}));

const StyledCard = styled(Card)(() => ({
	borderRadius: '24px',
	background: '#fff',
	padding: '56px',
	margin: '28px 14px',
	boxShadow: '0px 8px 30px 0px #2baba012',
}));
const ContentText = styled(Typography)(() => ({
	lineHeight: 1.55,
}));

export { StyledSlider, StyledCard, ContentText };
