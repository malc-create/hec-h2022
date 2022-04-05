<?php 

// On modélise chacune des séances avec un tableau associatif
$cours_A = [
	'date' => '5 avril 2022',
	'instructeur' => 'Martha',
	'titre' => 'X-fit (Klub)'
];

// var_dump($cours_A);

$cours_B = [
	'date' => '1er avril 2022',
	'instructeur' => 'Paul',
	'titre' => 'Yoga Flow avec musique'
];

// var_dump($cours_B);

// echo '<br>';
// echo $cours_B['titre'];
// echo '<br>';
// echo $cours_A['instructeur'];

$cours_B['date'] = '2 avril 2022';

// echo '<br>';
// var_dump($cours_B);

$ma_propriete = 'titre';
// echo '<br>';
// echo $cours_A[$ma_propriete];

include 'app.html.php';


?>











