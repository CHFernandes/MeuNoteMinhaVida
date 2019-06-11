<?php

session_start();

include('database.php');

$num = $_POST['equip'];
$tipo = $_POST['tipo'];

$sql0 = "select idequipamento from equipamento where numeracao = '$num' AND idtipo = (select idtipo from tipo where Sigla = '$tipo' )";
$query0 = mysqli_query($mysqli, $sql0);
if(mysqli_num_rows($query0) == 1){

$row = mysqli_fetch_assoc($query0);
$id = $row['idequipamento'];

$sql = "Update equipamento set status = '3' where idequipamento = '$id'";
$query = mysqli_query($mysqli, $sql);

$nome = $_POST['nome'];
$rel = $_POST['rel'];
$fuso = new datetimezone('America/Sao_Paulo');
$datain = new datetime();
$datain->settimezone($fuso);
$datainicio = $datain->format('Y-m-d H:i:s');


$sql2 = "INSERT into relatorio(relator, horario, descricao) VALUES ('$nome', '$datainicio', '$rel')";
$query2 = mysqli_query($mysqli, $sql2);

echo "1";
}else{
    echo "0";
}


?>