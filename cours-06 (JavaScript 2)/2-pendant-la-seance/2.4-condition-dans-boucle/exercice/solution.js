// 2. Modéliser un tableau avec 3 titres de recette.
var recettes = [
	'COCKTAIL "TRENDY"',
	'GÂTEAU VOLCAN AU CHOCOLAT',
	'COCKTAIL "PERFECTIONNISTE"'
];

var urls = [
	'',
	'https://www.chocolatsfavoris.com/recettes/gateau-volcan-au-chocolat',
	''
];

var descriptions = [
	'Je fais les meilleurs Espresso Martinis maison” - Le.la Trendy',
	'Voilà un dessert avec beaucoup de personnalité...et de chocolat!',
	'“Tout est contrôlé, précis et clair. Aucune façon de se tromper” - Le.la Perfectionniste'
];

// 3. Mettez en place une boucle permettant de parcourir chacun des éléments.
for (var i = 0; i < recettes.length; i = i + 1) {
	// 4. Affichez chacun des éléments dans la console, en les mettant dans un contexte (ex. Ce soir, je mangerai : Gâteau éclaté).
	console.log('Ce soir, je mangerai ' + recettes[i]);

	if (urls[i] == '') {
		console.log('Le lien est brisé');
	} else {
		console.log('La lien est: ' + urls[i]);	
	}
	

	console.log('La description est: ' + descriptions[i]);
	console.log('-----');
}












