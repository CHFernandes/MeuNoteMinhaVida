<?php

session_start();

include('database.php');

$num = $_POST['num'];
$tipo = $_POST['tipo'];
$bloco = $_POST['bloco'];

$sql1 = "SELECT * FROM tipo WHERE Sigla = '$tipo'";
$query1 = mysqli_query($mysqli,$sql1);
$row1 = mysqli_fetch_assoc($query1);
$idtipo = $row1['idtipo'];
$sql2 = "SELECT * FROM bloco WHERE numero = '$bloco'";
$query2 = mysqli_query($mysqli,$sql2);
$row2 = mysqli_fetch_assoc($query2);
$idbloco = $row2['idbloco'];

$sql = "SELECT * FROM equipamento WHERE numeracao = '$num' AND idtipo = '$idtipo' AND idbloco = '$idbloco'";

$query = $mysqli->query($sql);

if($query->num_rows == 1){
    echo '0';
}else{
    $sql2 = "INSERT INTO equipamento(numeracao, idtipo, status, idbloco) VALUES ('$num', '$idtipo', '0','$idbloco')";
    $query2 = mysqli_query($mysqli,$sql2);
    echo '1';
}

?>