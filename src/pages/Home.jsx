import React, { useEffect } from 'react';
import Header from '../components/Header';
import HomeEvents from '../components/HomeEvents';
import HomeSlider from '../components/HomeSlider';
import { Box, Button } from '@mui/material';
import {
	IconPhoto,
	IconArrowRight,
	IconMicrophone2,
} from '@tabler/icons-react';

const Home = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Home';
	}, []);

	return (
		<div className='HOME'>
			<img className='heroimage' src='/assets/hero.png' alt='Hero' />
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
			<div className='events'>
				<h1>Events</h1>
				<HomeEvents />
				<Button
					variant='contained'
					color='warning'
					href='/events'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '0.5rem 1rem',
						marginTop: '4rem',
						textTransform: 'none',
						gap: '0.5rem',
					}}
				>
					<Box display='flex' alignItems='center' gap='0.5rem'>
						<IconMicrophone2 size={14} />
						View all events
					</Box>
					<IconArrowRight size={14} />
				</Button>
			</div>
			<div className='gallery'>
				<h1>Gallery</h1>
				<HomeSlider />
				<Button
					variant='contained'
					color='success'
					href='https://drive.google.com/drive/folders/1Xukam2vUZau7mOIDwtMCVEnDofb2wNop'
					target='_blank'
					rel='noopener noreferrer'
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: '0.5rem 1rem',
						marginTop: '4rem',
						textTransform: 'none',
						gap: '0.5rem',
					}}
				>
					<Box display='flex' alignItems='center' gap='0.5rem'>
						<IconPhoto size={14} />
						View more
					</Box>
					<IconArrowRight size={14} />
				</Button>
			</div>
		</div>
	);
};

export default Home;
