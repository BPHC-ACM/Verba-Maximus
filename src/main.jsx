console.log(
	'%cDeveloped by:\n----------------\nAravind Sathesh\nDevansh Agarwal\nRitesh Udgata\n----------------\nACM x Verba Maximus',
	'color:rgb(69, 177, 255); font-family: courier new; font-size: 14px;'
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
