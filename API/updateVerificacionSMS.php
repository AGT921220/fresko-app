<?php
require_once 'db_connect.php';

if(isset($_POST["data"])){
	
    $data = json_decode($_POST["data"]);
	
  	$stmt = $dbConnection->prepare(QUERY_UPDATE_USER_VERIFICADO);
	$stmt = $stmt->execute([$data->id_user ]);
	if ($stmt) {
      $response["success"] = true;
      $response["message"] = "Tu cuenta ha sido verificada con exito.";
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error al registrarte..";
    }

}else{
	$response["success"] = false;
	$response["message"] = "No se tienen los parametros necesarios";
}

echo json_encode($response);

?>
