<?php
require_once 'db_connect.php';
try{
	if($_POST["operation"] == "INSERT"){
		$stmt = $dbConnection->prepare(INSERT_SUBMENU);
		$stmt = $stmt->execute([$_POST["nombre"], $_POST["id_category"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El submenu ha sido creado.";
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error..";
		}
	} else if($_POST["operation"] == "UPDATE"){
		$stmt = $dbConnection->prepare(UPDATE_SUBMENU);
		$stmt = $stmt->execute([$_POST["nombre"], $_POST["id_submenu"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El submenu ha sido actualizado.";
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error..";
		}
	} else{
		$stmt = $dbConnection->prepare(DELETE_SUBMENU);
		$stmt = $stmt->execute([ $_POST["id_submenu"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El submenu ha sido eliminado.";
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error..";
		}
	}
}
catch(Exception $ex){
	$response["success"] = false;
	$response["message"] = $ex->getMessage();
}


echo json_encode($response);
