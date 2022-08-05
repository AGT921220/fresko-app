<?php
require_once 'db_connect.php';
//define("QUERY_EDIT_USER", "UPDATE agroinvex_user SET name=?, email=?, telephone=?, activated=? WHERE iduser=?");
//define("QUERY_EDIT_USER_PASSWORD", "UPDATE agroinvex_user SET name=?, email=?, telephone=?,  password=? ,activated=? WHERE iduser=?");

if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['telephone']) 
    && isset($_POST['iduser']) && isset($_POST['activated'])
    && isset($_POST['street']) && isset($_POST['streetnumber']) && isset($_POST['interior']) 
    && isset($_POST['colony']) && isset($_POST['reference'])){

    $iduser = $_POST['iduser'];
    $name = $_POST['name'];
  	$email = $_POST['email'];
  	$telephone = $_POST['telephone'];
  	$password = "";
    if(isset($_POST['password'])){
      	$password = $_POST['password'];
    }
    $street = $_POST['street'];
    $streetnumber = $_POST['streetnumber'];
    $interior = $_POST['interior'];
    $colony = $_POST['colony'];
    $reference = $_POST['reference'];
    $activated = $_POST['activated'];

  	$success = false;
  	if(strlen($password) > 0){
      $password = password_hash($password, PASSWORD_DEFAULT);
      $stmt = $dbConnection->prepare(QUERY_EDIT_USER_PASSWORD);
      $success = $stmt->execute([$name, $email, $telephone, $password,$street,$streetnumber,$interior,$colony,$reference, intval($activated), intval($iduser)]);
    }else{
      $stmt = $dbConnection->prepare(QUERY_EDIT_USER);
      $success = $stmt->execute([$name, $email, $telephone,$street,$streetnumber,$interior,$colony,$reference, intval($activated), intval($iduser)]);
    }
	
  if($success){
    $response["success"] = 1;
  }else{
    $response["success"] = -0;
    $response["mensaje"] = "No se ha podido actualizar";
  }

}else{
    $response["success"] = -2;
}
echo json_encode($response);


?>
