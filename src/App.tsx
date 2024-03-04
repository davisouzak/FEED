import Feed from './views/feed'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Rotas } from './routes'

export default function App() {
	return (
		<>
		<Router>
			<Rotas />
		</Router>
		</>
	)
}
