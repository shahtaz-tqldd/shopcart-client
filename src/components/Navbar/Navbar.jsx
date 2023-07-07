import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidUserCircle } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'

const Navbar = () => {
	const location = 'Dhaka, 1212';
	const lists = [
		'Fresh',
		'Today’s Deals',
		'Mobiles',
		'Gift Cards',
		'Women Clothing',
		'Men Clothing',
		'Kids Clothing',
		'Health',
		'Pet corner',
		'Books',
		'Beauty',
		'Kitchen',
		'Bed Room',
		'Sport',
		'Bags'
	]
	return (
		<div>
			<div className='flex justify-between'>
				<Link to='/' className='text-[32px]'><strong>shop</strong>cart</Link>
				<button className='flex items-center gap-1'>
					<BiSolidUserCircle className='text-[24px]' />
					<span>Sign in</span>
				</button>
			</div>

			<hr className='my-5' />

			<div className='flex justify-between items-center'>
				<button className='flex items-center gap-1 bg-[#FFAE5D] rounded-[20px] p-4'>
					<GrLocation className='text-[24px]' />
					{location}
				</button>
				<form>
					<input type='text' placeholder='Search' className='p-4 rounded-[20px] border border-1 border-[#99999] w-[600px]' />
				</form>
			</div>

			<div className='flex justify-between gap-2 flex-wrap mt-5'>
				{
					lists.map((list, index) => <button key={index} className='text-[#606060] hover:text-[#FFAE5D]'>{list}</button>)
				}
			</div>
		</div>
	)
}

export default Navbar
