import { styled, Grid, Typography } from '@mui/material';

const StyledBox = styled(Grid)(() => ({
	boxShadow: '0px 8px 30px 0px #2baba012',
}));

const DataNumber = styled(Typography)(({ theme }) => ({
	marginBottom: '22px',
	fontSize: 70,
	fontWeight: 800,
	lineHeight: '50px',
	color: theme.palette.active.main,
}));

export { StyledBox, DataNumber };
