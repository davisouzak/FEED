import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Feed from './views/feed'

interface RoutesProps {}

export const Rotas: React.FC<RoutesProps> = () => {
	return (
		<>
			<Routes>
				<Route path="/pokemon">
					element={<h1>Pokemon</h1>} 
				</Route>
				<Route path="/">
					element=
					{<Feed />}
				</Route>
			</Routes>
		</>
	)
}

export default Rotas
