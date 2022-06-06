import { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img1 from '@/assets/images/photo1.webp';
import img2 from '@/assets/images/photo2.webp';
import img3 from '@/assets/images/photo3.webp';
import img4 from '@/assets/images/photo4.webp';
import img5 from '@/assets/images/photo5.webp';
import img6 from '@/assets/images/photo6.webp';
import Image from 'next/image';
import { PhotoCameraBack } from '@mui/icons-material';
import BigPicture from 'bigpicture';

//#region data
const _data = [
	{ id: 1, img: img1.src },
	{ id: 2, img: img2.src },
	{ id: 3, img: img3.src },
	{ id: 4, img: img4.src },
	{ id: 5, img: img5.src },
	{ id: 6, img: img6.src },
];
//#endregion

const Photos = () => {
	const [data, setData] = useState([]);

	const updateHoverState = () => {
		const newData = _data.map((item) => ({ ...item, isHover: false }));
		setData(newData);
	};

	useEffect(() => {
		updateHoverState();
	}, []);

	const handleHover = (id) => {
		const newData = data.map((item) => {
			if (item.id === id) item.isHover = true;
			return item;
		});
		setData(newData);
	};

	const handleLeave = (id) => {
		const newData = data.map((item) => {
			if (item.id === id) item.isHover = false;
			return item;
		});
		setData(newData);
	};

	const handleZoomImg = (e, id) => {
		// eslint-disable-next-line no-unused-vars
		var bp = BigPicture({
			el: e.target,
			gallery: '#images-gallery',
			loop: true,
			position: id,
		});
	};

	return (
		<Box component="section" className="pb-0">
			<Container maxWidth="xl">
				<Box maxWidth={600} m="auto">
					<Typography textAlign="center" variant="h2" mb={2}>
						Photos from our classes
					</Typography>
					<Typography textAlign="center" variant="body1" mb={4}>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry
					</Typography>
				</Box>
				<Grid container spacing={4} id="images-gallery">
					{data?.length > 0 &&
						data.map((item, index) => (
							<Grid key={item.id} item xl={4}>
								<Box height={286} position="relative">
									<Image
										layout="fill"
										src={item.img}
										alt="image"
										data-bp={item.img}
									/>
									<Box
										className="overlay"
										position="absolute"
										height="100%"
										width="100%"
										sx={{
											transition: '0.5s linear',
											opacity: item.isHover ? 1 : 0,
											backgroundColor: (theme) =>
												theme.palette.primary.main,
											cursor: 'pointer',
										}}
										onMouseOver={() => handleHover(item.id)}
										onMouseLeave={() =>
											handleLeave(item.id)
										}
										onClick={(e) => handleZoomImg(e, index)}
									>
										<PhotoCameraBack
											color="white"
											sx={{
												fontSize: '60px',
												position: 'relative',
												top: '50%',
												left: '50%',
												transform:
													'translate(-50%,-50%)',
											}}
										/>
									</Box>
								</Box>
							</Grid>
						))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Photos;
