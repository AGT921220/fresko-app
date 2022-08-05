<?php


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'db_connect.php';

$referidoId = $_POST["referido_id"];
$referenciadoId = $_POST["referenciado_id"];

$response['success'] = false;
$response['message'] = "Ha ocurrido un Error";

if (checkExistence($dbConnection, $referenciadoId)) {
	$response['message'] = 'Ya has registrado un código anteriormente';
	echo json_encode($response);
	return;
}


addReference($dbConnection, $referidoId, $referenciadoId); 

$response['success'] = true;

echo json_encode($response);


function checkExistence($dbConnection, $referenciadoId)
{
	$stmt = $dbConnection->prepare(QUERY_CHECK_REFERENCED);
	$stmt->execute([$referenciadoId]);
	$result = $stmt->fetchAll();
	return (count($result) > 0);
}

function addReference($dbConnection, $referidoId, $referenciadoId)
{
	$stmt = $dbConnection->prepare(INSERT_REFERENCED);
	$stmt = $stmt->execute([$referidoId, $referenciadoId]);
	return $stmt;
}
