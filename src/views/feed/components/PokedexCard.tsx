import React from 'react'
import { PokemonListInterface } from '../../../componentes/pokemon/services/listPokemons'
import { useNavigate } from 'react-router-dom'
import {
	Card,
	CardHeader,
	CardTitle,
	CardBody,
	CardActions,
	CardImage,
	CardSubtitle,
	Avatar,
} from '@progress/kendo-react-layout'

import { PokemonDetail } from '../../../componentes/pokemon/services/interfaces/PokemonDetail'
import { ChipList, Chip, ChipProps } from '@progress/kendo-react-buttons'
import { type } from 'os'

interface PokedexCardProps {
	pokemon: PokemonDetail
}

export const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon }) => {
	const navigate = useNavigate()

	function handleClick() {
		navigate(`/pokemon/${pokemon.name}`)
	}

	return (
		<Card
			onClick={handleClick}
			className='p-16 bg-slate-200 text-black rounded-[.5em]'
		>
			<CardTitle>{pokemon.name}</CardTitle>
			<CardImage src={pokemon.sprites.front_default} />
			{/* <CardSubtitle>
                {pokemon.types.map((type) => <Chip label={type.type.name} {...type.type} disabled={props.dataItem.disabled} />)}  
            </CardSubtitle> */}
		</Card>
	)
}
