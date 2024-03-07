import axios from 'axios'
import { getPokemonsDetails } from './getPokemonsDetails'
import { PokemonDetail } from './interfaces/PokemonDetail'

export interface PokemonListInterface {
	name: string
	url: string
}

interface ListPokemonsInterface {
	const: number
	next: null | string
	previous: null | string
	results: PokemonDetail[]
}

export async function listPokemons(): Promise<ListPokemonsInterface> {
	const endpoint = `${process.env.REACT_APP_POKEAPI}/pokemon?limit=300`

	const response = await axios.get<ListPokemonsInterface>(endpoint)

	const promiseArr = response.data.results.map(({ name }) =>
		getPokemonsDetails(name)
	)
	const resultsPromise = await Promise.all(promiseArr)

	return {
		...response.data,
		results: resultsPromise,
	}
}
