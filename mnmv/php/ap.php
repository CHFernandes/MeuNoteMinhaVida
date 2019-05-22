<?php
session_start();

if($_SESSION['tipo'] == '2'){
    echo "1";
}else {
    echo "0";
}

?>