<?php
require_once 'db_connect.php';
try{
	if($_POST["operation"] == "INSERT"){
		$stmt = $dbConnection->prepare(INSERT_COBERTURA);
		$stmt = $stmt->execute([$_POST["codigo_postal"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El codigo postal ha sido agregado.";
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error..";
		}
	} else if($_POST["operation"] == "UPDATE"){
		$stmt = $dbConnection->prepare(UPDATE_COBERTURA);
		$stmt = $stmt->execute([$_POST["codigo_postal"], $_POST["id"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El codigo postal ha sido actualizado.";
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error..";
		}
	} else{
		$stmt = $dbConnection->prepare(DELETE_COBERTURA);
		$stmt = $stmt->execute([ $_POST["id"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El codigo postal ha sido eliminado.";
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
