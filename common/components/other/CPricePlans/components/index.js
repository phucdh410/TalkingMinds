import { styled, Grid, Card, Typography, Divider } from '@mui/material';

const GridContainer = styled(Grid)(() => ({
	'&> .MuiGrid-root:nth-of-type(2)': {
		transform: 'translateY(-30px)',
	},
}));

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

export { GridContainer, StyledCard, ContentText, StyledDivider };
