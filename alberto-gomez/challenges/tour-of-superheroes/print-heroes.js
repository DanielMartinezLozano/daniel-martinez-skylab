/* const heroesList = store.getHeroes(); */

function heroesInHTML(heroes) {
	const listOfHeroes = document.getElementById('top-heroes');
	for (i = 0; i < heroes.length; i++) {
		let heroLi = document.createElement('li');
		listOfHeroes.appendChild(heroLi);
		heroLi.setAttribute('class', 'hero-top-four');

		let heroAnchor = document.createElement('a');
		heroLi.appendChild(heroAnchor);
		heroAnchor.textContent = `${heroes[i].name}`;
		heroAnchor.setAttribute(
			'href',
			`/view/detail/detail.html?heroId=${heroes[i].id}`
		);
	}
}

module.exports = heroesInHTML;
