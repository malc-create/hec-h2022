// Mise en place d'un gestionnaire d'événements
$('a').on('click', function() {
	// Définir les actions lorsque je "click" sur des éléments a
	console.log('Je clique sur des éléments a');

	$(this).html('cliqué');
	var dataValeur = $(this).data('test');
	console.log(dataValeur);
});