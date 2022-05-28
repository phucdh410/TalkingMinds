import PropTypes from 'prop-types';
import { FormHelperText, styled, InputLabel } from '@mui/material';

const StyledLabel = styled(InputLabel)(() => ({
	marginLeft: '20px',
	marginBottom: '10px',
	display: 'block',
	fontSize: '14px',
	fontWeight: '600',
	lineHeight: '18px',
}));

const CControlItem = ({ id, required, label, children, errorText }) => {
	return (
		<>
			<StyledLabel htmlFor={id} required={required}>
				{label}
			</StyledLabel>
			{children}
			<FormHelperText>{errorText}</FormHelperText>
		</>
	);
};

export default CControlItem;
CControlItem.propTypes = {
	children: PropTypes.any,
	id: PropTypes.any,
	label: PropTypes.string,
	required: PropTypes.bool,
	errorText: PropTypes.string,
};
