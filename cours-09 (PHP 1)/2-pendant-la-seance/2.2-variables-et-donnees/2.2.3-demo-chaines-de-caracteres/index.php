<?php 

$prenomA = 'Daniel';
echo $prenomA;
echo '<br>';

$prenomB = "Daniel";
echo $prenomB;
echo '<br>';

$messageBienvenueA = 'Bienvenue, $prenomA';
echo $messageBienvenueA;
echo '<br>';

// Interpolation
$messageBienvenueB = "Bienvenue, $prenomB";
echo $messageBienvenueB;
echo '<br>';

// Concaténation
$message = 'Bienvenue, ' . $prenomA . '!';
echo $message;
echo '<br>';

// Échappement
$messageEscape = "Elle a dit: \"J'ai faim\"";
echo $messageEscape;
echo '<br>';

?>










