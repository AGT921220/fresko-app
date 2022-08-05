<?php
require_once 'db_connect.php';

if(isset($_POST["token"]) 
    && $_POST["token"]==TOKEN 
    && isset($_POST["date_start"]) 
    && isset($_POST["date_end"]) ){
        
    $timestamp_start = strtotime($_POST["date_start"]);
    $timestamp_end = strtotime($_POST["date_end"]);
  $stmt = $dbConnection->prepare(QUERY_SELECT_ORDERS_BY_DATE);
  $stmt->execute([$timestamp_start,$timestamp_end]);
  $result = $stmt->fetchAll();
  $response["orders"] = array();
  foreach ($result as $order){
    $orderToAdd = array();
    $orderToAdd["idorder"] = $order["idorder"];
	$orderToAdd["timestamp"] = explode(" = ",$order["timestamp"])[1];
    $orderToAdd["name"] = $order["name"];
    $orderToAdd["street"] = $order["street"];
    $orderToAdd["streetnumber"] = $order["streetnumber"];
    $orderToAdd["colony"] = $order["colony"];
    
    $orderToAdd["telephone"] = $order["telephone"];
    $orderToAdd["notes"] = $order["notes"];
	if($order["pickup"] == "0"){
		$orderToAdd["pickup"] = "Horario matutino";
		$orderToAdd["pickupnotes"] = "9:30pm a 12:30pm";
	}else if($order["pickup"] == "1"){
		$orderToAdd["pickup"] = "Horario vespertino";
		$orderToAdd["pickupnotes"] = "4:00pm a 6:45pm";
	}else{
		$orderToAdd["pickup"] = "Horario elegido por cliente";
		$orderToAdd["pickupnotes"] = $order["pickupnotes"];

	}
	

    
    $stmt = $dbConnection->prepare(QUERY_SELECT_CONTENT_ORDER);
  	$stmt->execute([intval($order["idorder"])]);
    $resultContent = $stmt->fetchAll();
	$contentStr = "";
	$price = 0.0;
    foreach ($resultContent as $content){
      $contentStr .= "-".$content["product"];
	  $contentStr .= " (Kilos: ".$content["kg"].", ";
	  $contentStr .= " Piezas: ".$content["pc"].")";
	  $contentStr .= "\n";
      $price += doubleval($content["price"]);
    }
	$orderToAdd["price"] = $price;

	$orderToAdd["content"] = $contentStr;
    array_push($response["orders"], $orderToAdd);
  }
  $response["success"] = 1;

  
}else{
	$response["success"] = 0;
}
echo json_encode($response);
?>

