import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<footer>Footer</footer>
		</div>
	);
};

export default MainLayout;

MainLayout.propTypes = {
	children: PropTypes.node,
};
