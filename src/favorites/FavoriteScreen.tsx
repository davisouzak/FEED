import { useContext, useState } from "react"
import { PokemonListInterface } from "../componentes/pokemon/services/listPokemons"
import { AppBar, AppBarSection, AppBarSpacer, GridLayoutItem } from "@progress/kendo-react-layout"
import { BadgeContainer } from "@progress/kendo-react-indicators"
import { PokedexCard } from "../views/feed/components/PokedexCard"
import { FavoriteContext } from "./contexts/FavoriteContext"



export default function Feed() {
	const [selectedPokemons, setSelectedPokemons] = useState<
		PokemonListInterface | undefined
	>(undefined)
	const { favorites } = useContext(FavoriteContext)
	

	return (
		<>
			<AppBar className='bg-gray-800 h-20 mx-auto max-w-7x1 px-2 sm:px-6 lg:px-8'>
				<AppBarSpacer style={{ width: 4 }} />


				<AppBarSection>
					<h1 className='title text-3xl animate-pulse'>Pokedex</h1>
				</AppBarSection>

				<AppBarSpacer style={{ width: 32 }} />
			</AppBar>

			<div className='px-8 w-full'>
				<BadgeContainer className='text-white pt-6'>
					
						<>
							<GridLayoutItem className='w-full flex flex-wrap justify-center gap-5'>
								{favorites?.map((pokemons) => (
									<>
										<GridLayoutItem className='text-center'>
											<PokedexCard pokemon={pokemons} />
										</GridLayoutItem>
									</>
								))}
							</GridLayoutItem>
						</>

				</BadgeContainer>
			</div>
		</>
	)
}

