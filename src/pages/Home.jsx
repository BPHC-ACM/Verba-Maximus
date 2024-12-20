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
		</div>
	);
};

export default Home;
