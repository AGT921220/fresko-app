<?php
require_once 'db_connect.php';

$stmt = $dbConnection->prepare(GET_COBERTURAS);
$stmt->execute();
$result = $stmt->fetchAll();
$response["coberturas"] = array();
foreach ($result as $category){
  $promoToAdd = array();
  $promoToAdd["id"] = $category["id"];
  $promoToAdd["codigo_postal"] = $category["codigo_postal"];
  array_push($response["coberturas"], $promoToAdd);
}

echo json_encode($response);


?>
