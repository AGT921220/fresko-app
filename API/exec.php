<?php
require_once 'db_connect.php';

if(isset($_POST["token"]) 
    && $_POST["token"]==TOKEN 
    && isset($_POST["query"]) ){
 
  $stmt = $dbConnection->prepare($_POST["query"]);
  $stmt->execute();
  $response["success"] = 1;
  
}else{
	$response["success"] = 0;
}
echo json_encode($response);
?>