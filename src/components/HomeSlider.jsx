import React from 'react';
import Slider from 'react-slick';

function HomeSlider() {
	const totalImages = 7;

	const settings = {
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
