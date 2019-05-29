<?php

session_start();

include('database.php');

$sql = "SELECT * FROM sala";

$result = mysqli_query($mysqli, $sql);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $retorno[$i]['nome'] = $row['nome'];
        $idbloco = $row['idbloco'];
        $sql1 = "SELECT * FROM tipo WHERE idbloco = '$idbloco'";
        $query1 = mysqli_query($mysqli,$sql1);
        $row1 = mysqli_fetch_assoc($query1);
        $retorno[$i]['bloco'] = $row1['idbloco'];
        $i = $i + 1;
    }
}



echo json_encode($retorno);

?>