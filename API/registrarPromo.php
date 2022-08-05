<?php
require_once 'db_connect.php';

if(isset($_POST["data"])){
	
    $data = json_decode($_POST["data"]);
	
  	$stmt = $dbConnection->prepare(INSERT_PROMO);
	$stmt = $stmt->execute([$data->promotion_name, $data->description, $data->free_delivery, $data->is_discount, $data->minimum_amount, $data->discount_price, $data->imagen  ]);
	if ($stmt) {
      $response["success"] = true;
      $response["message"] = "La promocion ha sido registrada, asignala a los usuarios que desees.";
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error al registrar la promocion..";
    }

}else{
	$response["success"] = false;
	$response["message"] = "No se pudo registrar la promocion.";
}



echo json_encode($response);
