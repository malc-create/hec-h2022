var chandailA = {
	titre: 'Chandail à glissière courte Better Sweater de Patagonia - Femmes',
	prix: 149,
	evaluation: 4.5
};

console.log(chandailA);
// ressemble beaucoup à ce que nous avons
// fait pour les tableaux
var maCle = 'titre';
console.log(chandailA['titre']);
// console.log(chandailA.titre);

console.log(chandailA[maCle]);
// console.log(chandailA.maCle);

chandailA['prix'] = 139;
chandailA['prix'] = chandailA['prix'] - 20;
console.log(chandailA);


var chandailB = {
	titre: 'Manteau en laine polaire Fireside de MEC - Femmes',
	prix: 53.94,
	evaluation: 3.5
};

console.log(chandailB);







