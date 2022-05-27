import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/LOGO.svg';

const Logo = () => {
	return (
		<div
			style={{
				position: 'relative',
				height: '56px',
				display: 'flex',
				alignItems: 'center',
				marginRight: 'auto',
				maxWidth: '260px',
				minWidth: '200px',
			}}
		>
			<Image src={logo.src} alt="logo-image" layout="fill" />
		</div>
	);
};

export default Logo;
