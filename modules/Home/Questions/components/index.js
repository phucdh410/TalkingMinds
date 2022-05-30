import { styled, Accordion, Typography } from '@mui/material';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
	'&:before': {
		backgroundColor: 'unset',
	},
	'&.Mui-expanded': {
		margin: 0,
	},
	'.MuiAccordionSummary-root': {
		borderBottom: '1px solid #e0e4e8',
		padding: 0,
		transition: '300ms linear',
		'&.Mui-expanded': {
			border: 0,
			color: theme.palette.primary.main,
			'& .MuiAccordionSummary-expandIconWrapper': {
				color: 'inherit',
			},
		},
		'&:hover': {
			color: theme.palette.primary.main,
			'& .MuiAccordionSummary-expandIconWrapper': {
				color: 'inherit',
			},
		},
	},
	'.MuiAccordionSummary-content': {
		margin: 0,
		'&.Mui-expanded': {
			margin: 0,
		},
	},
	'.MuiAccordionDetails-root': {
		padding: 0,
	},
}));
const AccordionTitle = styled(Typography)(() => ({
	fontSize: 24,
	lineHeight: '30px',
	fontWeight: 700,
	padding: '28px 0',
}));
const AccordionContent = styled(Typography)(() => ({
	fontSize: 18,
	fontWeight: 400,
	color: '#51565d',
}));

export { StyledAccordion, AccordionTitle, AccordionContent };
