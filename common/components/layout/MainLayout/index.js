import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;

MainLayout.propTypes = {
	children: PropTypes.node,
};
