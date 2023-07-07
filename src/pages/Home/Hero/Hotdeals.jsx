import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../../../components/Cards/ProductCard';

const Hotdeals = () => {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('https://api.hiring.masterkey.tech/api/v1/products', {
					params: {
						product_type: "hot deals for you"
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
		<div className='grid lg:grid-cols-3 gap-4 mt-5'>
			{
				products?.map((product, index) => <ProductCard key={index} data={product} />)
			}
		</div>
	)
}

export default Hotdeals