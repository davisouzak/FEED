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

interface PokemonDetailsProps {}

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

			<div className='md:container md:mx-auto'>
				<BadgeContainer className='text-white pt-6'>
					<GridLayout>
						<img
							className='flex'
							src={selectedPokemonsDetails?.sprites.front_default}
							alt=''
						/>
						{/* <h2 className='text-white'>
                            Pokemon selecionado:{' '}
                            {selectedPokemons?.name
                                ? selectedPokemons.name
                                : 'Nenhum pokemon selecionado'}
                        </h2> */}
						{JSON.stringify(
							selectedPokemonsDetails?.sprites.front_default,
							undefined,
							2
						)}
					</GridLayout>
				</BadgeContainer>
			</div>
		</div>
	)
}

export default PokemonDetails
