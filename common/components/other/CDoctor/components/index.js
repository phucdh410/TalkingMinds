import { Box, styled, Typography, IconButton } from '@mui/material';

const StyledBox = styled(Box)(() => ({
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',
	height: '100%',
	justifyContent: 'center',
}));
const TypographyName = styled(Typography)(() => ({
	fontSize: '42px',
	fontWeight: 800,
	lineHeight: '50px',
}));
const TechnicalItem = styled(Typography)(() => ({
	paddingLeft: '29px',
	marginBottom: '21px',
	fontWeight: 700,
	fontSize: 18,
	lineHeight: '21px',
}));
const PlayButton = styled(IconButton)(({ theme }) => ({
	position: 'absolute',
	top: '50%',
	left: '-75px',
	transform: 'translateY(-50%)',
	height: 150,
	width: 150,
	padding: 0,
	color: theme.palette.active.main,
	backgroundColor: '#fef3de',
	'&:hover': {
		color: '#fff',
		backgroundColor: theme.palette.active.main,
	},
	'& svg': {
		fontSize: 110,
	},
}));

export { StyledBox, TypographyName, TechnicalItem, PlayButton };
