<?php

session_start();

include('database.php');

$sql = "SELECT * FROM equipamento";

$result = mysqli_query($mysqli, $sql);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $retorno[$i]['numeracao'] = $row['numeracao'];
        $idtipo = $row['idtipo'];
        $sql1 = "SELECT * FROM tipo WHERE idtipo = '$idtipo'";
        $query1 = mysqli_query($mysqli,$sql1);
        $row1 = mysqli_fetch_assoc($query1);
        $retorno[$i]['tipo'] = $row1['Sigla'];
        $retorno[$i]['descricao'] = $row1['Descricao'];
        $retorno[$i]['status'] = $row['status'];
        $idbloco = $row['idbloco'];
        $sql2 = "SELECT * FROM bloco WHERE idbloco = '$idbloco'";
        $query2 = mysqli_query($mysqli,$sql2);
        $row2 = mysqli_fetch_assoc($query2);
        $retorno[$i]['bloco'] = $row2['numero'];
        $i = $i + 1;
    }
}



echo json_encode($retorno);

?>