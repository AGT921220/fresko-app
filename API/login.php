<?php
require_once 'db_connect.php';
ini_set('memory_limit', '-1');
if(isset($_POST["name"]) && isset($_POST["password"])){
	
    $name = $_POST["name"];
    $password = $_POST["password"];
	
  	$stmt = $dbConnection->prepare(QUERY_LOGIN);
  	$stmt->execute([$name]);
  	$result = $stmt->fetchAll();

    if (count($result) == 1) {
      $user = $result[0];
      if($user["activated"] == 1){
        if (password_verify($password, $user["password"])) {
          $response["iduser"] = $user["iduser"];
          $response["success"] = 1;
          $response["data"]= getUserInfo($user["iduser"], $dbConnection);
          $response["promotions_discount"] = getPromosDiscount($user["iduser"], $dbConnection);
          $response["promotions_freedelivery"] = getFreeDelivery($user["iduser"], $dbConnection);
          $response["promotions_freeproduct"] = getPaquetes($user["iduser"], $dbConnection);
          $response["anuncios"] = getAnuncios($user["iduser"], $dbConnection);
          $response["paquetes"] = getPaqueteAnuncios($user["iduser"], $dbConnection);

        }else{
          $response["success"] = 0;
          $response["mensaje"] = "La contraseña no es correcta.";
          $response["data"] = null;
        }

      }else{
        $response["success"] = 0;
		    $response["mensaje"] = "El usuario está bloqueado.";
        $response["data"] = null;
      }
    }else{
      	$response["success"] = -1;
		    $response["mensaje"] = "No existe el usuario.";
        $response["data"] = null;
    }

}else{
	$response["success"] = -2;
	$response["mensaje"] = "No se han enviado los datos necesarios.";
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
      // $productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["promotions"], $productToAdd);
  }
  return $response["promotions"];
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
      // $productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["paquetes"], $productToAdd);
  }
  return $response["paquetes"];
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
      // $productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["promotions"], $productToAdd);
  }
  return $response["promotions"];
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
      // $productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
      $productToAdd["isKg"] = $product["isKg"];
      $productToAdd["isPc"] = $product["isPc"];
      $productToAdd["url_product"] = $product["url"];
      array_push($response["promotions"], $productToAdd);
  }
  return $response["promotions"];
}

?>
