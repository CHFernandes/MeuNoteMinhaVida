<?php
session_start();

include('database.php');

$id = $_SESSION['id'];

$sql = "SELECT * FROM emprestimo";

$result = mysqli_query($mysqli, $sql);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $idacad = $row['idacademico'];
        $sql3 = "SELECT * FROM academico WHERE Idacademico = '$idacad'";
        $result3 = mysqli_query($mysqli, $sql3);
        $row3 = mysqli_fetch_assoc($result3);
        $retorno[$i]['academico'] = $row3['nome'];
        $idequip = $row['idequipamento'];
        $sql2 = "SELECT * FROM equipamento WHERE idequipamento = '$idequip'";
        $result2 = mysqli_query($mysqli, $sql2);
        $row2 = mysqli_fetch_assoc($result2);
        $retorno[$i]['numeracao'] = $row2['numeracao'];
        $retorno[$i]['tipo'] = $row2['tipo'];
        $retorno[$i]['datainicio'] = $row['datainicio'];
        $retorno[$i]['datafim'] =  $row['datafim'];
        if($row['status'] == '0'){
            $retorno[$i]['status'] = 'Fechado';
        }else{
            $retorno[$i]['status'] = 'Aberto';
        }
        $i = $i + 1;
    }
    
    echo json_encode($retorno);
}

?>