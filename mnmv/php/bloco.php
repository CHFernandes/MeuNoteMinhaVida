<?php

session_start();

include('database.php');

$sql = "SELECT * FROM bloco";

$result = mysqli_query($mysqli) or die($mysql->error);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $retorno[$i]['numero'] = $row['numero'];
        $i = $i + 1;
    }
}



echo json_encode($retorno);

?>