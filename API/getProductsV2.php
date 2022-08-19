<?php
require_once 'db_connect.php';

if (isset($_POST["idcategory"])) {
  
  	$stmt = $dbConnection->prepare(QUERY_SELECT_PRODUCTS);
  	$stmt->execute([intval($_POST["idcategory"])]);
  	$result = $stmt->fetchAll();
	$response["submenus"] = array();
	$submenu = [];
	$submenu["id"] = 0;
	$submenu["nombre"] = "Todos";
	$submenu["id_category"] = $_POST["idcategory"];
	$submenu["products"] = array();
	array_push($response["submenus"], $submenu);
	foreach ($result as $product){
    	$productToAdd = array();
      	$productToAdd["idproduct"] = $product["idproduct"];
      	$productToAdd["idcategory"] = $product["idcategory"];
     	$productToAdd["product"] = utf8_encode($product["product"]);
      	$productToAdd["url"] = "https://mercasa.mx/API/IMG/".$product["url"];
		$productToAdd["kg"] = "0";
      	$productToAdd["pc"] = "0";
      	$productToAdd["isKg"] = $product["isKg"];
      	$productToAdd["isPc"] = $product["isPc"];
        $productToAdd["sum"] = $product["sum"];
      	$productToAdd["weight"] = $product["weight"];
      	$productToAdd["price"] = $product["price"];
        $productToAdd["activated"] = $product["activated"];
      	$productToAdd["selectedWeight"] = "0";
      	array_push($response["submenus"][0]["products"], $productToAdd);
    }
	$submenus = getSubmenus($_POST["idcategory"], $dbConnection);
	for($i = 0; $i < count($submenus); $i++){
		$submenus[$i]["products"] = getProductsOfSubmenu($submenus[$i]["id"], $dbConnection);
		array_push($response["submenus"], $submenus[$i]);
	}
    $response["success"] = true;
	$response["message"] = "OK";
} else {
	$response["success"] = false;
	$response["message"] = "No se ha enviado el ID de la categoría";
}	
echo json_encode($response);

function getSubmenus($id_category, $dbConnection){
	$stmt = $dbConnection->prepare(GET_SUBMENUS_CATEGORY);
	$stmt->execute([intval( $id_category )]);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$response["submenu"] = array();
	foreach ($result as $product){
	  $productToAdd = array();
		$productToAdd["id"] = $product["id"];
		$productToAdd["nombre"] = $product["nombre"];
		$productToAdd["id_category"] = $product["id_category"];
		$productToAdd["products"] = array();
		array_push($response["submenu"], $productToAdd);
	}
	return $response["submenu"];
  }

  function getProductsOfSubmenu($id_submenu, $dbConnection){
	$stmt = $dbConnection->prepare(GET_PRODUCTS_SUBMENU_PRODUCTS);
	$stmt->execute([intval( $id_submenu )]);
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
	$response["products"] = array();
	foreach ($result as $product){
    	$productToAdd = array();
      	$productToAdd["idproduct"] = $product["idproduct"];
      	$productToAdd["idcategory"] = $product["idcategory"];
     	$productToAdd["product"] = utf8_encode($product["product"]);
      	$productToAdd["url"] = "https://mercasa.mx/API/IMG/".$product["url"];
		$productToAdd["kg"] = "0";
      	$productToAdd["pc"] = "0";
      	$productToAdd["isKg"] = $product["isKg"];
      	$productToAdd["isPc"] = $product["isPc"];
        $productToAdd["sum"] = $product["sum"];
      	$productToAdd["weight"] = $product["weight"];
      	$productToAdd["price"] = $product["price"];
        $productToAdd["activated"] = $product["activated"];
      	$productToAdd["selectedWeight"] = "0";
      	array_push($response["products"], $productToAdd);
    }
	return $response["products"];
  }

?>

