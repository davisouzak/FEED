import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Feed from './views/feed'
import { PokemonDetails } from './componentes/pokemon/services/PokemonDetails'
import FavoriteScreen from './favorites/FavoriteScreen'

interface RoutesProps {}

export const Rotas: React.FC<RoutesProps> = () => {
	return (
		<>
			<Routes>
				<Route
					path='/pokemon/:name'
					element={<PokemonDetails />}
				/>

				<Route
					path='/favoritos'
					element={<FavoriteScreen />}
				/>

				<Route
					path='/'
					element={<Feed />}
				/>
			</Routes>
		</>
	)
}

export default Rotas
