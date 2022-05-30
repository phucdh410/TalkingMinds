import { Box, Avatar, Typography } from '@mui/material';
import { StyledCard, ContentText } from '../components';

const RatingCard = () => {
	return (
		<StyledCard>
			<Box display="flex" mb={2}>
				<Avatar sx={{ height: 60, width: 60, mr: 2 }} />
				<Box>
					<Typography fontWeight={600}>Kerry Banks</Typography>
					<Typography color="primary">Housewife</Typography>
				</Box>
			</Box>
			<ContentText variant="body2">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				text industry. Lorem Ipsum has been the industry&apos;s standard
				dumm ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type.
			</ContentText>
		</StyledCard>
	);
};

export default RatingCard;
