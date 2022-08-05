<?php
require_once 'db_connect.php';

$stmt = $dbConnection->prepare(GET_CATEGORYS);
$stmt->execute();
$result = $stmt->fetchAll();
$response["categories"] = array();
foreach ($result as $category){
  $promoToAdd = array();
  $promoToAdd["id"] = $category["id"];
  $promoToAdd["nombre"] = utf8_encode($category["category"]);
  $promoToAdd["products"] = getProductsCategory($category["id"], $dbConnection);
  $promoToAdd["submenus"] = getSubmenus($category["id"], $dbConnection);
  array_push($response["categories"], $promoToAdd);
}
	

echo json_encode($response);

function getProductsCategory($id_category, $dbConnection){
  $stmt = $dbConnection->prepare(GET_PRODUCTS_CATEGORY);
  $stmt->execute([intval( $id_category )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["idproduct"] = $product["idproduct"];
      $productToAdd["idcategory"] = $product["idcategory"];
      $productToAdd["nombre"] = utf8_encode($product["product"]);
      array_push($response, $productToAdd);
  }
  return $response;
}

function getSubmenus($id_category, $dbConnection){
  $stmt = $dbConnection->prepare(GET_CATEGORYS_SUBMENU);
  $stmt->execute([intval( $id_category )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["id"] = $product["id"];
      $productToAdd["nombre"] = $product["nombre"];
      $productToAdd["id_category"] = $product["id_category"];
      $productToAdd["products"] = getProductsSubmenu($product["id"], $dbConnection);
      array_push($response, $productToAdd);
  }
  return $response;
}


function getProductsSubmenu($id_submenu, $dbConnection){
  $stmt = $dbConnection->prepare(GET_PRODUCTS_SUBMENU);
  $stmt->execute([intval( $id_submenu )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $response = array();
  foreach ($result as $product){
    $productToAdd = array();
      $productToAdd["idproduct"] = $product["idproduct"];
      array_push($response, $productToAdd);
  }
  return $response;
}
?>
