// Mise en place d'un gestionnaire d'événement
$('#inputPrix').on('keyup', function() {
	// Les actions lorsqu'un événement 'keyup' se produit sur #inputPrix
	console.log('Un keyup sur inputPrix');

	// On saisit la valeur courante du champ
	var prix = $('#inputPrix').val();
	console.log(prix);

	// On met en place une condition
	if (prix > 50) {
		$('#alerte-avec-rabais-20').show();
		$('#alerte-sans-rabais-20').hide();
	} else {
		$('#alerte-sans-rabais-20').show();
		$('#alerte-avec-rabais-20').hide();
	}
});