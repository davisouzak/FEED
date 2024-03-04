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
export default function Feed() {
	const [pokemons, setPokemons] = useState<PokemonListInterface[]>([])
	const [selectedPokemons, setSelectedPokemons] = useState<
		PokemonListInterface | undefined
	>(undefined)
	const [selectedPokemonsDetails, setSelectedPokemonsDetails] = useState<
		PokemonDetail | undefined
	>(undefined)

	useEffect(() => {
		listPokemons().then((response) => setPokemons(response.results))
	}, [])

	useEffect(() => {
		if (!selectedPokemons) return
		getPokemonsDetails(selectedPokemons.name).then((response) =>
			setSelectedPokemonsDetails(response)
		)
	}, [selectedPokemons])

	return (
		<>
			{/* <nav className='bg-gray-800'>
				<div className='mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8'>
					<div className='relative flex h-16 items-center justify-between'>
						<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
						<span className='absolute -inset-05' />
						<span className='sr-oly text-white text-3xl animate-pulse'>
							Pokedex
						</span>
					</div>
				</div>
			</nav> */}

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

			<div className='md:container md:mx-auto'>
				<BadgeContainer className='text-white pt-6'>
					<GridLayout className='grid gap-4 grid-cols-4 grid-rows-3'>
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
												<button onClick={() => setSelectedPokemons(pokemons)}>Lear more</button>
											</CardActions>
										</div>
									</CardHeader>
									{/* {pokemons.name} */}
								</GridLayoutItem>
							</>
						))}
						Pokemons:
						<h2 className='text-white'>
							Pokemon selecionado:{' '}
							{selectedPokemons?.name
								? selectedPokemons.name
								: 'Nenhum pokemon selecionado'}
						</h2>
						{JSON.stringify(selectedPokemonsDetails, undefined, 2)}
					</GridLayout>
				</BadgeContainer>
			</div>
		</>
	)
}
