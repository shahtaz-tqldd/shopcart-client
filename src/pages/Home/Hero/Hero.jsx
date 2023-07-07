import React from 'react'
import Hotdeals from './Hotdeals'

const Hero = () => {
	return (
		<section className='flex mt-[60px] items-center'>
			<div className='lg:w-[40%]'>
				<h1 className='text-[96px] leading-[100px]'>
					We picked some <span className='text-primary font-bold'>cool things</span> for you!
				</h1>
			</div>

			<div className='lg:w-[60%]'>
				<h2 className='text-[24px] font-bold'>hot deals for you</h2>
				<div className='custom-border my-5'></div>
				<Hotdeals />
			</div>

		</section>
	)
}

export default Hero
