import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { CButton } from '~/common/components/controls';
import img1 from '@/assets/images/test.jpg';
import img2 from '@/assets/images/test2.jpg';
import img3 from '@/assets/images/test3.jpg';
import img4 from '@/assets/images/test4.jpg';
import img5 from '@/assets/images/test5.jpg';

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

	const handleScroll = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.deltaY > 0) {
			console.log('Scroll xuống');
			boxRef.current.scrollLeft += 30;
		}
		if (e.deltaY < 0) {
			console.log('Scroll lên');
			boxRef.current.scrollLeft -= 30;
		}
		return false;
	};

	useEffect(() => {
		document.getElementById('box').addEventListener('wheel', handleScroll);
	});

	return (
		<>
			<Box
				id="box"
				display="flex"
				sx={{
					paddingTop: '100px',
					minHeight: 300,
					bgcolor: '#def9f7',
					overflowX: 'scroll',
					transition: '100ms linear',
					borderTop: '1px solid black',
					...style,
				}}
				ref={boxRef}
			>
				<Box style={{ minWidth: '70vw' }}>
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
							<Typography fontSize={24} mb={3} mb={3}>
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
				<Box style={{ minWidth: '70vw' }}>
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
				<Box style={{ minWidth: '70vw' }}>
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
				<Box style={{ minWidth: '70vw' }}>
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
				<Box style={{ minWidth: '70vw' }}>
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
			<Box height={50} bgcolor="#def9f7">
				<Typography textAlign="center">
					Cuộn chuột để khám phá
				</Typography>
			</Box>
		</>
	);
};

export default Experiment;
