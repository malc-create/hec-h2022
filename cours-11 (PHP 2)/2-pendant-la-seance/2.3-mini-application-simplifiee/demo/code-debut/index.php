<?php

// Connexion avec la base de données
include 'db/connexion-MySQL.php';

// Sélection des données avec la requête de sélection
include 'db/select-cours-fitness.php';

// var_dump($cours[0]);

// On inclut les données du fichier data.php
// include 'data.php';

// On inclut l'affichage
include 'views/app.html.php';

?>
