import { Box, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { CButton } from '~/common/components/controls';
import img1 from '@/assets/images/test.jpg';
import img2 from '@/assets/images/test2.jpg';
import img3 from '@/assets/images/test3.jpg';
import img4 from '@/assets/images/test4.jpg';
import img5 from '@/assets/images/test5.jpg';
import { motion, useViewportScroll } from 'framer-motion';

const style = {
	'::-webkit-scrollbar': {
		height: 0,
	},

	/* Track */
	'::-webkit-scrollbar-track': {
		background: '#f1f1f1',
	},

	/* Handle */
	'::-webkit-scrollbar-thumb': {
		background: '#888',
	},

	/* Handle on hover */
	'::-webkit-scrollbar-thumb:hover': {
		background: '#555',
	},
};

const Experiment = () => {
	const boxRef = useRef();
	const [radius, setRadius] = useState(0);

	const handleScroll = (e) => {
		console.log(boxRef.current.getBoundingClientRect().top);

		if (boxRef.current.getBoundingClientRect().top <= 0) {
			if (
				boxRef.current.offsetWidth + boxRef.current.scrollLeft >=
				boxRef.current.scrollWidth
			)
				return;
			console.log('start prevent');
			e.preventDefault();
			e.stopPropagation();

			if (e.deltaY > 0) {
				console.log('Scroll xuống');
				if (radius >= 500) boxRef.current.scrollLeft += 70;
				else setRadius((prev) => (prev += 5));
			}
			if (e.deltaY < 0) {
				console.log('Scroll lên');
				if (boxRef.current.scrollLeft <= 0)
					setRadius((prev) => {
						if (prev - 30 < 0) return 0;
						else return (prev -= 30);
					});
				else {
					if (boxRef.current.scrollLeft - 70 < 0)
						boxRef.current.scrollLeft = 0;
					else boxRef.current.scrollLeft -= 70;
				}
			}
			return false;
		}
	};

	useEffect(() => {
		document.getElementById('box').addEventListener('wheel', handleScroll);
	});

	const { scrollYProgress } = useViewportScroll();

	return (
		<>
			<Box
				id="box"
				display="flex"
				sx={{
					minHeight: 300,
					bgcolor: '#def9f7',
					overflowX: 'scroll',
					transition: '100ms linear',
					height: '70vh',
					...style,
				}}
				ref={boxRef}
			>
				<Box>
					<Box
						height="100%"
						width="100%"
						style={{ backgroundColor: 'white' }}
					>
						<motion.path style={{ pathLength: scrollYProgress }}>
							<Box
								className="circle"
								height="200px"
								width="200px"
								borderRadius="50%"
								marginLeft="50vw"
								marginRight="50vw"
								sx={{
									backgroundColor: 'red',
									boxShadow: `0 0 0 ${radius}px #def9f7`,
								}}
							></Box>
						</motion.path>
					</Box>
				</Box>

				<Box style={{ minWidth: '70vw', paddingTop: '100px' }}>
					<Box width={700} ml={20} display="flex">
						<Box width={400}>
							<Typography
								fontSize={56}
								fontWeight={700}
								mb={4}
								sx={{ color: '#3c4acf' }}
							>
								Bột Ngọt
							</Typography>
							<Typography fontSize={24} mb={3}>
								Không chỉ giúp món ăn ngon hơn và có chức năng
								sinh lý đối với cơ thể người, bột ngọt còn giúp
								giảm muối ăn vào mà vẫn ngon miệng
							</Typography>
							<CButton variant="outlined">Khám phá</CButton>
						</Box>
						<Box width={300}>
							<img src={img1.src} alt="" />
						</Box>
					</Box>
				</Box>
				<Box style={{ minWidth: '70vw', paddingTop: '100px' }}>
					<Box width={700} ml={20} display="flex">
						<Box width={400}>
							<Typography
								fontSize={56}
								fontWeight={700}
								mb={4}
								sx={{ color: '#3c4acf' }}
							>
								Vị Umami
							</Typography>
							<Typography fontSize={24} mb={3}>
								Không chỉ giúp món ăn ngon hơn và có chức năng
								sinh lý đối với cơ thể người, bột ngọt còn giúp
								giảm muối ăn vào mà vẫn ngon miệng
							</Typography>
							<CButton variant="outlined">Khám phá</CButton>
						</Box>
						<Box width={300}>
							<img src={img2.src} alt="" />
						</Box>
					</Box>
				</Box>
				<Box style={{ minWidth: '70vw', paddingTop: '100px' }}>
					<Box width={700} ml={20} display="flex">
						<Box width={400}>
							<Typography
								fontSize={56}
								fontWeight={700}
								mb={4}
								sx={{ color: '#3c4acf' }}
							>
								Glutamate
							</Typography>
							<Typography fontSize={24} mb={3}>
								Không chỉ giúp món ăn ngon hơn và có chức năng
								sinh lý đối với cơ thể người, bột ngọt còn giúp
								giảm muối ăn vào mà vẫn ngon miệng
							</Typography>
							<CButton variant="outlined">Khám phá</CButton>
						</Box>
						<Box width={300}>
							<img src={img3.src} alt="" />
						</Box>
					</Box>
				</Box>
				<Box style={{ minWidth: '70vw', paddingTop: '100px' }}>
					<Box width={700} ml={20} display="flex">
						<Box width={400}>
							<Typography
								fontSize={56}
								fontWeight={700}
								mb={4}
								sx={{ color: '#3c4acf' }}
							>
								Guanylate & Inosinate
							</Typography>
							<Typography fontSize={24} mb={3}>
								Không chỉ giúp món ăn ngon hơn và có chức năng
								sinh lý đối với cơ thể người, bột ngọt còn giúp
								giảm muối ăn vào mà vẫn ngon miệng
							</Typography>
							<CButton variant="outlined">Khám phá</CButton>
						</Box>
						<Box width={300}>
							<img src={img4.src} alt="" />
						</Box>
					</Box>
				</Box>
				<Box style={{ minWidth: '70vw', paddingTop: '100px' }}>
					<Box width={700} ml={20} display="flex">
						<Box width={400}>
							<Typography
								fontSize={56}
								fontWeight={700}
								mb={4}
								sx={{ color: '#3c4acf' }}
							>
								Axit Amin
							</Typography>
							<Typography fontSize={24} mb={3}>
								Không chỉ giúp món ăn ngon hơn và có chức năng
								sinh lý đối với cơ thể người, bột ngọt còn giúp
								giảm muối ăn vào mà vẫn ngon miệng
							</Typography>
							<CButton variant="outlined">Khám phá</CButton>
						</Box>
						<Box width={300}>
							<img src={img5.src} alt="" />
						</Box>
					</Box>
				</Box>
			</Box>
			<Box height={50}>
				<Typography textAlign="center">
					Cuộn chuột để khám phá
				</Typography>
			</Box>
		</>
	);
};

export default Experiment;
