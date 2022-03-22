<?php 

// opérateurs arithmétiques
$prix = 100;
$prix = $prix + 10;
$prix_apres_taxes = $prix * 1.15;

echo $prix;
echo '<br>';
echo $prix_apres_taxes;
echo '<br>';

// opérateurs de comparaison
echo $prix == 110; // avec le echo, on voit 1 au lieu de True
echo '<br>';
echo $prix < 50; // avec le echo, on ne voit rien au lieu de False

// var_dump() permet d'avoir plus d'informations (pour des fins de diagnostic uniquement)
var_dump($prix == 110);
echo '<br>';
var_dump($prix < 50);
echo '<br>';
var_dump('Daniel');
echo '<br>';

// Valeurs booléennes
var_dump(true);
echo '<br>';
var_dump(false);
echo '<br>';


?>










