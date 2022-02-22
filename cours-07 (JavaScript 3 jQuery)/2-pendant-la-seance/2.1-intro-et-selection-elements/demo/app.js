// sélecteur de type élément
$('p').html('Bonjour');

// sélecteur de type "class"
$('.para-impair').html('Salut');

// sélecteur de type "id"
// Très utile de bien comprendre ceci pour le TP2
var monId = 'premier-para';
var message = 'Hola!';
$('#' + monId).html(message);