// Chaîne de caractères représentant le pays d'expédition
var paysExpedition = "CAN";

// Tableau représentant les pays pour lesquels la livraison est incluse
var paysLivraisonIncluse = [
    "CAN",
    "MEX",
    "USA"
];

// Nombre représentant le tarif pour une livraison vers un pays où la livraison n'est pas incluse
var tarifLivraisonNonIncluse = 25;

// Affichage dans la console des trois variables
console.log("Le pays d'expédition est " + paysExpedition);
console.log("Les pays pour lesquels la livraison est incluse sont " + paysLivraisonIncluse.toString());
console.log("Le tarif pour une livraison dans un pays ne figurant pas dans la liste d'inclusion est " + tarifLivraisonNonIncluse + "$");

// 2. Définissez une variable prixArticle pour stocker le prix de base de l'article
var prixArticle = 100;
var prixTotal = prixArticle;

// 3. Mettez en place une condition if/else permettant de valider si le pays de destination permet une livraison gratuite
console.log(paysLivraisonIncluse.includes(paysExpedition));
if (paysLivraisonIncluse.includes(paysExpedition)) {
    console.log('La livraison est incluse pour ' + paysExpedition);
} else {
    console.log('La livraison n\'est pas incluse pour ' + paysExpedition);
    prixTotal = prixTotal + tarifLivraisonNonIncluse;
}

console.log('Le montant final est: ' + prixTotal + '$');












