<?php

require_once 'db_connect.php';
try{
  if (isset($_POST['idorder'])  && isset($_POST['precio_final'])){
                      
      $idorder = $_POST['idorder'];
      $precio_final = $_POST['precio_final'];


      if(updateUser($idorder, $precio_final, $dbConnection)){
        $response["success"] = true;
        $response["message"] = "El precio ha sido actualizado y enviado al cliente.";
      }else{
        $response["message"] = "Ocurrio un error al actualizar el precio.";
        $response["success"] = false;
      }
      if($response["success"] == true){
        if($_POST["tipo_pago"] == "TRANSFERENCIA" || $_POST["tipo_pago"] == "TARJETA"){
          SendOneSignalNotification($_POST["iduser"], "El costo de tu orden #" . $_POST["idorder"] . " es de $" . $_POST["precio_final"] . "MXN.", "Costo de Compra", "terminar-compra", $_POST["precio_final"], $_POST["idorder"], $dbConnection);
        }
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


function updateUser($idorder, $precio_final, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_UPDATE_PRICE);
  return $stmt->execute([ $precio_final, intval($idorder) ]);
}

function getDeviceId($id_user, $dbConnection){
  $stmt = $dbConnection->prepare(QUERY_GET_DEVICE_ID);
  $stmt->execute([intval( $id_user )]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $device_id = null;
  foreach ($result as $item){
      $device_id = $item["device_id"];
  }
  return $device_id;
}

function SendOneSignalNotification($iduser, $mensaje, $titulo, $url = null, $precio_final, $idorder, $dbConnection){
    $devices = [];
    $device_id = getDeviceId($iduser, $dbConnection);
    if($device_id == null){
      return;
    }
    array_push($devices, $device_id);
    $APP_ID = "fac88872-c598-464c-bd20-70003422173d";
    $API_KEY = "121025143210";

    $dataObj = new stdClass();
    $dataObj->url = $url;
    $dataObj->precio_final = $precio_final;
    $dataObj->idorder = $idorder;
    
    $content = array(
        "en" => $mensaje
    );
    $headings = array(
        "en" => $titulo
    );
    $fields = array(
        'app_id' => $APP_ID,
        'contents' => $content,
        'headings' => $headings,
        'include_player_ids' => $devices,
        'data' => $dataObj
    );

    $fields = json_encode($fields);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8', 'Authorization: Basic ' . $API_KEY ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}

?>
