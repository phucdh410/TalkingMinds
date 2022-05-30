/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { Container, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import RatingCard from './RatingCard';
import { StyledSlider } from './components';

const Rating = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	};

	return (
		<Container maxWidth="xl" disableGutters>
			<Box sx={{ maxWidth: 600, m: 'auto' }}>
				<Typography variant="h2" textAlign="center">
					What patients say
				</Typography>
				<Typography variant="body1" textAlign="center">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry
				</Typography>
			</Box>
			<StyledSlider mt={5}>
				<Slider {...settings}>
					<RatingCard />
					<RatingCard />
					<RatingCard />
				</Slider>
			</StyledSlider>
		</Container>
	);
};

export default Rating;
