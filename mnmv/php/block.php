<?php

session_start();

include('database.php');

$nome = $_POST['nome'];
$user = $_POST['user'];

$sql = "select * from academico where nome = '$nome' AND matricula = '$user'";
$query = mysqli_query($mysqli,$sql);

if($query->num_rows == 1){
    $row = mysqli_fetch_assoc($query);
    if($row['tipo'] == '1'){
        $idacad = $row['Idacademico'];
        $sql1 = "UPDATE academico set status = '1' where Idacademico = '$idacad'";
        $query1 = mysqli_query($mysqli,$sql1);
        echo "1";
    }else{
        echo "0";
    }
}else{
    echo "0";
}

?>