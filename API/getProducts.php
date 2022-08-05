<?php
require_once 'db_connect.php';

if (isset($_POST["idcategory"])) {
  
  	$stmt = $dbConnection->prepare(QUERY_SELECT_PRODUCTS);
  	$stmt->execute([intval($_POST["idcategory"])]);
  	$result = $stmt->fetchAll();
  	$response["products"] = array();
	foreach ($result as $product){
    	$productToAdd = array();
      	$productToAdd["idproduct"] = $product["idproduct"];
      	$productToAdd["idcategory"] = $product["idcategory"];
     	$productToAdd["product"] = utf8_encode($product["product"]);
      	$productToAdd["url"] = "http://mercasa.mx/API/IMG/".$product["url"];
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
    $response["success"] = 1;
} else {
	$response["success"] = -1;
	$response["mensaje"] = "No se ha enviado el ID de la categoría";
}	
echo json_encode($response);

?>

