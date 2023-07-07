import React from 'react'
import star from '../../assets/icons/Vector.svg'

const ReviewCard = ({ data }) => {
	const { product_name, product_img, product_price } = data
	return (
		<div className='flex items-center gap-[10px] p-4 rounded-2xl border border-2'>
			<img src={product_img} alt='' className='' />
			<div>
				<h2 className='text-[24px] font-bold'>{product_name}</h2>
				<p className='mt-5'>you bought it at the best price</p>
				<h2 className='text-[24px] font-bold'>₹ {product_price}</h2>
				<div className='flex mt-5 items-center justify-between'>

					<div className='flex gap-2'>
						{[1, 2, 3, 4, 5].map((item, index) => <img src={star} alt='' className='' />)}
					</div>
					<div className='text-primary'>0 ratings</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewCard
