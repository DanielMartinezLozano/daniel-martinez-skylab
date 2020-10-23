function lowestProduct(input) {
	let separate = input.split('');
	if (separate.length < 4) {
		return 'Number is too small';
	}
	let cell = [];
	for (let i = 0; i < separate.length; i++) {
		cell.push(
			separate[i] * separate[i + 1] * separate[i + 2] * separate[i + 3]
		);
	}
	console.log(cell);
	let order = cell.sort(function (a, b) {
		return a - b;
	});
	return order[0];
}
