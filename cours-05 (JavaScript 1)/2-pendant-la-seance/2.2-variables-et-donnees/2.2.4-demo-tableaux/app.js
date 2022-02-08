// Modélisation
var equipesNHL = [
	'Canadiens',
	'Red Wings',
	'Maple Leafs'
];

console.log(equipesNHL);
console.log(equipesNHL[2]);
console.log(equipesNHL[0]);

equipesNHL[1] = 'Devils';
equipesNHL[2] = 'Trashers';

console.log(equipesNHL);

// pour connaître la quantité d'éléments dans un tableau
console.log('Il y a ' + equipesNHL.length + ' équipes dans mon tableau.');

// pour savoir si un élément fait partie d'un tableau
console.log(equipesNHL.includes('Nordiques')); // false
console.log(equipesNHL.includes('Canadiens')); // true

// ajouter un élément APRÈS la définition initiale du tableau
equipesNHL.push('Canucks');
equipesNHL.push('Kings');
console.log(equipesNHL);

// très utile pour TP2: index spécifié comme une variable
// en lien avec les étapes 5 et 6
var monIndex = 2;
console.log(equipesNHL[monIndex]);













