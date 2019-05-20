<?php

    session_start();

    include('database.php');

    $numeracao = $_POST["equipamento"];
    $tipo = $_POST["tipo"];

for($i = 0; $i < count($numeracao); $i++){
    $sql = "SELECT * FROM equipamento WHERE numeracao = '$numeracao[$i]' AND idtipo = (SELECT idtipo FROM tipo WHERE Sigla = '$tipo[$i]') AND status = '0' ";

    $query = $mysqli->query($sql);
    
    if($query->num_rows == 1){
        $row = mysqli_fetch_assoc($query);
        $id = $row['idequipamento'];
        $sql2 = "UPDATE equipamento SET status = '1' WHERE equipamento.idequipamento = '$id'";
        $query2 =mysqli_query($mysqli,$sql2);
        $user = $_SESSION['id'];
        $fuso = new datetimezone('America/Sao_Paulo');
        $datain = new datetime();
        $datain->settimezone($fuso);
        $dataout = new datetime();
        $dataout->setTimezone($fuso);
        $dataout->modify('+50 minutes');
        $datainicio = $datain->format('Y-m-d H:i:s');
        $datafim = $dataout->format('Y-m-d H:i:s');
        $sql3 = "INSERT INTO emprestimo(idacademico, idequipamento, datainicio, datafim, status) VALUES ('$user','$id','$datainicio','$datafim', '1')";
        $query3 = mysqli_query($mysqli,$sql3);
        $teste = '1';
    }else{
        $teste = '0';
    }
}

echo $teste;

?>