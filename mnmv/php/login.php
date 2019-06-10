<?php
    
    include('database.php');

    $matricula = $_POST["matricula"];
    $password = $_POST["senha"];

    $sql = "SELECT * FROM academico WHERE matricula = '$matricula' AND senha = '$password' ";

    $query = $mysqli->query($sql);

    if($query->num_rows == 1){
        $row = mysqli_fetch_assoc($query);
        session_start();
        $status = $row['status'];
        if($status == '0'){
            $_SESSION['id'] = $row['Idacademico'];
            $_SESSION['tipo'] = $row['tipo'];
            if ($row['tipo'] == 0){
                $retorno = '2';
            }else{
                $retorno = '1';
            }
        }else{
            $retorno = '3';
        }
        
    }else{
        $retorno = '0';
    }

    echo $retorno;
?>