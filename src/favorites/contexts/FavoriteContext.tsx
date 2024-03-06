import React, { useState } from 'react'
import { PokemonDetail } from '../../componentes/pokemon/services/interfaces/PokemonDetail'

interface FavoriteContextProps {
	favorites: PokemonDetail[]
	setFavorites: React.Dispatch<React.SetStateAction<PokemonDetail[]>>
}

type IProps = {
	children: React.ReactNode
}

const INITAL_FAVORITES_VALUE: PokemonDetail[] = []

export const FavoriteContext = React.createContext<FavoriteContextProps>({
	favorites: [],
	setFavorites: () => console.warn(`setFavorites is not ready`),
})

export const FavoriteProvider = ({ children }: IProps) => {
	const [favorites, setFavorites] = useState<PokemonDetail[]>(
		INITAL_FAVORITES_VALUE
	)
	return (
		<FavoriteContext.Provider
			value={{
				favorites,
				setFavorites,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	)
}
