import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const Main = () => {
	return (
		<>
			<div className='px-4 max-w-[1440px] mx-auto'>
				<Navbar />
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default Main
