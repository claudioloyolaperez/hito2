<?php
	$host = 'localhost';
	$mysqlUser = 'root';
	$mysqlPassword = '123claudio581321';
	$dataBase = 'arriendo';

	$mysqli = new mysqli($host, $mysqlUser, $mysqlPassword, $dataBase);
	if($mysqli->connect_errno){
		echo "Error al conectar con la base de datos.";
		exit();
	}
?>