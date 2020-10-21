class PokemonComponent {
	constructor(pokemon) {
		this.pokemon = pokemon;
	}

	updateHtmlPokemonList(element) {
		debugger;
		element.innerHTML = '';
		this.pokemon.results.forEach((poke) => {
			element.innerHTML =
				element.innerHTML +
				`
<li>
<a href="https://pokeapi.co/api/v2/pokemon/${poke.name}">
<span id="pokemon-name">${poke.name}</span>
</a>
</li>
`;
		});
	}
}

module.exports = PokemonComponent;
