import { styled, Box } from '@mui/material';

const FormContainer = styled(Box)(() => ({
	backgroundColor: '#f4fcfa',
	borderTopLeftRadius: 150,
	borderBottomRightRadius: 150,
	padding: '110px 28px 130px',
}));
const InputContainer = styled(Box)(() => ({
	margin: 'auto',
	maxWidth: 700,
	width: 700,
	fontSize: 16,
}));

export { FormContainer, InputContainer };
