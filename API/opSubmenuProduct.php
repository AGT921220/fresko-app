<?php
require_once 'db_connect.php';
try{
	if($_POST["operation"] == "INSERT"){
		$stmt = $dbConnection->prepare(INSERT_PRODUCTO_SUBMENU);
		$stmt = $stmt->execute([ $_POST["id_submenu"], $_POST["idproduct"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El producto ha sido agregado al submenu.";
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error..";
		}
	} else{
		$stmt = $dbConnection->prepare(DELETE_PRODUCTO_SUBMENU);
		$stmt = $stmt->execute([ $_POST["id_submenu"], $_POST["idproduct"] ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El producto ha sido eliminado del submenu.";
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
