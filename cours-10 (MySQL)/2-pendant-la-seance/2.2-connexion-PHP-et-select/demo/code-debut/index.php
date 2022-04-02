<?php 

// Créer une connexion entre nos serveurs (Apache-PHP et MySQL)
include 'db/connexion-MySQL.php';

// Sélectionner mes données de la table des publications
include 'db/select-publications.php';

// Inclure le fichier d'affichage
include 'views/app.html.php';

?>