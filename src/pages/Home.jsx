import React, { useEffect } from 'react';
import Header from '../components/Header';

const Home = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Home';
	}, []);

	return (
		<div className='HOME'>
			<img src='/assets/hero.png' />
			<Header />
			<div className='hero'>
				<h1>Verba Maximus</h1>
				<h2>echoes of eden</h2>
			</div>
			<div className='introduction'>
				<h1>Echoes of Eden</h1>
				<p>
					Verba Maximus is BITS Pilani, Hyderabad Campus’ annual
					literary fest, organized by the passionate minds of the
					English Language Activities Society (ELAS). Since its
					inception in 2012, the fest has brought together a myriad of
					events, competitions, and performances — pitting the
					sharpest literary minds against each other.
				</p>
				<p>
					With captivating acts from renowned artists and an
					atmosphere brimming with creativity and excitement, Verba
					Maximus promises an unforgettable experience. This January,
					we return with our thirteenth edition and invite you to step
					into our world and witness the magic unfold.
				</p>
			</div>
		</div>
	);
};

export default Home;
