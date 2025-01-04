import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Events from './pages/Events';
import Access from './pages/Access';
import ErrorPage from './pages/ErrorPage';
import Schedule from './pages/Schedule';
import Verble from './pages/Verble';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
	const location = useLocation();
	const validRoutes = [
		'/home',
		'/events',
		'/fest-access',
		'/schedule',
		'/verble',
	];
	const isValidRoute = validRoutes.includes(location.pathname);

	const getCanonicalUrl = () => {
		switch (location.pathname) {
			case '/home':
				return 'https://verba-maximus.netlify.app/home';
			case '/events':
				return 'https://verba-maximus.netlify.app/events';
			case '/schedule':
				return 'https://verba-maximus.netlify.app/schedule';
			case '/fest-access':
				return 'https://verba-maximus.netlify.app/fest-access';
			case '/verble':
				return 'https://verba-maximus.netlify.app/verble';
			default:
				return 'https://verba-maximus.netlify.app';
		}
	};

	const formatTitle = (pathname) => {
		const formattedPath = pathname
			.split('/')
			.filter(Boolean)
			.map((part) => {
				let formattedPart =
					part.charAt(0).toUpperCase() + part.slice(1);
				if (formattedPart === 'Fest-access') {
					formattedPart = 'Fest-Access';
				}
				return formattedPart.replace('-', ' ');
			})
			.join(' - ');
		return formattedPath || 'Page Not Found';
	};

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<link rel='canonical' href={getCanonicalUrl()} />
					<title>
						Verba Maximus -{' '}
						{isValidRoute
							? formatTitle(location.pathname)
							: 'Error'}
					</title>
				</Helmet>
			</HelmetProvider>

			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<Home />} />
				<Route path='/events' element={<Events />} />
				<Route path='/fest-access' element={<Access />} />
				<Route path='/schedule' element={<Schedule />} />
				<Route path='/verble' element={<Verble />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
};

export default App;
