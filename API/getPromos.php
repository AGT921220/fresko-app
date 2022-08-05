<?php
require_once 'db_connect.php';
ini_set('memory_limit', '-1');
$stmt = $dbConnection->prepare(QUERY_GET_PROMOS);
$stmt->execute();
$result = $stmt->fetchAll();
$response["promos"] = array();
foreach ($result as $order){
  $promoToAdd = array();
  $promoToAdd["id"] = $order["id"];
  $promoToAdd["promotion_name"] = utf8_encode($order["promotion_name"]);
  $promoToAdd["description"] = utf8_encode($order["description"]);
  $promoToAdd["tipo_promo"] = $order["tipo_promo"];
  $promoToAdd["discount_price"] = $order["discount_price"];
  $promoToAdd["imagen"] = $order["imagen"];
  $promoToAdd["minimum_amount"] = $order["minimum_amount"];
  $promoToAdd["users_promo"] = array();
  $promoToAdd["users_promo"] = getUsersPromo($order["id"], $dbConnection);
  array_push($response["promos"], $promoToAdd);
}
	

echo json_encode($response);

function getUsersPromo($id_promo, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_GET_PROMOS_USER);
  $stmt->execute([intval( $id_promo), intval($id_promo)]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["iduser"] = $product["iduser"];
      $productToAdd["has_promotion"] = $product["has_promotion"];
      $productToAdd["name"] = utf8_encode($product["name"]);
      $productToAdd["address"] = $product["address"];
      $productToAdd["telephone"] =$product["telephone"];
      $productToAdd["tipo"] =$product["tipo"];
      array_push($response, $productToAdd);
  }
  return $response;
}

?>
