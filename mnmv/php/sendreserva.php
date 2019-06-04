<?php

session_start();

include('database.php');

$acad = $_POST['nome'];
$num = $_POST['num'];
$tipo = $_POST['tipo'];
$sala = $_POST['sala'];
$bloco = $_POST['bloco'];
$inicio = $_POST['inicio'];
$fim = $_POST['fim'];

$sql1 = "SELECT Idacademico FROM academico WHERE nome = '$acad'";
$query1 = mysqli_query($mysqli,$sql1);
$row1 = mysqli_fetch_assoc($query1);
$idacad =  $row1['Idacademico'];
$sql2 = "SELECT idequipamento FROM equipamento WHERE numeracao = '$num' AND idtipo = (SELECT idtipo FROM tipo WHERE Descricao = '$tipo') AND idbloco = (SELECT idbloco FROM bloco WHERE numero = '$bloco')";
$query2 = mysqli_query($mysqli,$sql2);
$row2 = mysqli_fetch_assoc($query2);
$idquip = $row2['idequipamento'];
$sql3 = "SELECT idsala FROM sala WHERE sala = '$sala' AND idbloco = (SELECT idbloco FROM bloco WHERE numero = '$bloco')";
$query3 = mysqli_query($mysqli,$sql3);
$row3 = mysqli_fetch_assoc($query3);
$idsala = $row3['idsala'];
$sql4 = "SELECT idemprestimo FROM emprestimo WHERE idacademico = '$idacad' AND idequipamento = '$idquip' AND idsala = '$idsala' AND datainicio = '$inicio' AND datafim = '$fim' AND status = '2'";
$query4 = mysqli_query($mysqli,$sql4);
$row4 = mysqli_fetch_assoc($query4);
$idemp =  $row4['idemprestimo'];
$sql5 = "UPDATE emprestimo SET status = '1' WHERE idemprestimo = '$idemp'";
$query5 = mysqli_query($mysqli,$sql5);
$sql6 = "UPDATE equipamento SET status = '1' WHERE idequipamento = '$idquip'";
$query6 = mysqli_query($mysqli,$sql6);
echo "1";
?>