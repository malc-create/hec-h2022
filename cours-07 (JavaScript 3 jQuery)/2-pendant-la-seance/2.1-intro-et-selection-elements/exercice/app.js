// 4. Sélectionnez, grâce à jQuery, toutes les cellules du corps de la table (td) et modifiez leur contenu html grâce à la méthode .html(). 
$('td').html('ABC');

// 5. Sélectionnez, grâce à jQuery, tous les éléments ayant un attribut "class" de "temperature-negative" et modifiez leur contenu html grâce à la méthode .html()
var classSelectionnee = 'temperature-negative';
$('.' + classSelectionnee).html('DEF');

// 6. Sélectionnez, grâce à jQuery, l'élément ayant un attribut "id" de "journee-demain" et modifiez son contenu html grâce à la méthode .html()
$('#journee-demain').html('GHI');