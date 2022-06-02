import { styled, Card, Typography } from '@mui/material';

// Styled components (OfferCard)

const StyledCard = styled(Card)(() => ({
	padding: '42px',
	borderRadius: '24px',
	boxShadow: ' 0px 8px 30px 0px #2baba012',
}));

const ProgressNumber = styled(Typography)(() => ({
	color: '#c1e3de',
	marginBottom: '20px',
	fontSize: 72,
	fontWeight: 800,
	lineHeight: '60px',
}));

const ContentText = styled(Typography)(() => ({
	lineHeight: 1.55,
}));

export { StyledCard, ProgressNumber, ContentText };
