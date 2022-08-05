<?php
require_once 'db_connect.php';

if(isset($_POST["data"])){
	
    $data = json_decode($_POST["data"]);
	
  	$stmt = $dbConnection->prepare(QUERY_SIN_COBERTURA);
	$stmt = $stmt->execute([$data->codigo_postal, $data->correo ]);
	if ($stmt) {
      $response["success"] = true;
      $response["message"] = "Se ha registrado tu codigo postal, te avisaremos cuando haya cobertura en tu zona.";
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error al registrar..";
    }

}else{
	$response["success"] = false;
	$response["message"] = "No se pudo registrar tu zona de cobertura.";
}



echo json_encode($response);
