import {
	FacebookOutlined,
	Instagram,
	KeyboardArrowUp,
	LinkedIn,
	Twitter,
} from '@mui/icons-material';
import {
	Box,
	Button,
	Container,
	Divider,
	Grid,
	IconButton,
	styled,
	Typography,
} from '@mui/material';
import footerLogo from '@/assets/images/footerLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

const FooterBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
}));

const FooterButton = styled(Button)(() => ({
	fontSize: 20,
	fontWeight: 700,
	padding: 0,
}));

const StyledDivider = styled(Divider)(() => ({
	height: 1,
	backgroundColor: '#fff',
	border: 0,
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
	marginLeft: '30px',
	backgroundColor: theme.palette.warning.main,
	color: '#fff',
	'&:hover': {
		backgroundColor: theme.palette.warning.main,
		color: '#fff',
	},
	'& svg': {
		fontSize: 22,
		height: 22,
		width: 22,
	},
}));

const CopyrightText = styled(Typography)(() => ({
	fontSize: 16,
	color: '#fff',
}));

const GotopButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#fff',
	color: theme.palette.warning.main,
	minWidth: 'unset',
	borderRadius: '50%',
	'&:hover': {
		backgroundColor: '#fff',
		color: theme.palette.warning.main,
	},
}));

const Footer = () => {
	return (
		<FooterBox>
			<Box pt={3}>
				<Container maxWidth="xl">
					<Grid container pt={9} pb={10} className="al-center">
						<Grid item xl={2}>
							<Box position="relative" height={37}>
								<Image
									src={footerLogo.src}
									alt="image"
									layout="fill"
								/>
							</Box>
						</Grid>
						<Grid item xl={7}>
							<Box
								component="ul"
								width="60%"
								mx="auto"
								display="flex"
								justifyContent="space-between"
							>
								<Link href="#">
									<FooterButton color="white">
										Home
									</FooterButton>
								</Link>
								<Link href="#">
									<FooterButton color="white">
										About
									</FooterButton>
								</Link>
								<Link href="#">
									<FooterButton color="white">
										Program
									</FooterButton>
								</Link>
								<Link href="#">
									<FooterButton color="white">
										Blog
									</FooterButton>
								</Link>
								<Link href="#">
									<FooterButton color="white">
										Contract
									</FooterButton>
								</Link>
							</Box>
						</Grid>
						<Grid item xl={3}>
							<Box display="flex" justifyContent="flex-end">
								<SocialButton href="https://facebook.com">
									<FacebookOutlined />
								</SocialButton>
								<SocialButton href="https://linkedin.com">
									<LinkedIn />
								</SocialButton>
								<SocialButton href="https://twitter.com">
									<Twitter />
								</SocialButton>
								<SocialButton href="https://instagram.com">
									<Instagram />
								</SocialButton>
							</Box>
						</Grid>
					</Grid>
					<StyledDivider />
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						py={4}
					>
						<CopyrightText>
							@ 2022 All rights reserved by Đặng Hoàng Phúc
						</CopyrightText>
						<GotopButton href="#">
							<KeyboardArrowUp />
						</GotopButton>
					</Box>
				</Container>
			</Box>
		</FooterBox>
	);
};

export default Footer;
