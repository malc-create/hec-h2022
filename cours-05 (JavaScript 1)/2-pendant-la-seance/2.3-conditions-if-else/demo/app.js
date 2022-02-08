var prix = 110;

// Entre les parenthèses, nous devons retrouver soit
// une valeur booléenne (false, true), ou une expression
// qui retourne une valeur booléenne (comparaison, 
// .includes(), etc...)
if (prix > 200) { // false
	console.log('Je me retrouve dans la branche du if');
} else {
	console.log('Je me retrouve dans la branche du else');
}

if (false) {
	console.log('Bonjour');
} else {
	console.log('Salut');
}

var produits = ['t-shirt', 'jeans'];
// console.log(produits.includes('t-shirt')); // true

if (produits.includes('t-shirt')) {
	console.log('Le produit est en inventaire');
} else {
	console.log('Le produit n\'est pas en inventaire');
}







