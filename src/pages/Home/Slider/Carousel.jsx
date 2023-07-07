import React, { useState, useEffect } from 'react';
import carousel1 from '../../../assets/images/carousel-1.png'
import carousel2 from '../../../assets/images/carousel-2.png'
import carousel3 from '../../../assets/images/carousel-3.png'

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const images = [
		carousel1,
		carousel2,
		carousel3
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [images.length]);

	return (
		<div className="relative w-full h-[600px] mt-[60px]">
			{images.map((image, index) => (
				<img
					key={index}
					src={image}
					alt={`Image ${index}`}
					className={`absolute top-0 left-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out w-full h-full`}
				/>
			))}
		</div>
	);
};

export default Carousel;
