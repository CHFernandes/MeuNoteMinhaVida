<?php
session_start();

include('database.php');

$id = $_SESSION['id'];

$sql = "SELECT * FROM emprestimo WHERE idacademico = '$id'";

$result = mysqli_query($mysqli, $sql);

$i = 0;

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $idequip = $row['idequipamento'];
        $sql2 = "SELECT * FROM equipamento WHERE idequipamento = '$idequip'";
        $result2 = mysqli_query($mysqli, $sql2);
        $row2 = mysqli_fetch_assoc($result2);
        $retorno[$i]['numeracao'] = $row2['numeracao'];
        $idtipo = $row2['idtipo'];
        $sql1 = "SELECT * FROM tipo WHERE idtipo = '$idtipo'";
        $query1 = mysqli_query($mysqli,$sql1);
        $row1 = mysqli_fetch_assoc($query1);
        $descricao = $row1['Descricao'];
        $retorno[$i]['descricao'] = $descricao;
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