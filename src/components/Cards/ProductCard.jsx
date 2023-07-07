import React from 'react'

const ProductCard = ({data}) => {
	const {product_name, product_img, product_price, product_discount} = data
	console.log(data)
	return (
		<div className='p-5 border border-2 border-[#fff] hover:border-[#ccc] rounded-2xl transition duration-500'>
			<img src={product_img} alt="" className='mb-3' />
			<h2 className='font-bold text-[16px]'>{product_name}</h2>
			<div className='flex justify-between mt-2'>
				<span>₹{product_price}</span>
				<span className='text-[#FF3232]'> -{product_discount}% off</span>
			</div>
		</div>
	)
}

export default ProductCard