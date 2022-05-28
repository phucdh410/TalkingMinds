import { Box, Container, styled, Typography } from '@mui/material';
import {
	CButton,
	CControlItem,
	CInput,
	CTextarea,
} from '~/common/components/controls';

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
const styleBtn = {
	top: '50%',
	left: '50%',
	transform: 'translateX(-50%)',
	marginTop: '24px',
};

const Consultation = () => {
	return (
		<Container maxWidth="xl">
			<FormContainer>
				<Typography
					variant="h3"
					maxWidth={500}
					textAlign="center"
					m="auto"
					mb={7}
				>
					Get your first free online consultation
				</Typography>
				<InputContainer>
					<Box display="flex">
						<Box width="50%" sx={{ mb: 3, mr: 1 }}>
							<CControlItem label="First name" id="first name">
								<CInput id="first name" />
							</CControlItem>
						</Box>
						<Box width="50%" sx={{ mb: 3, mr: 1 }}>
							<CControlItem label="Email" required id="email">
								<CInput id="email" />
							</CControlItem>
						</Box>
					</Box>
					<Box display="flex">
						<Box width="50%" sx={{ mb: 3, mr: 1 }}>
							<CControlItem label="Country/Region" id="country">
								<CInput id="country" />
							</CControlItem>
						</Box>
						<Box width="50%" sx={{ mb: 3, mr: 1 }}>
							<CControlItem label="Program" id="program">
								<CInput id="program" />
							</CControlItem>
						</Box>
					</Box>
					<Box sx={{ mb: 3, mr: 1 }}>
						<CControlItem label="Message" id="message">
							<CTextarea
								id="message"
								style={{
									height: 150,
									width: 658,
									maxWidth: 658,
								}}
							/>
						</CControlItem>
					</Box>
					<CButton variant="contained" sx={styleBtn}>
						Submit
					</CButton>
				</InputContainer>
			</FormContainer>
		</Container>
	);
};

export default Consultation;
