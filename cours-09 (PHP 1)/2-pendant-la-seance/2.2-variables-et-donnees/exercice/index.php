<?php 

$titre = 'Chandail pour garçons';
// Avec la concaténation
// echo 'Le titre est: ' . $titre;

// Avec l'interpolation
echo "Le titre est: $titre";
echo '<br>';

$description = "Collection Zara :<br>Cardigan pour garçons, disponibles en différentes tailles.";
echo $description;
echo '<br>';

// 5. Définition et utilisation de la quantité
// 5.1 Définissez la variable $quantite et donnez lui la valeur 4
$quantite = 4;

// 5.2 Affichez sa valeur dans un contexte (ex. La quantité restante est : ...)
echo "La quantité restante est: " . $quantite;
echo '<br>';

// 5.3 Diminuez la quantité de 2 à l'aide d'une soustraction
$quantite = $quantite - 2;

// 5.4 Affichez sa valeur dans un contexte (ex. La nouvelle quantité est : ...)
echo "La nouvelle quantité est: $quantite";
echo '<br>';

// 6.1 Définissez la variable $tailles (qui sera un tableau), et donnez-lui les valeurs 'S', 'M' et 'L'
$tailles = [
	'S', 'M', 'L'
];

// 6.2 Affichez les tailles grâce à la commande var_dump()
var_dump($tailles);
echo '<br>';

// 6.3 Ajoutez la taille 'XL' au tableau
$tailles[] = 'XL';

// 6.4 Affichez la quantité d'éléments dans le tableau à l'aide de count()
echo count($tailles);
echo '<br>';

// 6.5 Affichez le tableau à nouveau grâce à var_dump()
var_dump($tailles);


?>











