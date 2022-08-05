<?php
require_once 'db_connect.php';
if(isset($_POST["token"]) && $_POST["token"]==TOKEN){

    if(isset($_POST["name"]) && strlen($_POST["name"]) > 0){
        $stmt = $dbConnection->prepare(QUERY_SELECT_ALL_USERS_BY_NAME);
        $name = '%'.$_POST["name"].'%';
        $stmt->execute([$name]);
        $result = $stmt->fetchAll();
    }else{
        $stmt = $dbConnection->prepare(QUERY_SELECT_ALL_USERS);
        $stmt->execute();
        $result = $stmt->fetchAll();
    }


  $response["users"] = array();
  foreach ($result as $resultUser){
    $user = array();
    $user["iduser"] = $resultUser["iduser"];
    $user["name"] = $resultUser["name"];
    $user["email"] = $resultUser["email"];
    $user["telephone"] = $resultUser["telephone"];
    $user["password"] = $resultUser["password"];
    $user["street"] = $resultUser["street"];
    $user["streetnumber"] = $resultUser["streetnumber"];
    $user["interior"] = $resultUser["interior"];
    $user["colony"] = $resultUser["colony"];
    $user["reference"] = $resultUser["reference"];
    $user["activated"] = $resultUser["activated"];
    array_push($response["users"], $user);
  }
  $response["success"] = 1;
}else{
  $response["success"] = 0;
}
echo json_encode($response);

?>
