import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/home');
	};

	useEffect(() => {
		document.title = ' Verba Maximus - Page Not Found';
	}, []);

	return (
		<div className='ERRORPAGE'>
			<img className='heroimage' src='/assets/hero.webp' alt='Hero' />

			<div className='content'>
				<h1 style={{ fontSize: '8rem', marginBottom: '1rem' }}>404</h1>
				<h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>
					Looks like you got lost in the garden!
				</h2>
				<button onClick={goHome} className='button'>
					Go Back Home
				</button>
			</div>
		</div>
	);
};

export default ErrorPage;
