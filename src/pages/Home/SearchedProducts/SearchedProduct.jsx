import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SearchedProducts = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://api.hiring.masterkey.tech/api/v1/products', {
					params: {
						product_type: "Your searched items"
					}
				});
				setProducts(response.data.products[0].productData);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

		fetchProducts();
	}, []);
	return (
		<section className='mt-[60px]'>
			<h2 className='text-[24px] font-bold mb-5'>Your Searched Products</h2>
			<div className='custom-border'></div>
			<div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5 mt-5'>
				{
					products?.map(({product_img}, index) => (
						<div key={index} className='p-5 hover:shadow-xl rounded-xl'>
							<img src={product_img} alt="" className='' />
						</div>
					))
				}
			</div>
		</section>
	)
}

export default SearchedProducts
