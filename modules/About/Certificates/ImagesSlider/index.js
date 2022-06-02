import Slider from 'react-slick';
import { Box, styled } from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

const settings = {
	slidesToShow: 3,
	slidesToScroll: 2,
	speed: 500,
	infinite: true,
};

const ImageBox = styled(Box)(() => ({
	height: 267,
	position: 'relative',
	padding: '0 14px',
	margin: '0 19.5px',
}));

const ImagesSlider = ({ data }) => {
	return (
		<Box>
			<Slider {...settings}>
				{data?.length > 0 &&
					data.map((item) => (
						<Box key={item.id}>
							<ImageBox>
								<Image
									src={item.img}
									alt="image"
									layout="fill"
								/>
							</ImageBox>
						</Box>
					))}
			</Slider>
		</Box>
	);
};

export default ImagesSlider;
ImagesSlider.propTypes = {
	data: PropTypes.array,
};
