<?php

require_once 'db_connect.php';
try{
	if(isset($_POST["iduser"]) && isset($_POST["pickup"]) && isset($_POST["idproduct"]) 
		&& isset($_POST["kg"]) && isset($_POST["pc"]) && isset($_POST["notes"]) && isset($_POST["prices"])
	&& isset($_POST["pickupnotes"])){
		
		$stamp_time = date("Y-m-d H:i:s", strtotime('-6 hours'));
		$stamp = strtotime($stamp_time)." = ".$stamp_time;
		
		$stmt = $dbConnection->prepare(QUERY_INSERT_ORDER_V2);
		if($stmt->execute([intval($_POST["iduser"]), intval($_POST["pickup"]), $_POST["notes"],$_POST["pickupnotes"],$stamp, intval($_POST["free_delivery"]), intval($_POST["discount"]), intval($_POST["free_product"]), $_POST["metodo_pago"]  ])){
	
			$idOrder = $dbConnection->lastInsertId();
			$response["idOrder"] = $idOrder;
			$idProducts = $_POST["idproduct"];
			$kgProducts = $_POST["kg"];
			$pcProducts = $_POST["pc"];
			$prices = $_POST["prices"];
			
			for($i = 0; $i<count($idProducts); $i++){
				$stmt = $dbConnection->prepare(QUERY_INSERT_ORDER_CONTENT);
				$stmt->execute([intval($idOrder), intval($idProducts[$i]),doubleval($kgProducts[$i]) , intval($pcProducts[$i]),doubleval($prices[$i])]);
			}
			$response["success"] = 1;
			$response["message"] = "Pedido generado.";
		
		}else{
			$response["success"] = 0;
			$response["message"] = "Ocurrio un error al generar el pedido";
		}
	}else{
		$response["success"] = -1;
		$response["message"] = "Ocurrio un error al generar el pedido.";
	}
} catch(Exception $ex){
	$response["success"] = -1;
	$response["message"] = $ex->getMessage();
}
echo json_encode($response);
$dbConnection = null;
?>
