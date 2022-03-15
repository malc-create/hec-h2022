var chandailA = {
	titre: 'Chandail à glissière courte Better Sweater de Patagonia - Femmes',
	prix: 150,
	evaluation: 4.5
};

var chandailB = {
	titre: 'Manteau en laine polaire Fireside de MEC - Femmes',
	prix: 50,
	evaluation: 3.5
};

var chandailC = {
	titre: "Cardigan Covert de Arc'teryx - Femmes",
	prix: 100,
	evaluation: 4.5 
};

var chandailD = {
	titre: "Chandail Better Sweater de Patagonia - Femmes",
	prix: 200,
	evaluation: 3.5
};

var chandails = [
	chandailA,
	chandailB,
	chandailC,
	chandailD
];

console.log(chandails);
console.log(chandails[0]);

console.log(chandails[0]['titre']);
console.log(chandails[0]['prix']);
console.log('------------');

// Parcourir le tableau
var montantFinal = 0;

for (var i = 0; i < chandails.length; i = i + 1) {
	var prixChandail = chandails[i]['prix'];
	montantFinal = montantFinal + prixChandail;
}

console.log(montantFinal);













