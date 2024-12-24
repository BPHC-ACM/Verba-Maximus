import React from 'react';
import Slider from 'react-slick';

function HomeSlider() {
	const images = [
		'/assets/gallery/image-1.webp',
		'/assets/gallery/image-2.webp',
		'/assets/gallery/image-3.webp',
		'/assets/gallery/image-4.webp',
		'/assets/gallery/image-5.webp',
		'/assets/gallery/image-6.webp',
		'/assets/gallery/image-7.webp',
	];

	const settings = {
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 4000,
		pauseOnHover: true,
	};
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{images.map((image, index) => {
					return (
						<div key={index} className='slide'>
							<img src={image} />
						</div>
					);
				})}
			</Slider>
		</div>
	);
}

export default HomeSlider;
