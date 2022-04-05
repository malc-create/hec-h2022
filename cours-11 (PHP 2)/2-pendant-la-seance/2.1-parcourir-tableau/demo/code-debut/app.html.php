<!DOCTYPE html>
<html>
<head>
	<title>Démo 2.1</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
	<div class="container mt-5">
		<div class="row justify-content-center">
			<div class="col-6">
				<h5>Liste des cours</h5>
				<ul class="list-group">
					<!-- Nous voulons mettre en place un algorithme pour générer la liste HTML dynamiquement -->
					<?php foreach ($titres as $titre) { ?>
						<li class="list-group-item"><?php echo $titre; ?></li>
					<?php } ?>


					<!-- Approche alternative -->
					<?php foreach ($titres as $titre) {
						// echo "<li class=\"list-group-item\">$titre</li>";
					} ?>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>




