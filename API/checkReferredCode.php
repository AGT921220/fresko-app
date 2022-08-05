<?php
require_once 'db_connect.php';

$response['success']= false;
$response['message'] = "El código no existe";

if (!isset($_GET["referred_code"])) {
	$response['success'] = false;
	$response['message'] = "Error al procesar Petición";
}

$referredCode = json_decode($_GET["referred_code"]);

$stmt = $dbConnection->prepare(QUERY_VERIFY_REFERRED);
$stmt->execute([$referredCode]);
$result = $stmt->fetchAll();
if ((count($result) > 0)) {
	$response['success'] = true;
	$response['message'] = $result[0]['iduser'];
}

echo json_encode($response);
