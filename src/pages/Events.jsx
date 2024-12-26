import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
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
			<Footer/>
		</div>
	);
};

export default Events;
