import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className='bg-[#404040] h-[200px] mt-[60px]'>
			<div className=' max-w-[1200px] mx-auto flex justify-between items-center h-full'>
				<Link to='/' className='text-[32px] text-white'><strong>shop</strong>cart</Link>

				<div className='text-white flex gap-5'>
					<Link to='/'>About us</Link>
					<Link to='/'>Contact</Link>
					<Link to='/'>Help</Link>
				</div>

				<div className='flex items-center text-white gap-1'>
					<span>English</span>
					<MdOutlineArrowDropDown />
				</div>
			</div>
		</footer>
	)
}

export default Footer
