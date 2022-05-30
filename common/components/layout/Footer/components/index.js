import {
	Button,
	styled,
	Divider,
	IconButton,
	Typography,
	Box,
} from '@mui/material';

const FooterBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}));

const FooterButton = styled(Button)(() => ({
	fontSize: 20,
	fontWeight: 700,
	padding: 0,
}));

const StyledDivider = styled(Divider)(() => ({
	height: 1,
	backgroundColor: '#fff',
	border: 0,
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
	marginLeft: '30px',
	backgroundColor: theme.palette.warning.main,
	color: '#fff',
	'&:hover': {
		backgroundColor: theme.palette.warning.main,
		color: '#fff',
	},
	'& svg': {
		fontSize: 22,
		height: 22,
		width: 22,
	},
}));

const CopyrightText = styled(Typography)(() => ({
	fontSize: 16,
	color: '#fff',
}));

const GotopButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#fff',
	color: theme.palette.warning.main,
	minWidth: 'unset',
	borderRadius: '50%',
	'&:hover': {
		backgroundColor: '#fff',
		color: theme.palette.warning.main,
	},
}));

export {
	FooterBox,
	FooterButton,
	StyledDivider,
	SocialButton,
	CopyrightText,
	GotopButton,
};
