import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Card,
	CardTitle,
	CardActions,
	CardImage,
} from '@progress/kendo-react-layout'

import { PokemonDetail } from '../../../componentes/pokemon/services/interfaces/PokemonDetail'
import { SvgIcon } from '@progress/kendo-react-common'
import { heartIcon } from '@progress/kendo-svg-icons'
import { FavoriteContext } from '../../../favorites/contexts/FavoriteContext'

interface PokedexCardProps {
	pokemon: PokemonDetail
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
	const {setFavorites, favorites } = useContext(FavoriteContext)
	const navigate = useNavigate()
	function handleClick() {
		navigate(`/pokemon/${pokemon.name}`)
	}

	const addPokemonToFavorite = () => {
		setFavorites([...favorites, pokemon])
	}

	const removePokemonFromFavorites = () => {
		setFavorites(favorites.filter((poke) => poke.name !== poke.name))
	}

	return (
		<Card
			onClick={handleClick}
			className='p-16 bg-slate-200 text-black rounded-[.5em]'
		>
			<CardTitle>{pokemon.name}</CardTitle>
			<CardImage src={pokemon.sprites.front_default} />
			<CardActions 
			style={{ display: 'flex', justifyContent: 'center' }}>
				<button 
				className='text-center'>
					<SvgIcon 
						onClick={addPokemonToFavorite}
						style={{
							fontSize: '50px',
							justifyContent: 'center',
						}}
						className='flex justify-end grow'
						icon={heartIcon}
					/>
				</button>
			</CardActions>
		</Card>
	)
}
