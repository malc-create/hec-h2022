// 3. Ajouter un gestionnaire d'événement
$('.btn-achat').on('click', function() {
	// On récupère la valeur de l'attribut data-tag-produit grâce à la méthode .data() et le sélecteur $(this)
	var tagProduit = $(this).data('tag-produit');

	// On affiche cette valeur dans la console
	console.log(tagProduit);
});