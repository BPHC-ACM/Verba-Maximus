import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='HEADER'>
			<div className='navbar glass'>
				<Link to='/home'>Home</Link>
				<Link to='/events'>Events</Link>
				<Link to='/fest-access'>Fest Access</Link>
				<Link to='/schedule'>Schedule</Link>
			</div>
			<div className='navbar glass'>
				<Link to='/schedule'>Register</Link>
			</div>
		</div>
	);
};

export default Header;
