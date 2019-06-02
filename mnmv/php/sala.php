<?php

session_start();

include('database.php');

$sql = "SELECT * FROM sala";

$result = mysqli_query($mysqli, $sql);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $retorno[$i]['sala'] = $row['sala'];
        $retorno[$i]['bloco'] = $row['idbloco'];
        $i = $i + 1;
    }
}



echo json_encode($retorno);

?>