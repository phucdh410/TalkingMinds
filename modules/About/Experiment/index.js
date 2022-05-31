import { Box } from '@mui/material';
import img from '@/assets/images/test.png';
import { useEffect, useRef, useState } from 'react';

const MIN = 50;
const MAX = 400;

const Experiment = () => {
	const boxRef = useRef();
	const [radius, setRadius] = useState(50);
	const [currentY, setCurrentY] = useState(0);

	function preventScroll(e) {
		e.preventDefault();
		e.stopPropagation();

		if (e.deltaY > 0) {
			console.log('Scroll xuống');
			setRadius((prev) => ++prev);
		}

		if (e.deltaY < 0) {
			console.log('Scroll lên');
			setRadius((prev) => --prev);
		}
		return false;
	}

	const setDefaultY = () => {
		setCurrentY(boxRef.current.getBoundingClientRect().y);
	};

	useEffect(() => {
		if (boxRef?.current) setDefaultY();
	}, []);

	useEffect(() => {
		document
			.querySelector('#scrollable')
			.addEventListener('wheel', preventScroll, { passive: false });
		return () => {};
	});

	return (
		<Box
			id="scrollable"
			ref={boxRef}
			sx={{
				ml: '300px',
				backgroundColor: 'red',
				height: 300,
				width: 300,
				borderRadius: '50%',
				transition: '100ms linear',
				boxShadow: `0px 0px 0px ${radius}px black`,
			}}
		>
			<Box
				height={100}
				width={100}
				position="relative"
				top="50%"
				left="50%"
				sx={{ transform: 'translate(-50%,-50%)' }}
			>
				<img src={img.src} alt="" />
			</Box>
		</Box>
	);
};

export default Experiment;
