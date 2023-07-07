import React from 'react'
import Hero from './Hero/Hero'
import Carousel from './Slider/Carousel'
import TodayDeal from './TodayDeal/TodayDeal'
import SearchedProducts from './SearchedProducts/SearchedProduct'
import Feature from './Feature/Feature'
import DealsFurniture from './DealsOnFurniture/DealsFurniture'
import Review from './Review/Review'

const Home = () => {
	return (
		<div>
			<Hero />
			<Carousel />
			<TodayDeal />
			<SearchedProducts />
			<Feature />
			<DealsFurniture />
			<Review />
		</div>
	)
}

export default Home
