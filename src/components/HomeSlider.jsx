import React from 'react';
import Slider from 'react-slick';

function HomeSlider() {
	const totalImages = 8;
	const isMobile = window.innerWidth <= 768;

	const settings = {
		slidesToShow: isMobile ? 1 : 2,
		slidesToScroll: 1,
		centerMode: true,
		infinite: true,
		autoplay: true,
		speed: 1000,
		rows: isMobile ? 2 : 1,
		autoplaySpeed: 4000,
		arrows: !isMobile,
		pauseOnHover: true,
	};
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{Array.from({ length: totalImages }).map((_, index) => (
					<div key={index} className='slide'>
						<img
							src={`/assets/gallery/image-${index + 1}.webp`}
							alt={`carousel image ${index + 1}`}
							loading='lazy'
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default HomeSlider;
