<?php

session_start();

include('database.php');

$idemp = $_SESSION['idemp'];

$nome = $_POST['nome'];
$rel = $_POST['rel'];
$fuso = new datetimezone('America/Sao_Paulo');
$datain = new datetime();
$datain->settimezone($fuso);
$datainicio = $datain->format('Y-m-d H:i:s');

$sql2 = "INSERT into relatorio(relator, horario, descricao, idemprestimo) VALUES ('$nome', '$datainicio', '$rel', '$idemp')";
$query2 = mysqli_query($mysqli, $sql2);

echo "1";

?>