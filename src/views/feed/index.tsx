import { useEffect, useState } from 'react'
import {
	PokemonListInterface,
	listPokemons,
} from '../../componentes/pokemon/services/listPokemons'
import { getPokemonsDetails } from '../../componentes/pokemon/services/getPokemonsDetails'
import { PokemonDetail } from '../../componentes/pokemon/services/interfaces/PokemonDetail'
import {
	AppBar,
	AppBarSection,
	AppBarSpacer,
	Avatar,
} from '@progress/kendo-react-layout'
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators'
import { SvgIcon } from '@progress/kendo-react-common'
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons'
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout'
import {
	Card,
	CardHeader,
	CardTitle,
	CardBody,
	CardActions,
	CardImage,
	CardSubtitle,
} from '@progress/kendo-react-layout'
import { useNavigate } from 'react-router-dom'

export default function Feed() {
	const [pokemons, setPokemons] = useState<PokemonListInterface[]>([])
	const [selectedPokemons, setSelectedPokemons] = useState<
		PokemonListInterface | undefined
	>(undefined)
	const navigate = useNavigate()

	useEffect(() => {
		listPokemons().then((response) => setPokemons(response.results))
	}, [])

	function handleClick(pokemon: PokemonListInterface) {
		navigate(`/pokemon/${pokemon.name}`)
	}

	return (
		<>
			<AppBar className='bg-gray-800 h-20 mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8'>
				<AppBarSection>
					<button className=' k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'>
						<SvgIcon icon={menuIcon} />
					</button>
				</AppBarSection>

				<AppBarSpacer style={{ width: 4 }} />
				<AppBarSection>
					<h1 className='title text-3xl animate-pulse'>Pokedex</h1>
				</AppBarSection>

				<AppBarSpacer style={{ width: 32 }} />
			</AppBar>

			<div className='px-8 w-full'>
				<BadgeContainer className='text-white pt-6'>
					<GridLayoutItem
						className='w-full flex flex-wrap justify-center gap-5'
	
					>
						{pokemons.map((pokemons) => (
							<>
								<GridLayoutItem className='text-center'>
									<CardHeader
										className='k-hbox'
										style={{ background: '#fff' }}
									>
										<div>
											<CardTitle style={{ marginBottom: '4px' }}>
												{pokemons.name}
											</CardTitle>
											<CardActions>
												<button onClick={() => handleClick(pokemons)}>
													Lear more
												</button>
											</CardActions>
										</div>
									</CardHeader>
									{/* {pokemons.name} */}
								</GridLayoutItem>
							</>
						))}
					</GridLayoutItem>
				</BadgeContainer>
			</div>
		</>
	)
}
