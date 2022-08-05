<?php
require_once 'db_connect.php';

if(isset($_POST["token"]) && $_POST["token"]==TOKEN){
	$result;
	if(isset($_POST["iduser"])){
	  $stmt = $dbConnection->prepare(QUERY_SELECT_ORDERS_USER);
	  $stmt->execute([intval($_POST["iduser"])]);
	  $result = $stmt->fetchAll();
		
	}else{
	  $stmt = $dbConnection->prepare(QUERY_SELECT_ORDERS);
	  $stmt->execute();
	  $result = $stmt->fetchAll();
	}

  $response["orders"] = array();
  
  foreach ($result as $order){
    $orderToAdd = array();
    $orderToAdd["idorder"] = $order["idorder"];
    $orderToAdd["name"] = utf8_encode($order["name"]);
    $orderToAdd["street"] = utf8_encode($order["street"]);
    $orderToAdd["streetnumber"] = utf8_encode($order["streetnumber"]);
    $orderToAdd["colony"] = utf8_encode($order["colony"]);
    $orderToAdd["telephone"] = $order["telephone"];
    $orderToAdd["notes"] = utf8_encode($order["notes"]);
    $orderToAdd["pickup"] = $order["pickup"];
    $orderToAdd["pickupnotes"] = utf8_encode($order["pickupnotes"]);
    $orderToAdd["timestamp"] = $order["timestamp"];
    $orderToAdd["pagado"] = $order["pagado"];
    $orderToAdd["subtotal"] = $order["subtotal"];
    $orderToAdd["subtotal_real"] = $order["subtotal"];
    $orderToAdd["discount"] = $order["discount"];
    $orderToAdd["free_delivery"] = $order["free_delivery"];
    $orderToAdd["free_product"] = $order["free_product"];

    $orderToAdd["tipo_pago"] = $order["tipo_pago"];
    $orderToAdd["pagado"] = $order["pagado"];

    $stmt = $dbConnection->prepare(QUERY_SELECT_CONTENT_ORDER);
  	$stmt->execute([intval($order["idorder"])]);
    $resultContent = $stmt->fetchAll();
  	$orderToAdd["content_order"] = array();
    $total_estimado = 0;
    foreach ($resultContent as $content){
      $contentToAdd = array();
      $contentToAdd["idordercontent"] = $content["idordercontent"];
      $contentToAdd["idorder"] = $content["idorder"];
      $contentToAdd["product"] = utf8_encode($content["product"]);
      $contentToAdd["kg"] = $content["kg"];
      $contentToAdd["pc"] = $content["pc"];
      $contentToAdd["price"] = $content["price"];
      $total_estimado += doubleval($content["price"]);
      array_push($orderToAdd["content_order"], $contentToAdd);
    }

    if($orderToAdd["subtotal"] != 0){
      $orderToAdd["price"] = $orderToAdd["subtotal"];
      $orderToAdd["price_real"] = $orderToAdd["subtotal"];
      $total_estimado = $orderToAdd["subtotal"];
    } else{
      $orderToAdd["price"] = $total_estimado;
      $orderToAdd["price_real"] = $total_estimado;
    }

    if($orderToAdd["discount"] != null && $orderToAdd["discount"] != "0"){
      $descuento = $orderToAdd["price_real"] * ($orderToAdd["discount"] / 100);
      $orderToAdd["price_real"] = $orderToAdd["price_real"] - $descuento;
    }

    
    if($orderToAdd["free_delivery"] == "1") {
      $orderToAdd["price_real"] = $orderToAdd["price_real"] - 45;
    }  else{
      $orderToAdd["price_real"] = $orderToAdd["price_real"] + 45;
    }
    

    array_push($response["orders"], $orderToAdd);
  }
  $response["success"] = 1;

  
}else{
	$response["success"] = 0;
}
echo json_encode($response);
?>

