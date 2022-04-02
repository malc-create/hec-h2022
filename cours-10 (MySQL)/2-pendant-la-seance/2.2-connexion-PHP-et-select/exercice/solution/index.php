<?php

// Créer la connexion entre les serveurs
include 'db/connexion-MySQL.php';

// Sélectionner les données de la table des articles
include 'db/select-articles.php';

// Inclure le fichier d'affichage
include 'views/app.html.php';

?>