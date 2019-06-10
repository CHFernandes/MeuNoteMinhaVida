<?php

session_start();

include('database.php');

$num = $_POST['num'];
$tipo = $_POST['tipo'];

$sql1 = "SELECT * FROM tipo WHERE Sigla = '$tipo'";
$query1 = mysqli_query($mysqli,$sql1);
$row1 = mysqli_fetch_assoc($query1);
$idtipo = $row1['idtipo'];

$sql = "SELECT * FROM equipamento WHERE numeracao = '$num' AND idtipo = '$idtipo' AND status = '1'";

$result = mysqli_query($mysqli, $sql);

if(mysqli_num_rows($result) == 1){
    $row = mysqli_fetch_assoc($result);
    $id = $row['idequipamento']; 
    $sql3 = "SELECT * FROM emprestimo WHERE idequipamento = '$id' AND status = '1'";
    $query3 = mysqli_query($mysqli,$sql3);
    $row = mysqli_fetch_assoc($query3);
    $idemp = $row['idemprestimo'];
    $fuso = new datetimezone('America/Sao_Paulo');
    $dataout = new datetime();
    $dataout->setTimezone($fuso);
    $datafim = $dataout->format('Y-m-d H:i:s');
    $sql2 = "UPDATE equipamento SET status = '0' WHERE equipamento.idequipamento = '$id'";
    $query2 = mysqli_query($mysqli,$sql2);
    $sql4 = "UPDATE emprestimo SET datafim = '$datafim' WHERE idemprestimo = '$idemp'";
    $query4 = mysqli_query($mysqli,$sql4);
    $sql5 = "UPDATE emprestimo SET status = '0' WHERE idemprestimo = '$idemp'";
    $query5 = mysqli_query($mysqli,$sql5);
    
    $_SESSION['idemp'] = $idemp;
    echo '1';
}else{
    echo '0';
}

?>