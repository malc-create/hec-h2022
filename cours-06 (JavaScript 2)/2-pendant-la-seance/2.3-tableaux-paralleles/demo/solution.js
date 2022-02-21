// Modélisation du titre des produits
var produits = [
	'Manteau en laine polaire Cragmont de The North Face - Femmes',
	'Chandail en laine polaire Pecora de Indyeva - Femmes',
	'Chandail à capuchon logo de MEC - Femmes',
	'Cardigan Covert de Arc\'teryx - Femmes'
];

// Modélisation des prix
var prix = [
	199.99,
	89.93,
	69.95,
	200
];

// Modélisation des évaluations
var evaluations = [
	4.5,
	3,
	0,
	4.5
];

var monIndex = 1;
console.log(produits[monIndex]);
console.log(prix[monIndex]);
console.log(evaluations[monIndex]);

console.log('----------------');

for (var i = 0; i < prix.length; i = i + 1) {
	console.log(produits[i]);
	console.log(prix[i]);
	console.log(evaluations[i]);
	console.log('-----');
}







