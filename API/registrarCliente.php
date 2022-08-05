<?php
require_once 'db_connect.php';

if(isset($_POST["data"])){
	try{
    $data = json_decode($_POST["data"]);
	$cliente = getClienteDuplicado($data->celular, $dbConnection);
	$duplicado = false;
	if(count($cliente) >= 1){
		$response["success"] = false;
		$response["message"] = "Ya existe un cliente con este numero de telefono registrado..";
		$response["data"] = null;
		$duplicado = true;
	}
	if(!$duplicado){
		$stmt = $dbConnection->prepare(QUERY_INSERT_USUARIO);
		$password = password_hash($data->password, PASSWORD_DEFAULT);
		$codigo = getRandomNumber(4);
		$stmt = $stmt->execute([$data->nombre_completo, $data->correo, $data->celular, $password, $data->calle, $data->numero, $data->colonia, $data->cruces, $data->codigo_postal, $codigo, $data->municipio, $data->estado ]);
		if ($stmt) {
		$response["success"] = true;
		$response["message"] = "El registro se ha completado con exito, te ha sido enviado un codigo de verificacion, es necesario para completar con tu registro.";
		$id_user = $dbConnection->lastInsertId();
		insertPromoUser(20, $id_user, $dbConnection);
		insertPromoUser(21, $id_user, $dbConnection);
		insertAnuncioUser(7, $id_user, $dbConnection);
		insertAnuncioUser(8, $id_user, $dbConnection);
		$response["id"] = $id_user;
		$response["data"]= getUserInfo($id_user, $dbConnection);
		$response["promotions_discount"] = getPromosDiscount($user["iduser"], $dbConnection);
		$response["promotions_freedelivery"] = getFreeDelivery($user["iduser"], $dbConnection);
		$response["promotions_freeproduct"] = getPaquetes($user["iduser"], $dbConnection);
		$response["anuncios"] = getAnuncios($user["iduser"], $dbConnection);
		$response["paquetes"] = getPaqueteAnuncios($user["iduser"], $dbConnection);
		$stmt = $dbConnection->prepare(QUERY_SELECT_USER);
		$stmt->execute([$id_user]);
		$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
		if(count($result) >= 1){
			$response["data"] = $result[0];
		}
		}else{
			$response["success"] = false;
			$response["message"] = "Ocurrio un error al registrarte..";
			$response["data"] = null;
		}
	}
}catch(Exception $ex){
	$response["success"] = false;
	$response["message"] = $ex->getMessage();
	$response["data"] = null;
}
}else{
	$response["success"] = false;
	$response["message"] = "No se tienen los parametros necesarios";
	$response["data"] = null;
}

function insertPromoUser($id_promo, $id_user, $dbConnection){
	$stmt = $dbConnection->prepare(INSERT_PROMO_NEW_USER);
	$stmt = $stmt->execute([$id_promo, $id_user ]);
	return true;
}

function insertAnuncioUser($id_anuncio, $id_user, $dbConnection){
	$stmt = $dbConnection->prepare(INSERT_ANUNCIO_NEW_USER);
	$stmt = $stmt->execute([$id_anuncio, $id_user ]);
	return true;
}

function getRandomNumber($digits){
	return rand(pow(10, $digits - 1) - 1, pow(10, $digits) - 1);
  }

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
		$productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
		$productToAdd["isKg"] = $product["isKg"];
		$productToAdd["isPc"] = $product["isPc"];
		$productToAdd["url_product"] = $product["url"];
		array_push($response["promotions"], $productToAdd);
	}
	return $response["promotions"];
  }

  function getClienteDuplicado($telephone, $dbConnection){
	$stmt = $dbConnection->prepare(VALIDATE_CLIENTE);
	$stmt->execute([ $telephone ]);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$response["promotions"] = array();
	foreach ($result as $product){
	  $productToAdd = array();
		$productToAdd["iduser"] = $product["iduser"];
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
		$productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
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
		$productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
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
		$productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["imagen"];
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
  

echo json_encode($response);
