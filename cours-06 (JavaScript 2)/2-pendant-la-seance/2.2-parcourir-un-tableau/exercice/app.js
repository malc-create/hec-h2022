// 2. Modéliser un tableau avec 3 titres de recette.
var recettes = [
	'COCKTAIL "TRENDY"',
	'GÂTEAU VOLCAN AU CHOCOLAT',
	'COCKTAIL "PERFECTIONNISTE"'
];
console.log(recettes);

// 3. Mettez en place une boucle permettant de parcourir chacun des éléments.
for (var i = 0; i < recettes.length; i = i + 1) {
	// 4. Affichez chacun des éléments dans la console, en les mettant dans un contexte (ex. Ce soir, je mangerai : Gâteau éclaté).
	console.log('Ce soir, je mangerai ' + recettes[i]);
}