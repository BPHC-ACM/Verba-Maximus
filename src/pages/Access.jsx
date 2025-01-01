import React, { useEffect } from 'react';
import Header from '../components/Header';

const Access = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Fest Access';
	}, []);

	return (
		<div className='ACCESS'>
			<Header />
			<div className='heading'>
				<h1>Fest Access</h1>
			</div>
			<div className='coming-soon'>Coming Soon</div> {/* Temporary */}
		</div>
	);
};

export default Access;
