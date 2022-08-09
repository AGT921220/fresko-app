<?php
require_once 'db_connect.php';
ini_set('memory_limit', '-1');

  $userId = $_GET['user_id'];

  // $stmt = $dbConnection->prepare(QUERY_SELECT_REFERRED_COMISSIONS_BY_USER_ID);
  // $stmt->execute($userId);
  // $result = $stmt->fetchAll();



  $stmt = $dbConnection->prepare(QUERY_SELECT_REFERRED_COMISSIONS_BY_USER_ID);
  $stmt->execute([intval( $userId )]);

  $response["commissions"] = $stmt->fetchAll(PDO::FETCH_ASSOC);


  $stmt = $dbConnection->prepare(QUERY_SELECT_REFERREDS_BY_USER_ID);
  $stmt->execute([intval( $userId )]);
  $response["referreds"] = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];

  echo json_encode($response);
