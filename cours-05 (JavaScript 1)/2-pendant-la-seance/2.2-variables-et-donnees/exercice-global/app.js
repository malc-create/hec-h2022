// 3. Définissez la variable "paysExpedition"
var paysExpedition = 'CAN';
console.log('Le pays d\'expédition est: ' + paysExpedition);

// 4. Définissez la variable "paysLivraisonIncluse"
var paysLivraisonIncluse = [
	'CAN', 'DZA', 'AUS'
];
console.log(paysLivraisonIncluse);

// 5. Définissez une variable "tarifLivraisonNonIncluse"
var tarifLivraisonNonIncluse = 25;
console.log('Le tarif de livraison pour les pays non éligibles est: ' + tarifLivraisonNonIncluse + '$');
// note: on peut séparer les éléments par une virgule UNIQUEMENT dans un console.log()
console.log('Daniel', 'Parpal');

// 7. Ajoutez un nouveau pays au tableau, avec l'action (méthode) .push()
paysLivraisonIncluse.push('BLR');
console.log(paysLivraisonIncluse);
