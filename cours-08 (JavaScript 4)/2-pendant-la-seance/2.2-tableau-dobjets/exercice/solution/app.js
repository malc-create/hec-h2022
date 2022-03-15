// Modélisez une recette sous la forme d'objet, et assignez-la à une nouvelle variable nommée recette_A.
// Note : vous aurez besoin des clés titre, description et url pour construire votre objet.
var recette_A = {
	titre: 'LE TEMPS DES FRAISES',
	description: 'Célébrez le temps des fraises à la façon Chocolats Favoris avec cette délicieuse tarte choco-fraise!',
	url: 'https://www.chocolatsfavoris.com/recettes/strawberry-fields'
};

// Modélisez une autre recette sous la forme d'objet, et assignez-là à une nouvelle variable nommée recette_B.
var recette_B = {
	titre: 'CORNETS DE RIZ SOUFFLÉ AU CHOCOLAT',
	description: 'Reproduisez nos fameux cornets Éclatés à la maison... À votre façon!',
	url: 'https://www.chocolatsfavoris.com/recettes/cornets-de-riz-souffle-au-chocolat'
}; 

// 2. Modélisez deux autres recettes sous la forme d'objets.
var recette_C = {
	titre: "CAKE POPS À LA BARBE À PAPA",
	desription: "De mini gâteaux sur bâton qui feront plaisir à tous! ",
	url: "https://www.chocolatsfavoris.com/recettes/pop-cakes-a-la-barbe-a-papa"
};

var recette_D = {
	titre: "BAR À MINI PIZZAS AU CHOCOLAT",
	description: "Pizza + chocolat, deux grand favoris réunis! ",
	url: "https://www.chocolatsfavoris.com/recettes/bar-a-mini-pizzas-au-chocolat"
};

// 3. Regroupez vos 4 recettes dans un tableau, et assignez-le à une nouvelle variable nommée recettes.
var recettes = [
	recette_A, recette_B, recette_C, recette_D
];

// 4. Affichez votre tableau dans la console, et prenez le temps de l'inspecter.
console.log(recettes);

// 5. Affichez dans la console :
// - Le titre de la recette c
// - La description et l'url de la recette d
// - L'objet représentant la recette b (prenez le temps de l'inspecter dans la console)
console.log(recettes[2]['titre']);
console.log(recettes[3]['description']);
console.log(recettes[3]['url']);
console.log(recettes[1]);

// console.log(recettes[3][0]);

// 6. Parcourez votre tableau d'objets, et affichez tous les titres.
for (var i = 0; i < recettes.length; i = i + 1) {
	console.log(recettes[i]['titre']);
}













