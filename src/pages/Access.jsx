import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Access = () => {
	return (
		<div className='ACCESS'>
			<Header />
			<div className='heading'>
				<h1>Fest Access</h1>
			</div>
			<div className='coming-soon'>Coming Soon</div> {/* Temporary */}
			<Footer />
		</div>
	);
};

export default Access;
