import { StyledCard, ContentText, ProgressNumber } from './components';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const CProcessCard = ({ number, title, content }) => {
	return (
		<StyledCard>
			<ProgressNumber>0{number}</ProgressNumber>
			<Typography variant="h4" mb={2}>
				{title}
			</Typography>
			<ContentText variant="body2">{content}</ContentText>
		</StyledCard>
	);
};

export default CProcessCard;

CProcessCard.propTypes = {
	number: PropTypes.number,
	title: PropTypes.string,
	content: PropTypes.string,
};
