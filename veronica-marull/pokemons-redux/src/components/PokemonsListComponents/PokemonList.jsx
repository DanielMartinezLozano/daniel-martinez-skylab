import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
	requestPokemons,
	createRandomVariable
} from '../../redux/actions/pokeActions';

function PokemonList({ pokemonList, randomNumber, dispatch, actions }) {
	if (!pokemonList && !pokemonList?.length) {
		dispatch(requestPokemons());
	}

	return (
		<>
			{pokemonList &&
				pokemonList.length &&
				pokemonList.map((pokemon) => {
					return <p>{pokemon.name}</p>;
				})}
		</>
	);
}

function mapStateToProps({ pokeReducer }) {
	//se hace desructuring para recibir solo el reducer del state
	debugger;
	return {
		pokemonList: pokeReducer.pokemonList,
		randomNumber: pokeReducer.randomNumber
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ createRandomVariable }, dispatch),
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
