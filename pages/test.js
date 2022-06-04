import { Box, styled } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import coreImg from '@/assets/images/test.png';
import Image from 'next/image';

const StyledBox = styled(Box)(() => ({
	'&.pin': {
		position: 'sticky',
		top: 0,
	},
}));

const Test = () => {
	const boxRef = useRef();
	const scrollRef = useRef();
	const [radius, setRadius] = useState(1);

	const handleScroll = (e) => {
		const MAX =
			scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
		if (e.deltaY > 0) {
			if (boxRef.current.getBoundingClientRect().top <= 0) {
				if (!boxRef.current.className.includes('pin'))
					boxRef.current.classList.add('pin');

				if (boxRef.current.className.includes('pin')) {
					if (
						!(
							scrollRef.current.scrollLeft +
								scrollRef.current.clientWidth ===
							scrollRef.current.scrollWidth
						)
					) {
						e.preventDefault();
						e.stopPropagation();
						if (radius >= 800) {
							scrollRef.current.scrollLeft += 40;
							if (scrollRef.current.scrollLeft > MAX)
								scrollRef.current.scrollLeft = MAX;
						} else {
							setRadius((prev) => {
								if (++prev > 800) return 800;
								else return ++prev;
							});
						}
					} else {
						boxRef.current.classList.remove('pin');
					}
				}
			}
		}
		if (e.deltaY < 0) {
			if (boxRef.current.getBoundingClientRect().top >= 112) {
				if (!boxRef.current.className.includes('pin'))
					boxRef.current.classList.add('pin');

				if (boxRef.current.className.includes('pin')) {
					if (scrollRef.current.scrollLeft !== 0) {
						e.preventDefault();
						e.stopPropagation();
						if (radius >= 700) {
							scrollRef.current.scrollLeft -= 40;
							if (scrollRef.current.scrollLeft < 0)
								scrollRef.current.scrollLeft = 0;
						} else {
							setRadius((prev) => --prev);
						}
					} else {
						// boxRef.current.classList.remove('pin');
					}
				}
			}
		}
	};

	console.log(radius);
	useEffect(() => {
		window.addEventListener('wheel', handleScroll, { passive: false });
	});

	return (
		<div style={{ height: '300vh' }}>
			<StyledBox
				height={800}
				ref={boxRef}
				sx={{ backgroundColor: 'yellow' }}
			>
				<Box
					display="flex"
					height="100%"
					sx={{ overflowX: 'scroll' }}
					ref={scrollRef}
				>
					<Box minWidth="90vw">
						<Box
							position="relative"
							top="50%"
							left="50%"
							height={300}
							style={{
								transform: 'translate(-50%,-50%)',
								aspectRatio: 1 / 1,
								boxShadow: `0 0 0 ${radius}px cyan`,
								borderRadius: '50%',
							}}
						>
							<Image
								src={coreImg.src}
								alt="image"
								layout="fill"
							/>
						</Box>
					</Box>

					<Box
						height="100%"
						minWidth={7000}
						sx={{ backgroundColor: 'cyan' }}
					>
						a
					</Box>
				</Box>
			</StyledBox>

			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy
				text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has
				survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was
				popularised in the 1960s with the release of Letraset sheets
				containing Lorem Ipsum passages, and more recently with desktop
				publishing software like Aldus PageMaker including versions of
				Lorem Ipsum.
			</p>
		</div>
	);
};

export default Test;
