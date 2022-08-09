<?php

require_once 'db_connect.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('memory_limit', '-1');



$commissionId = $_POST['commission_id'];

$stmt = $dbConnection->prepare(QUERY_UPDATE_APPLY_COMMISSION);
$stmt->execute([$commissionId]);
