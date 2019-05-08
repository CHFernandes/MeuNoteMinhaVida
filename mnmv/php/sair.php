<?php
	session_start();
	
	//destruimos a sessão
	session_destroy();

	header('location:../index.html');


?>