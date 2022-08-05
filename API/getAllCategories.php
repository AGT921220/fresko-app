<?php
require_once 'db_connect.php';

  
$stmt = $dbConnection->query(QUERY_SELECT_CATEGORIES);
$result = $stmt->fetchAll();
$response["categories"] = array();
foreach ($result as $product){
	$productToAdd = array();
	$productToAdd["id"] = $product["id"];
	$productToAdd["category"] = $product["category"];
	array_push($response["categories"], $productToAdd);
}
echo json_encode($response);

?>

