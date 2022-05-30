import { StyledInfoBox, InfoTitle, InfoContent } from '../../components';
import PropTypes from 'prop-types';

const InfoBox = ({ title, content }) => {
	return (
		<StyledInfoBox>
			<InfoTitle>{title}</InfoTitle>
			{content?.length > 0 &&
				content.map((item, index) => (
					<InfoContent key={index}>{item}</InfoContent>
				))}
		</StyledInfoBox>
	);
};

export default InfoBox;
InfoBox.propTypes = {
	title: PropTypes.string,
	content: PropTypes.array,
};
