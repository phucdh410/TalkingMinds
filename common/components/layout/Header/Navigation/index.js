import { Box, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSubMenu } from '~/common/components/controls';

//#region data
const menuList = [
	{ id: 1, title: 'Landing page', link: '/test' },
	{ id: 2, title: 'Call to action', link: '#' },
	{ id: 3, title: 'Service', link: '#' },
	{ id: 4, title: 'Pricing', link: '#' },
	{ id: 5, title: 'Gallery', link: '#' },
	{ id: 6, title: 'Team', link: '#' },
	{ id: 7, title: 'Blog single', link: '#' },
	{ id: 8, title: 'Blog index', link: '#' },
	{ id: 9, title: 'System page', link: '#' },
];
//#endregion

const Navigation = () => {
	const router = useRouter();

	const handleActive = (route) => {
		if (router.pathname === '/' && route === '') return true;
		else if (router.pathname.includes(route) && route !== '') {
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

				<CSubMenu
					menuList={menuList}
					sx={{ padding: '14px 40px' }}
					color={handleActive('pages') ? 'active' : 'secondary'}
				/>

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
