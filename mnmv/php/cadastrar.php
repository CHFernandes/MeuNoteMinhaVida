<?php

session_start();

include('database.php');

$num = $_POST['num'];
$tipo = $_POST['tipo'];

$sql1 = "SELECT * FROM tipo WHERE Sigla = '$tipo'";
$query1 = mysqli_query($mysqli,$sql1);
$row1 = mysqli_fetch_assoc($query1);
$idtipo = $row1['idtipo'];

$sql = "SELECT * FROM equipamento WHERE numeracao = '$num' AND idtipo = '$idtipo'";

$query = $mysqli->query($sql);

if($query->num_rows == 1){
    echo '0';
}else{
    $sql2 = "INSERT INTO equipamento(numeracao, idtipo) VALUES ('$num', '$idtipo')";
    $query2 = mysqli_query($mysqli,$sql2);
    echo '1';
}

?>