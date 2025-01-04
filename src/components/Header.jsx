import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isMobile = window.innerWidth <= 768;

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className='HEADER'>
			<div className='navbar'>
				{isMobile ? (
					<>
						<div
							className='hamburger glass'
							onClick={toggleMobileMenu}
						>
							<span className='line'></span>
							<span className='line'></span>
							<span className='line'></span>
						</div>
						{isMobileMenuOpen && (
							<div className='mobile-menu glass'>
								<Link to='/home'>Home</Link>
								<Link to='/events'>Events</Link>
								<Link to='/fest-access'>Fest Access</Link>
								<Link to='/schedule'>Schedule</Link>
								<Link to='/verble'>Verble</Link>
							</div>
						)}
					</>
				) : (
					<div className='navbar glass'>
						<Link to='/home'>Home</Link>
						<Link to='/events'>Events</Link>
						<Link to='/fest-access'>Fest Access</Link>
						<Link to='/schedule'>Schedule</Link>
						<Link to='/verble'>Verble</Link>
					</div>
				)}
				<div className='register-container glass'>
					<Link
						to='https://unstop.com/o/xfh3Zyv'
						target='_blank'
						rel='noreferrer'
					>
						Register
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
