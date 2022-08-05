<?php
require_once 'db_connect.php';
ini_set('memory_limit', '-1');

if(isset($_POST["iduser"])){
    $user = $_POST["iduser"];
    $response["data"]= getUserInfo($user, $dbConnection);
    $response["promotions_discount"] = getPromosDiscount($user, $dbConnection);
    $response["promotions_freedelivery"] = getFreeDelivery($user, $dbConnection);
    $response["promotions_freeproduct"] = getPaquetes($user, $dbConnection);
    $response["anuncios"] = getAnuncios($user, $dbConnection);
    $response["paquetes"] = getPaqueteAnuncios($user, $dbConnection);
    $response["success"] = 1;
    $response["message"] = "OK";
}else{
	$response["success"] = false;
	$response["message"] = "No se han enviado los datos necesarios.";
  $response["data"] = null;
}

echo json_encode($response);

function getUserInfo($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_SELECT_USER);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  if(count($result) >= 1){
    return $result[0];
  } else{
    return null;
  }
}

function getPaqueteAnuncios($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_SELECT_PROMOTIONS_USER_PAQUETES);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response["paquetes"] = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["id"] = $product["id"];
      $productToAdd["promotion_name"] = utf8_encode($product["promotion_name"]);
      $productToAdd["description"] = utf8_encode($product["description"]);
      $productToAdd["free_delivery"] = $product["free_delivery"];
      $productToAdd["is_discount"] =$product["is_discount"];
      $productToAdd["minimum_amount"] = $product["minimum_amount"];
      $productToAdd["discount_price"] = $product["discount_price"];
      $productToAdd["is_free_product"] = $product["is_free_product"];
      $productToAdd["id_product"] = $product["id_product"];
      $productToAdd["qty"] = $product["qty"];
      $productToAdd["product"] = utf8_encode($product["product"]);
      $productToAdd["url"] = $product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["paquetes"], $productToAdd);
  }
  return $response["paquetes"];
}

function getAnuncios($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(GET_ANUNCIO_USER);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response["anuncios"] = array();
  foreach ($result as $product){
      $productToAdd = array();
      $productToAdd["id"] = $product["id"];
      $productToAdd["imagen"] = utf8_encode($product["imagen"]);
      $productToAdd["titulo"] = utf8_encode($product["titulo"]);
      array_push($response["anuncios"], $productToAdd);
  }
  return $response["anuncios"];
}


function getPromosDiscount($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_SELECT_PROMOTIONS_USER_DISCOUNT);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response["promotions"] = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["id"] = $product["id"];
      $productToAdd["promotion_name"] = utf8_encode($product["promotion_name"]);
      $productToAdd["description"] = utf8_encode($product["description"]);
      $productToAdd["free_delivery"] = $product["free_delivery"];
      $productToAdd["is_discount"] =$product["is_discount"];
      $productToAdd["minimum_amount"] = $product["minimum_amount"];
      $productToAdd["discount_price"] = $product["discount_price"];
      $productToAdd["is_free_product"] = $product["is_free_product"];
      $productToAdd["id_product"] = $product["id_product"];
      $productToAdd["qty"] = $product["qty"];
      $productToAdd["product"] = utf8_encode($product["product"]);
      $productToAdd["url"] = $product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["promotions"], $productToAdd);
  }
  return $response["promotions"];
}

function getPaquetes($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_SELECT_PROMOTIONS_USER_FREE_PRODUCT);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response["promotions"] = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["id"] = $product["id"];
      $productToAdd["promotion_name"] = utf8_encode($product["promotion_name"]);
      $productToAdd["description"] = utf8_encode($product["description"]);
      $productToAdd["free_delivery"] = $product["free_delivery"];
      $productToAdd["is_discount"] =$product["is_discount"];
      $productToAdd["minimum_amount"] = $product["minimum_amount"];
      $productToAdd["discount_price"] = $product["discount_price"];
      $productToAdd["is_free_product"] = $product["is_free_product"];
      $productToAdd["id_product"] = $product["id_product"];
      $productToAdd["qty"] = $product["qty"];
      $productToAdd["product"] = utf8_encode($product["product"]);
      $productToAdd["url"] = $product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["promotions"], $productToAdd);
  }
  return $response["promotions"];
}

function getFreeDelivery($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_SELECT_PROMOTIONS_USER_DELIVERY);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response["promotions"] = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["id"] = $product["id"];
      $productToAdd["promotion_name"] = utf8_encode($product["promotion_name"]);
      $productToAdd["description"] = utf8_encode($product["description"]);
      $productToAdd["free_delivery"] = $product["free_delivery"];
      $productToAdd["is_discount"] =$product["is_discount"];
      $productToAdd["minimum_amount"] = $product["minimum_amount"];
      $productToAdd["discount_price"] = $product["discount_price"];
      $productToAdd["is_free_product"] = $product["is_free_product"];
      $productToAdd["id_product"] = $product["id_product"];
      $productToAdd["qty"] = $product["qty"];
      $productToAdd["product"] = utf8_encode($product["product"]);
      $productToAdd["url"] = $product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["promotions"], $productToAdd);
  }
  return $response["promotions"];
}

?>
