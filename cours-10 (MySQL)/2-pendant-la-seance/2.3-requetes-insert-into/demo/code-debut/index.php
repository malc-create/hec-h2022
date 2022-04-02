<?php 

// Créer une connexion entre les serveurs
include 'db/connexion-MySQL.php';

// Insérer des données
include 'db/insert-into-publications.php';

// Sélectionner les données
include 'db/select-publications.php';

// Inclure le fichier d'affichage
include 'views/app.html.php';

?>