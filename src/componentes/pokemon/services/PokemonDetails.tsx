import React, { useEffect, useState } from 'react'
import { PokemonDetail } from './interfaces/PokemonDetail'
import {
	AppBar,
	AppBarSection,
	AppBarSpacer,
	Avatar,
} from '@progress/kendo-react-layout'
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators'
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons'
import { SvgIcon } from '@progress/kendo-react-common'
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout'
import { useParams } from 'react-router-dom'
import { getPokemonsDetails } from './getPokemonsDetails'
import { type } from 'os'
import { types } from 'util'

interface PokemonDetailsProps {}

function getPokemonTypeIcon(type: string) {
	switch (type) {
		case 'grass':
			return '🌱'
		case 'bug':
			return '🐞'
		case 'dark':
			return '🌑'
		case 'dragon':
			return '🐉'
		case 'eletric':
			return '⚡'
		case 'fairy':
			return '🧚‍♀️'
		case 'fighting':
			return '👊'
		case 'fire':
			return '🔥'
		case 'flying':
			return '🕊'
		case 'ghost':
			return '👻'
		case 'ground':
			return '🗻'
		case 'ice':
			return '🧊'
		case 'normal':
			return '🔄'
		case 'poison':
			return '💀'
		case 'physic':
			return '😵'
		case 'rock':
			return '🪨'
		case 'steel':
			return '🔩'
		case 'water':
			return '💧'
		default:
			return 'x'
	}
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
	const { name } = useParams()
	const [selectedPokemonsDetails, setSelectedPokemonsDetails] = useState<
		PokemonDetail | undefined
	>(undefined)
	useEffect(() => {
		if (!name) return
		getPokemonsDetails(name).then((response) =>
			setSelectedPokemonsDetails(response)
		)
	}, [])

	return (
		<div>
			<AppBar className='bg-gray-800 h-20 mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8'>
				<AppBarSection>
					<button className=' k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'>
						<SvgIcon icon={menuIcon} />
					</button>
				</AppBarSection>

				<AppBarSpacer style={{ width: 4 }} />

				<AppBarSection>
					<h1 className='title text-3xl animate-pulse'>{name}</h1>
				</AppBarSection>

				<AppBarSpacer style={{ width: 32 }} />
			</AppBar>

			<div className='md:container md:mx-auto flex justify-center'>
				<BadgeContainer className='text-white pt-6'>
					<GridLayoutItem>
						<img
							width='100%'
							height='auto'
							className='flex-initial w-96'
							src={selectedPokemonsDetails?.sprites.front_default}
							alt=''
						/>
						{/* <h2 className='text-white'>
                            Pokemon selecionado:{' '}
                            {selectedPokemons?.name
                                ? selectedPokemons.name
                                : 'Nenhum pokemon selecionado'}
                        </h2> */}
						{/* {JSON.stringify(
							selectedPokemonsDetails?.sprites.front_default,
							undefined,
							2
						)} */}
					</GridLayoutItem>

					<GridLayoutItem>{selectedPokemonsDetails?.name}</GridLayoutItem>
					{selectedPokemonsDetails?.types.map((type) => (
						
						<>
							<GridLayoutItem className='flex flex-row'>
								<GridLayoutItem>Specie:</GridLayoutItem>
								<GridLayoutItem>
									{selectedPokemonsDetails?.species.name}
								</GridLayoutItem>
							</GridLayoutItem>

							<>
								<GridLayoutItem className='flex flex-row'>
									<GridLayoutItem>Type:</GridLayoutItem>
									<GridLayoutItem>
										{getPokemonTypeIcon(type.type.name)}
										{type.type.name}
									</GridLayoutItem>
								</GridLayoutItem>

								<GridLayoutItem className='flex flex-row'>
									<GridLayoutItem>Abilities:</GridLayoutItem>
									<GridLayoutItem className='flex flex-row'>
										{selectedPokemonsDetails?.abilities.map((ability) => (
											<GridLayoutItem>{ability.ability.name}</GridLayoutItem>
										))}
									</GridLayoutItem>
								</GridLayoutItem>
							</>
						</>
					))}
				</BadgeContainer>
			</div>
		</div>
	)
}

export default PokemonDetails
