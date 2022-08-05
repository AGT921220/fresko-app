<?php
require_once 'db_connect.php';
error_reporting(E_ALL); 
ini_set('display_errors', 1);
ini_set('memory_limit', '-1');
try{
  $stmt = $dbConnection->prepare(QUERY_GET_ANUNCIOS);
  $stmt->execute();
  $result = $stmt->fetchAll();
  $response["anuncios"] = array();
  foreach ($result as $order){
    $promoToAdd = array();
    $promoToAdd["id"] = $order["id"];
    $promoToAdd["titulo"] = $order["titulo"];
    $promoToAdd["imagen"] = $order["imagen"];
    $promoToAdd["anuncios_users"] = array();
    $promoToAdd["anuncios_users"] = getUsersAnuncios($order["id"], $dbConnection);
    array_push($response["anuncios"], $promoToAdd);
  }
}catch(Exception $ex){
  throw $ex->getMessage();
}

echo json_encode($response);

function getUsersAnuncios($id_anuncio, $dbConnection){
  try{
    $stmt = $dbConnection->prepare(GET_USERS_ANUNCIO);
    $stmt->execute([intval( $id_anuncio ), intval($id_anuncio)]);
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $response = array();
    foreach ($result as $product){
      $productToAdd = array();
        $productToAdd["iduser"] = $product["iduser"];
        $productToAdd["has_anuncio"] = $product["has_anuncio"];
        $productToAdd["name"] = utf8_encode($product["name"]);
        $productToAdd["address"] = $product["address"];
        $productToAdd["telephone"] =$product["telephone"];
        array_push($response, $productToAdd);
    }
    return $response;
  }catch(Exception $ex){

  }
}
