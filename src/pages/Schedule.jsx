import React, { useEffect } from 'react';
import Header from '../components/Header';

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
		</div>
	);
};

export default Schedule;
