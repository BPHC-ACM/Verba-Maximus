import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import { Carousel } from '@mantine/carousel';
import { IconPhoto, IconArrowRight } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import '@mantine/carousel/styles.css';

const images = [
	'/assets/gallery/image-1.webp',
	'/assets/gallery/image-2.webp',
	'/assets/gallery/image-3.webp',
	'/assets/gallery/image-4.webp',
	'/assets/gallery/image-5.webp',
	'/assets/gallery/image-6.webp',
	'/assets/gallery/image-7.webp',
];

function ImageCarousel() {
	return (
		<Carousel slideSize='60%' slideGap='md' loop>
			{images.map((src, index) => (
				<Carousel.Slide key={index}>
					<img
						src={src}
						alt={`Gallery Image ${index + 1}`}
						loading='lazy'
						style={{
							width: '80%',
							objectFit: 'cover',
						}}
					/>
				</Carousel.Slide>
			))}
		</Carousel>
	);
}

const Home = () => {
	useEffect(() => {
		document.title = 'Verba Maximus - Home';
	}, []);

	return (
		<div className='HOME'>
			<img className='heroimage' src='/assets/hero.png' />
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
			</div>
			<div className='gallery'>
				<h1>Gallery</h1>
				<ImageCarousel />
				<Button
					component='a'
					href='https://drive.google.com/drive/folders/1Xukam2vUZau7mOIDwtMCVEnDofb2wNop'
					target='_blank'
					rel='noopener noreferrer'
					leftSection={<IconPhoto size={14} />}
					rightSection={<IconArrowRight size={14} />}
				>
					View more
				</Button>
			</div>
		</div>
	);
};

export default Home;
