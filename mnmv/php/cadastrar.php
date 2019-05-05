<?php

session_start();

include('database.php');

$num = $_POST['num'];
$tipo = $_POST['tipo'];

$sql = "SELECT * FROM equipamento WHERE numeracao = '$num' AND tipo = '$tipo'";

$query = $mysqli->query($sql);

if($query->num_rows == 1){
    echo '0';
}else{
    $sql2 = "INSERT INTO equipamento(numeracao, tipo) VALUES ('$num', '$tipo')";
    $query2 = mysqli_query($mysqli,$sql2);
    echo '1';
}

?>