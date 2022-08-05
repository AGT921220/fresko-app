<?php
require_once 'db_connect.php';
if(isset($_POST["token"]) && $_POST["token"]==TOKEN){

$stmt = $dbConnection->prepare(QUERY_NOTIFICATIONS);
$stmt->execute();
$result = $stmt->fetchAll();
$response["orders"] = array();
foreach ($result as $order){
  $orderToAdd = array();
  $orderToAdd["idorder"] = $order["idorder"];
  $orderToAdd["name"] = $order["name"];
  array_push($response["orders"], $orderToAdd);
}
$response["success"] = 1;
}else{
  $response["success"] = 0;
}
echo json_encode($response);

?>

