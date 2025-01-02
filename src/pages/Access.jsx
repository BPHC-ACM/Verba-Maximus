import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const passes = [
	{
		name: 'Events Only',
		price: '₹400',
		description:
			'The Events Pass gives the ticket holder access to the 18 literary events planned across the two days of the fest.',
	},
	{
		name: 'Events + Accommodation',
		price: '₹700',
		description:
			'The Events + Accommodation Pass allows access to all events, along with overnight accommodation at the BITS Pilani, Hyderabad Campus.',
	},
	{
		name: 'Events + Pro Show',
		price: '₹800',
		description:
			'The Events + Pro Show Pass allows access to all events, along with access to the VM Comedy Night at the BITS Auditorium.',
	},
	{
		name: '✨ Mega ✨',
		price: '₹900',
		description:
			"The VM '25 Mega Pass allows the ticket holder to experience everything that VM has to offer, with access to all events, accommodation, and entry into the Comedy Night.",
	},
];

const FestAccessPage = () => {
	return (
		<div className='fest-access'>
			<Header />
			<div className='heading'>
				<h1 id='mainheadingev'>Fest Access</h1>
			</div>
			<h1 className='fest-title'>Choose Your Pass</h1>
			<Link className='pass-container' to='https://unstop.com/o/xfh3Zyv'>
				{passes.map((pass, index) => (
					<div className='pass-card' key={index}>
						<h2>{pass.name}</h2>
						<p className='price'>{pass.price}</p>
						<p>{pass.description}</p>
					</div>
				))}
			</Link>
			<Footer />
		</div>
	);
};

export default FestAccessPage;
