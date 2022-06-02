import { Box, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
	const router = useRouter();

	const handleActive = (route) => {
		if (router.pathname.includes(route)) {
			return true;
		}
		return false;
	};

	return (
		<Box>
			<Stack flexDirection="row">
				<Link href="/" passHref>
					<Button
						sx={{ padding: '14px 40px' }}
						color={handleActive('') ? 'active' : 'secondary'}
					>
						Home
					</Button>
				</Link>

				<Link href="/pages" passHref>
					<Button
						sx={{ padding: '14px 40px' }}
						color={handleActive('pages') ? 'active' : 'secondary'}
					>
						Pages
					</Button>
				</Link>
				<Link href="/about" passHref>
					<Button
						sx={{ padding: '14px 40px' }}
						color={handleActive('about') ? 'active' : 'secondary'}
					>
						About
					</Button>
				</Link>

				<Link href="/program" passHref>
					<Button
						sx={{ padding: '14px 40px' }}
						color={handleActive('program') ? 'active' : 'secondary'}
					>
						Program
					</Button>
				</Link>

				<Link href="/contact" passHref>
					<Button
						sx={{ padding: '14px 40px' }}
						color={handleActive('contact') ? 'active' : 'secondary'}
					>
						Contact
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};

export default Navigation;
