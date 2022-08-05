<?php
require_once 'db_connect.php';
try{
	
	$photoTmpPath = $_FILES['imagen']['tmp_name'];
	$base64 = null;
	if($photoTmpPath && $photoTmpPath != null){
		$imgCode = file_get_contents($photoTmpPath);
		$base64 = base64_encode($imgCode);	
	} else{
		$base64 = $_POST["imagen"];
	}
  	$stmt = $dbConnection->prepare(INSERT_ANUNCIO);
	$stmt = $stmt->execute([$base64, $_POST["titulo"]  ]);
	if ($stmt) {
      $response["success"] = true;
      $response["message"] = "El anuncio ha sido registrado.";
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error al registrar el anuncio..";
    }

}
catch(Exception $ex){
	$response["success"] = false;
	$response["message"] = $ex->getMessage();
}


echo json_encode($response);
