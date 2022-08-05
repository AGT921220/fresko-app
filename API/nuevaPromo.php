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
	$es_paquete = 0;
	if( $_POST["tipo"] != "PROMOCION" ){
		$es_paquete = 1;
	}
  	$stmt = $dbConnection->prepare(INSERT_PROMO);
	$stmt = $stmt->execute([$_POST["promotion_name"], $_POST["description"], $_POST["free_delivery"], $_POST["is_discount"], $_POST["minimum_amount"], $_POST["discount_price"], $base64, $es_paquete  ]);
	if ($stmt) {
      $response["success"] = true;
      $response["message"] = "La promocion ha sido registrada.";
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error al registrar la promocion..";
    }

}
catch(Exception $ex){
	$response["success"] = false;
	$response["message"] = $ex->getMessage();
}


echo json_encode($response);
