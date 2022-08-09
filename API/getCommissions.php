<?php
require_once 'db_connect.php';
ini_set('memory_limit', '-1');

$now = date('Y-m-d H:i:s');


$stmt = $dbConnection->prepare(QUERY_SELECT_REFERRED_COMISSIONS);
$stmt->execute([$now]);

$response["commissions"] = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($response);
