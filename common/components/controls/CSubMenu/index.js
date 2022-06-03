import { Button, Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const StyledMenu = styled(Menu)(() => ({
	'& .MuiList-root': {
		padding: '13px 19px 19px',
		minWidth: '180px',
		'& .MuiMenuItem-root': {
			fontSize: 16,
			lineHeight: 1.7,
			padding: '10px 20px',
		},
	},
}));

const CSubMenu = ({ menuList, ...props }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Button {...props} onClick={handleClick} onMouseOver={handleClick}>
				Pages
			</Button>
			<StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
				{menuList?.length > 0 &&
					menuList.map((mItem, index) => (
						<MenuItem key={index} onClick={handleClose}>
							<Link href={mItem.link} passHref>
								{mItem.title}
							</Link>
						</MenuItem>
					))}
			</StyledMenu>
		</>
	);
};

export default CSubMenu;
CSubMenu.propTypes = {
	menuList: PropTypes.array,
};
