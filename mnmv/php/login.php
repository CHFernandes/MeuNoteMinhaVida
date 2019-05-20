<?php
    
    include('database.php');

    $matricula = $_POST["matricula"];
    $password = $_POST["senha"];

    $sql = "SELECT * FROM academico WHERE matricula = '$matricula' AND senha = '$password' ";

    $query = $mysqli->query($sql);

    if($query->num_rows == 1){
        session_start();
        $result = $query->fetch_assoc();
        $_SESSION['id'] = $result['Idacademico'];
        $_SESSION['tipo'] = $result['tipo'];
        if ($result['tipo'] == 0){
            $retorno = '2';
        }else{
            $retorno = '1';
        }
    }else{
        $retorno = '0';
    }

    echo $retorno;
?>