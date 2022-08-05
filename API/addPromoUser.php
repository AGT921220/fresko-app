<?php
require_once 'db_connect.php';
try{
if(isset($_POST["data"])){
	
    $data = json_decode($_POST["data"]);
	$stmt = null;
	if($data->has_promotion == 1){
  		$stmt = $dbConnection->prepare(INSERT_USER_PROMO);
		$stmt = $stmt->execute([$data->id_promotion, $data->id_user ]);
	}else{
		$stmt = $dbConnection->prepare(DELETE_USER_PROMO);
		$stmt = $stmt->execute([$data->id_promotion, $data->id_user ]);
	}
	if ($stmt) {
    $response["success"] = true;
	  if($data->has_promotion == 1){
        if($data->tipo == "PROMOCION"){
      	  $response["message"] = "La promocion ha sido asignada al usuario.";
		      SendOneSignalNotification($data->id_user, "Mercasa te ha otorgado una promocion, revisa en tu aplicacion.", "Promociones", $dbConnection);
        }else{
          $response["message"] = "El paquete ha sido asignado al usuario.";
        }
	  }else{
      if($data->tipo == "PROMOCION"){
		    $response["message"] = "La promocion ha sido removida del usuario.";
      }else{
        $response["message"] = "El paquete ha sido removido del usuario.";
      }
	  }
	}else{
      	$response["success"] = false;
		$response["message"] = "Ocurrio un error con la promocion..";
    }

}else{
	$response["success"] = false;
	$response["message"] = "Ocurrio un error con la promocion.";
}
}catch(Exception $ex){
	$response["success"] = false;
	$response["message"] = $ex->getMessage();
}

function SendOneSignalNotification($iduser, $mensaje, $titulo, $dbConnection){
    $devices = [];
    $device_id = getDeviceId($iduser, $dbConnection);
    if($device_id == null){
      return;
    }
    array_push($devices, $device_id);
    $APP_ID = "fac88872-c598-464c-bd20-70003422173d";
    $API_KEY = "121025143210";
    
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
        'include_player_ids' => $devices
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

echo json_encode($response);
