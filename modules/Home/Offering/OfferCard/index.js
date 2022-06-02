import { ArrowRightAlt } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { StyledCard, ImageBox, ContentText, CardButton } from '../components';

const OfferCard = ({ img, title, content }) => {
	return (
		<StyledCard>
			<ImageBox style={{ position: 'relative', aspectRatio: '4/3' }}>
				<Image src={img} alt="image" layout="fill" />
			</ImageBox>
			<Typography variant="h4" mb={2}>
				{title}
			</Typography>
			<ContentText variant="body2">{content}</ContentText>
			<CardButton endIcon={<ArrowRightAlt />}>More Info</CardButton>
		</StyledCard>
	);
};

export default OfferCard;

OfferCard.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string,
};
