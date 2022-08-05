<?php
require_once 'db_connect.php';


  
$stmt = $dbConnection->prepare(QUERY_GET_FLAGS);
$stmt->execute();
$result = $stmt->fetchAll();
$response["data"] = array();
foreach ($result as $flag){
	$flagToAdd = array();
	$flagToAdd["id"] = $flag["id"];
	$flagToAdd["flag"] = $flag["flag"];
	$flagToAdd["value"] =$flag["value"];
	array_push($response["data"], $flagToAdd);
}

echo json_encode($response);

?>

