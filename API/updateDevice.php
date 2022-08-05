<?php

require_once 'db_connect.php';
try{
  if (isset($_POST['iduser'])  && isset($_POST['device_id'])){
                      
      $iduser = $_POST['iduser'];
      $device_id = $_POST['device_id'];


      if(updateDeviceId($iduser, $device_id, $dbConnection)){
        $response["success"] = true;
        $response["message"] = "OK.";
      }else{
        $response["message"] = "Ocurrio un error al actualizar el device.";
        $response["success"] = false;
      }
  }else{
      $response["message"] = "Error.";
      $response["success"] = false;
  }
}catch(Exception $ex){
  $response["message"] = $ex->getMessage();
  $response["success"] = false;
}
echo json_encode($response);


function updateDeviceId($iduser, $device_id, $dbConnection){
  $stmt = $dbConnection->prepare(UPDATE_DEVICE_ID);
  return $stmt->execute([ intval($iduser), $device_id, $device_id ]);
}



?>
