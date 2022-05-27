import { Box, Container, styled } from '@mui/material';

const ConsultationForm = styled(Box)(() => ({
	backgroundColor: '#f4fcfa',
	borderTopLeftRadius: 150,
	borderBottomRightRadius: 150,
}));

const Consultation = () => {
	return (
		<Container maxWidth="xl">
			<ConsultationForm>
				<p>sadasdsad</p>
			</ConsultationForm>
		</Container>
	);
};

export default Consultation;
