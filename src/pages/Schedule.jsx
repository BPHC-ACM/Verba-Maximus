import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Schedule = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Schedule';
	}, []);

	return (
		<div className='Schedule'>
			<Header />
			<div className='heading'>
				<h1>Schedule</h1>
			</div>
			<div className='coming-soon'>Coming Soon</div> {/* Temporary */}
			<Footer />
		</div>
	);
};

export default Schedule;
