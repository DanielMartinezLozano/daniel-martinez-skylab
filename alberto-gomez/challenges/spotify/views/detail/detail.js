function printArtistDetail(artist) {
	const artistTitle = document.getElementById('artist-title');
	artistTitle.innerHTML = `${artist}`;
}

function getArtistId(location) {
	debugger;
	const params = new URLSearchParams(location.search.substring(1));
	const getName = params.get('artistId');
	return getName;
}

(async () => {
	debugger;
	await store.getToken();

	await store.getArtist(getArtistId(window.location));
	printArtistDetail(store.getArtistInfo());
})();
