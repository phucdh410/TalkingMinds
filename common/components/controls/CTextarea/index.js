import { styled, TextareaAutosize } from '@mui/material';
import PropTypes from 'prop-types';

const StyledTextarea = styled(TextareaAutosize)(() => ({
	padding: '14px 20px',
	borderRadius: '50px',
}));

const CTextarea = ({ id, value, onChange, ...props }) => {
	return (
		<StyledTextarea id={id} value={value} onChange={onChange} {...props} />
	);
};

export default CTextarea;

CTextarea.propTypes = {
	id: PropTypes.any,
	value: PropTypes.string,
	onChange: PropTypes.func,
};
