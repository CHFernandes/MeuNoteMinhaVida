<?php

session_start();

include('database.php');

$sql = "SELECT * FROM equipamento";

$result = mysqli_query($mysqli, $sql);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $retorno[$i]['numeracao'] = $row['numeracao'];
        $retorno[$i]['tipo'] = $row['tipo'];
        $retorno[$i]['status'] = $row['status'];
        $i = $i + 1;
    }
}



echo json_encode($retorno);

?>