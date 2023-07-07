import React from 'react'
import appleIpad from '../../../assets/images/appleip.png'
import iphone14 from '../../../assets/images/iphone.png'
import ReviewCard from '../../../components/Cards/ReviewCard'

const Review = () => {
	const reviews = [
		{
			'product_name': '2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi, 128GB)',
			'product_img': appleIpad,
			'product_price': '99, 900.00'
		},
		{
			'product_name': 'iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)',
			'product_img': iphone14,
			'product_price': '1,39,900.00'
		}
	]
	return (
		<section className='mt-[60px]'>
			<h2 className='text-[24px] font-bold mb-5'>Review your purchase</h2>
			<div className='custom-border'></div>
			<div className='mt-5 grid lg:grid-cols-2 grid-cols-1 gap-5'>
				{
					reviews?.map((review, index) => <ReviewCard key={index} data={review} />)
				}
			</div>
		</section>
	)
}

export default Review
