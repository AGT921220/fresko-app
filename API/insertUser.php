<?php

require_once 'db_connect.php';

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['telephone']) 
    && isset($_POST['password']) && isset($_POST['activated'])
    && isset($_POST['street']) && isset($_POST['streetnumber'])
    && isset($_POST['interior']) && isset($_POST['colony'])
    && isset($_POST['reference']) ){
                    
    $name = $_POST['name'];
  	$email = $_POST['email'];
  	$telephone = $_POST['telephone'];
  	$password = $_POST['password'];
    $street = $_POST['street'];
    $streetnumber = $_POST['streetnumber'];
    $interior = $_POST['interior'];
    $colony = $_POST['colony'];
    $reference = $_POST['reference'];
    $activated = $_POST['activated'];

	if(existsUser($telephone, $dbConnection)){
    	$response["success"] = -1;
    }else{
    	if(insertUser($name, $email, $telephone,$password, $street, $streetnumber, $interior, $colony, $reference, $activated, $dbConnection)){
        	$response["success"] = 1;
        }else{
          	$response["success"] = 0;
        }
    }

}else{
    $response["success"] = -2;
}
echo json_encode($response);

function existsUser($telephone, $dbConnection){
  return false;
}
function insertUser($name, $email, $telephone,$passwordAux, $street, $streetnumber, $interior, $colony, $reference, $activated,$dbConnection){
  $password = password_hash($passwordAux, PASSWORD_DEFAULT);
  $stmt = $dbConnection->prepare(QUERY_INSERT_USER);
  return $stmt->execute([$name, $email, $telephone, $password,$street, $streetnumber, $interior, $colony, $reference, intval($activated)]);
}

?>
