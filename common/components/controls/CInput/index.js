import { OutlinedInput, styled } from '@mui/material';
import PropTypes from 'prop-types';

const CInput = ({ id, value, onChange, ...props }) => {
	const StyledInput = styled(OutlinedInput)(() => ({
		backgroundColor: '#FFF',
		border: '1px solid #c9ced3',
		padding: '0 20px',
		width: '100%',
		height: 50,
		outline: 0,
		borderRadius: 50,
		fontSize: 16,
		fontWeight: 400,
		lineHeight: '28px',
		color: '#8c8f92',
		'& .MuiOutlinedInput-input': {
			padding: 0,
		},
	}));

	return <StyledInput id={id} value={value} onChange={onChange} {...props} />;
};

export default CInput;
CInput.propTypes = {
	id: PropTypes.id,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
};
