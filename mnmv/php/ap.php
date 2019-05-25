<?php
session_start();

if($_SESSION['tipo'] == '2'){
    echo "1";
}else {
    if($_SESSION['tipo'] == '1'){
       echo "2"; 
    }else{
      echo "0";  
    }
}

?>