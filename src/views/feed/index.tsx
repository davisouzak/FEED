import { listPokemons } from '../../componentes/pokemon/services/listPokemons'
import {
	AppBar,
	AppBarSection,
	AppBarSpacer,
} from '@progress/kendo-react-layout'
import { BadgeContainer } from '@progress/kendo-react-indicators'
import { SvgIcon } from '@progress/kendo-react-common'
import { heartIcon, menuIcon } from '@progress/kendo-svg-icons'
import { GridLayoutItem } from '@progress/kendo-react-layout'
import { PokedexCard } from './components/PokedexCard'
import { useQuery } from '@tanstack/react-query'
import { Loader } from '@progress/kendo-react-indicators'
import { useNavigate } from 'react-router-dom'

export default function Feed() {
	const navegar = useNavigate()
	const { data, isLoading } = useQuery({
		queryKey: ['listPokemons'],
		queryFn: listPokemons,
	})

	return (
		<>
			<AppBar className='bg-gray-800 h-20 mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8'>
				<AppBarSpacer style={{ width: 4 }} />

				<AppBarSection>
					<button className=' k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'>
						<SvgIcon icon={menuIcon} />
					</button>

					<button className=' flex justify-end grow k-button k-button-md k-rounded-md k-button-flat k-button-flat-base'>
						<SvgIcon
							onClick={() => navegar('/favoritos')}
							className='flex justify-end grow'
							icon={heartIcon}
						/>
					</button>
				</AppBarSection>

				<AppBarSection>
					<h1 className='title text-3xl animate-pulse'>Pokedex</h1>
				</AppBarSection>

				<AppBarSpacer style={{ width: 32 }} />
			</AppBar>

			<div className='px-8 w-full'>
				<BadgeContainer className='text-white pt-6'>
					{!isLoading ? (
						<>
							<GridLayoutItem className='w-full flex flex-wrap justify-center gap-5'>
								{data?.results.map((pokemons) => (
									<>
										<GridLayoutItem className='text-center'>
											<PokedexCard pokemon={pokemons} />
										</GridLayoutItem>
									</>
								))}
							</GridLayoutItem>
						</>
					) : (
						<div className='justify-center items-center'>
							{' '}
							<Loader
								size='large'
								type={'infinite-spinner'}
							/>
						</div>
					)}
				</BadgeContainer>
			</div>
		</>
	)
}
