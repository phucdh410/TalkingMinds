import { styled, Button } from '@mui/material';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)(() => ({
	padding: '14px 37px',
	fontSize: '18px',
	lineHeight: '28px',
	fontWeight: 700,
	borderRadius: '30px',
}));

const CButton = ({ children, onClick, ...props }) => {
	return (
		<StyledButton onClick={onClick} {...props}>
			{children}
		</StyledButton>
	);
};

export default CButton;

CButton.propTypes = {
	children: PropTypes.any,
	onClick: PropTypes.func,
};
