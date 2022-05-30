import { styled, Box, Typography } from '@mui/material';

const StyledInfoBox = styled(Box)(({ theme }) => ({
	padding: 28,
	borderRadius: 30,
	backgroundColor: theme.palette.background.default,
	'& p:last-of-type': {
		marginBottom: '22px',
	},
}));

const InfoTitle = styled(Typography)(() => ({
	fontWeight: 700,
	fontSize: 24,
	marginTop: '22px',
	marginBottom: '14px',
	lineHeight: '30px',
}));

const InfoContent = styled(Typography)(() => ({
	fontWeight: 700,
	fontSize: 18,
}));

const MapBox = styled(Box)(() => ({
	position: 'relative',
	textAlign: 'right',
	height: '100%',
	width: '100%',
}));

const GmapCanvas = styled(Box)(() => ({
	overflow: 'hidden',
	background: 'none!important',
	height: '100%',
	width: '100%',
}));

export { StyledInfoBox, InfoTitle, InfoContent, MapBox, GmapCanvas };
