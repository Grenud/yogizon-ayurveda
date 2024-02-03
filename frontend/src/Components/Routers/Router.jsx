import React from 'react'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import Error404 from '../Error/Error404'
import Register from '../Register/Register'

import Philosophy from '../AboutUs/Philosophy'

function Router() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error404 />} />
				<Route path='/register' element={<Register />} />

				{/* About Us */}
				<Route path='/philosophy' element={<Philosophy />} />
			</Routes>
		</div>
	)
}

export default Router