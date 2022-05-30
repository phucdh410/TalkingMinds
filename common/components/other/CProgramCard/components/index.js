import { styled, Box, Card, Typography, Button } from '@mui/material';

// Styled components (OfferCard)
const StyledCard = styled(Card)(() => ({
	padding: '56px',
	borderRadius: '24px',
	boxShadow: ' 0px 8px 30px 0px #2baba012',
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

export { StyledCard, ImageBox, ContentText, CardButton };
