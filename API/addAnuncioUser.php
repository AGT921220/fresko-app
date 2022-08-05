<?php
require_once 'db_connect.php';
try{
if(isset($_POST["data"])){
	
    $data = json_decode($_POST["data"]);
	$stmt = null;
	if($data->has_anuncio == 1){
  		$stmt = $dbConnection->prepare(INSERT_ANUNCIO_USER);
		$stmt = $stmt->execute([$data->id_anuncio, $data->id_user ]);
	}else{
		$stmt = $dbConnection->prepare(DELETE_ANUNCIO_USER);
		$stmt = $stmt->execute([$data->id_anuncio, $data->id_user ]);
	}
	if ($stmt) {
      $response["success"] = true;
	  if($data->has_anuncio == 1){
      	$response["message"] = "El anuncio ha sido asignado al usuario.";
	  }else{
		$response["message"] = "El anuncio ha sido removido del usuario.";
	  }
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error con la promocion..";
    }

}else{
	$response["success"] = false;
	$response["message"] = "Ocurrio un error con la promocion.";
}
}catch(Exception $ex){
	$response["success"] = false;
	$response["message"] = $ex->getMessage();
}



echo json_encode($response);
