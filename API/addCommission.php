<?php

require_once 'db_connect.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('memory_limit', '-1');



$userId = $_POST['user_id'];
$commission = $_POST['commission'];

$stmt = $dbConnection->prepare(QUERY_INSERT_ADD_COMMISSION_BY_USER_ID);
$stmt->execute([intval($userId),$commission]);
