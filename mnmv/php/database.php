<?php
$mysqli = new mysqli('localhost:3307', 'meunoteminhavida', 'meunote','bd_principal');

mysqli_query($mysqli,"SET NAMES 'utf8'");
mysqli_query($mysqli,"SET NAMES 'utf8'");
mysqli_query($mysqli,'SET character_set_connection=utf8');
mysqli_query($mysqli,'SET character_set_client=utf8');
mysqli_query($mysqli,'SET character_set_results=utf8');
?>