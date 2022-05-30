import { styled, Box, Grid, Card, Typography, Button } from '@mui/material';

const StyledBox = styled(Box)(() => ({
	backgroundColor: 'rgba(244, 252, 250, 1) !important;',
}));
const GridContainer = styled(Grid)(() => ({
	'&> .MuiGrid-root:nth-of-type(2)': {
		transform: 'translateY(-30px)',
	},
}));

// Styled components (OfferCard)
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

export {
	StyledBox,
	StyledCard,
	GridContainer,
	CardButton,
	ContentText,
	ImageBox,
};
