<?php

    session_start();

    include('database.php');

    $numeracao = $_POST["equipamento"];
    $tipo = $_POST["tipo"];
    $bloco = $_POST["bloco"];
    $sala = $_POST["sala"];

for($i = 0; $i < count($numeracao); $i++){
    $sql = "SELECT * FROM equipamento WHERE numeracao = '$numeracao[$i]' AND idtipo = (SELECT idtipo FROM tipo WHERE Sigla = '$tipo[$i]') AND status = '0' ";
    $sql0 = "SELECT * FROM sala WHERE sala = '$sala[$i]' AND idbloco = (SELECT idbloco FROM bloco WHERE numero = '$bloco[$i]')";
    $query = $mysqli->query($sql);
    $query0 = mysqli_query($mysqli,$sql0);
    
    if($query->num_rows == 1){
        $row = mysqli_fetch_assoc($query);
        $id = $row['idequipamento'];
        $sql2 = "UPDATE equipamento SET status = '1' WHERE equipamento.idequipamento = '$id'";
        $query2 = mysqli_query($mysqli,$sql2);
        $user = $_SESSION['id'];
        $fuso = new datetimezone('America/Sao_Paulo');
        $datain = new datetime();
        $datain->settimezone($fuso);
        $dataout = new datetime();
        $dataout->setTimezone($fuso);
        $dataout->modify('+50 minutes');
        $datainicio = $datain->format('Y-m-d H:i:s');
        $datafim = $dataout->format('Y-m-d H:i:s');
        $row0 = mysqli_fetch_assoc($query0);
        $idsala = $row0['idsala'];
        $sql3 = "INSERT INTO emprestimo(idacademico, idequipamento, idsala, datainicio, datafim, status) VALUES ('$user','$id','$idsala','$datainicio','$datafim', '1')";
        $query3 = mysqli_query($mysqli,$sql3);
        $teste = '1';
    }else{
        $teste = '0';
    }
}

echo $teste;

?>