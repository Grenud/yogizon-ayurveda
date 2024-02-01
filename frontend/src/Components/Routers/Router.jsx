import React from 'react'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'

import StickyNavbar from '../Navbar/Navbar'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Error404 from '../Error/Error404'

function Router() {
	return (
		<div>
			<StickyNavbar />
			<Dashboard />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</div>
	)
}

export default Router