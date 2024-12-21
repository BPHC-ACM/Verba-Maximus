import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Access from './pages/Access';
import ErrorPage from './pages/ErrorPage';
import Schedule from './pages/Schedule';
import Sponsors from './pages/Sponsors';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<Navigate to='/home' />} />
				<Route path='/home' element={<Home />} />
				<Route path='/events' element={<Events />} />
				<Route path='/fest-access' element={<Access />} />
				<Route path='/schedule' element={<Schedule />} />
				<Route path='/sponsors' element={<Sponsors />} />
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</>
	);
}
