import actionTypes from './actionTypes';
import axios from 'axios';

function requestPokemonsSuccess(pokemonList) {
	return {
		type: actionTypes.LOAD_POKEMONS,
		pokemonList
	};
}

function requestPokemonError(error) {
	return {
		type: actionTypes.LOAD_POKEMONS_ERROR,
		error
	};
}

export function requestPokemons() {
	return async (dispatch) => {
		const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';
		try {
			const pokemons = await axios(endpoint);
			debugger;
			//dispatch una accion sincrona de success
			dispatch(requestPokemonsSuccess(pokemons.data.results));
		} catch (error) {
			debugger;
			dispatch(requestPokemonError(error));
			//Dispatchamos una accion sincrona de error
		}
	};
}