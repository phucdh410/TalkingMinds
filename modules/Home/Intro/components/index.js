import { styled, Box, Divider } from '@mui/material';

const StyledBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	height: '100%',
}));
const NumberItem = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	marginRight: '56px',
}));
const StyledDivider = styled(Divider)(({ theme }) => ({
	width: '44px',
	maxWidth: '44px',
	height: '2px',
	backgroundColor: theme.palette.primary.main,
	border: 0,
	margin: '12px 0',
	opacity: 0.5,
}));

export { StyledBox, NumberItem, StyledDivider };
