import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const buttonVariants = {
	// visible: {
	// 	x: [20, -20, 20, -20, 20, 40, 20],
	// 	y: [60, 70, 80, 90, 100, 70, 60],
	// 	transition: { deplay: 2 },
	// },
	hover: {
		scale: 1.1,
		x: 50,
		y: [30, 0, -30],
		textShadow: '0 0 30px rgb(255,255,255)',
		boxShadow: '0 0 30px 5px rgb(255,255,255)',
		transition: {
			duration: 0.5,
			yoyo: Infinity,
		},
	},
};

const styles = {
	button: {
		fontFamily: 'Open Sans',
		padding: '12px 30px',
		fontSize: '40px',
		fontWeight: 700,
		borderRadius: '30px',
		border: '1px solid black',
	},
};

const Sample = () => {
	return (
		<div
			style={{
				height: '100vh',
				backgroundImage:
					'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
			}}
		>
			<div style={{ marginLeft: '300px', maxWidth: '600px' }}>
				<Button
					component={motion.button}
					variants={buttonVariants}
					whileHover="hover"
					variant="contained"
					sx={styles.button}
				>
					NEW BUTTON
				</Button>
			</div>
		</div>
	);
};

export default Sample;
