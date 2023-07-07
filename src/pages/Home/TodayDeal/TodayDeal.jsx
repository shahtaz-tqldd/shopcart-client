import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/Cards/ProductCard';
import axios from 'axios';

const TodayDeal = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://api.hiring.masterkey.tech/api/v1/products', {
					params: {
						product_type: "Today’s hot deals"
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
			<h2 className='text-[24px] font-bold mb-5'>Today's hot deals</h2>
			<div className='custom-border mb-5'></div>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5'>
				{
					products?.map((product, index) => <ProductCard key={index} data={product} />)
				}
			</div>
		</section>
	)
}

export default TodayDeal