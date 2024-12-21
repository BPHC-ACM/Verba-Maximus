import React, { useEffect } from 'react';
import Header from '../components/Header';

const Events = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Events';
	}, []);

	return (
		<div className='EVENTS'>
			<Header />
			<div className='heading'>
				<h1>Events</h1>
			</div>
		</div>
	);
};

export default Events;
