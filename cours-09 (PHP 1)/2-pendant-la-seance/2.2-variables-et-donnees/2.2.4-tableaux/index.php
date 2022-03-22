<?php 

$produits = [
	'yaourt',
	'banane',
	'biscuits'
];

// Le var_dump() est très utile pour inspecter le contenu d'un tableau
var_dump($produits);
echo '<br>';

echo $produits[1];
echo '<br>';

$produits[1] = 'fraises';
var_dump($produits);
echo '<br>';

// Ajout d'un élément au tableau
$produits[] = 'café';
var_dump($produits);
echo '<br>';

// Déterminer la quantité d'éléments dans le tableau
echo count($produits);
echo '<br>';

// var_dump()
var_dump($produits[1]);

?>








