/* eslint-disable react/no-unescaped-entities */
import { Container, Grid, Box, Typography } from '@mui/material';
import questionImg from '@/assets/images/Home_question.jpg';
import Image from 'next/image';
import AccordionList from './AccordionList';

const data = [
	{
		id: 1,
		title: 'What is mental health?',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		id: 2,
		title: "What do I do if the support doesn't help?",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		id: 3,
		title: 'Can you prevent mental health problems?',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		id: 4,
		title: 'What are the 7 components of mental health?',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
	{
		id: 5,
		title: 'Are there cures for mental health problems?',
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
];

const Questions = () => {
	return (
		<section>
			<Container maxWidth="xl" disableGutters>
				<Grid container>
					<Grid item xl={6}>
						<Container>
							<Box
								position="relative"
								display="block"
								height={740}
								sx={{ aspectRatio: 642 / 720 }}
							>
								<Image
									src={questionImg.src}
									alt="image"
									layout="fill"
								/>
							</Box>
						</Container>
					</Grid>
					<Grid item xl={6}>
						<Container className="h100">
							<Box
								height="100%"
								display="flex"
								flexDirection="column"
								justifyContent="center"
							>
								<Typography
									variant="h2"
									color="secondary"
									mb={5}
								>
									The most popular questions to discuss mental
									health
								</Typography>
								<AccordionList list={data} />
							</Box>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</section>
	);
};

export default Questions;
