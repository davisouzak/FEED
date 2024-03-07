import React from 'react'
import { BrowserRouter ,  Routes, Route } from 'react-router-dom'
import Feed from './views/feed'
import { PokemonDetails } from './componentes/pokemon/services/PokemonDetails'
import FavoriteScreen from './favorites/FavoriteScreen'

interface RoutesProps {}

export const Rotas: React.FC<RoutesProps> = () => {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	)
}

export default Rotas
