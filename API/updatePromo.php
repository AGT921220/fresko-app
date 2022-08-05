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

  	$stmt = $dbConnection->prepare(UPDATE_PROMO);
	$stmt = $stmt->execute([$_POST["promotion_name"], $_POST["description"], $_POST["free_delivery"], $_POST["is_discount"], $_POST["minimum_amount"], $_POST["discount_price"], $base64, $_POST["id"]  ]);
	if ($stmt) {
      $response["success"] = true;
      $response["message"] = "La promocion ha sido actualizada.";
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error al actualizar la promocion..";
    }

}
catch(Exception $ex){
	$response["success"] = true;
	$response["message"] = $ex->getMessage();
}


echo json_encode($response);
