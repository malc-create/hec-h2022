// On masque la bannière rouge
// display: none;
$('#alerte-sans-rabais-20').hide();

// On affiche la bannière verte
// display: block;
$('#alerte-avec-rabais-20').show();

// On ajoute du contenu à chacun 
// des éléments sélectionnés
$('#alerte-avec-rabais-20').append('<b>Bravo!</b>');

// Truc pour le TP2
var contenu = '<b>Il fait beau</b>';
contenu = contenu + '<b>Nous sommes rendus au cours 7</b>';
contenu = contenu + 'ABCD';
$('#alerte-avec-rabais-20').append(contenu);


// Attention de ne pas ouvrir une balise 
// qui n'est pas fermée dans le même .append()
// Important pour le TP2
$('#alerte-avec-rabais-20').append('<p>');