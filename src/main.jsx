import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>
);
