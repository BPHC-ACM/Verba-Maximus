import React, { useEffect } from 'react';
import Header from '../components/Header';

const Access = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Access';
	}, []);

	return (
		<div className='ACCESS'>
			<Header />
			<div className='heading'>
				<h1>Fest Access</h1>
			</div>
		</div>
	);
};

export default Access;
