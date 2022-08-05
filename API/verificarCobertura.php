<?php
require_once 'db_connect.php';

if(isset($_POST["data"])){
	
    $data = json_decode($_POST["data"]);
	
  	$stmt = $dbConnection->prepare(QUERY_VERIFICAR_COBERTURA);
  	$stmt->execute([$data->codigo_postal]);
  	$result = $stmt->fetchAll();

    if (count($result) == 1) {
      $response["success"] = true;
      $response["message"] = "Si se encontro cobertura en la zona.";
    }else{
      	$response["success"] = false;
		$response["message"] = "No se encontro cobertura en la zona.";
    }

}else{
	$response["success"] = false;
	$response["message"] = "No se encontro cobertura en la zona";
}

echo json_encode($response);

?>
