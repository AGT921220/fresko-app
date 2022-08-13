<?php

require_once 'db_connect.php';
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('memory_limit', '-1');

try {
  if (isset($_POST['idorder'])  && isset($_POST['precio_final'])) {

    $idorder = $_POST['idorder'];
    $precio_final = $_POST['precio_final'];
    $userId = $_POST['iduser'];
    $referredId = $_POST['ir_referido'];
    $isPromotor = $_POST['referido_promotor'];

    if (updateUser($idorder, $precio_final, $dbConnection)) {
      $response["success"] = true;
      $response["message"] = "El precio ha sido actualizado y enviado al cliente.";
    } else {
      $response["message"] = "Ocurrio un error al actualizar el precio.";
      $response["success"] = false;
    }
    if ($response["success"] == true) {
      addCommission($idorder, $userId, $referredId, $precio_final, $isPromotor, $dbConnection);
      if ($_POST["tipo_pago"] == "TRANSFERENCIA" || $_POST["tipo_pago"] == "TARJETA") {
        SendOneSignalNotification($_POST["iduser"], "El costo de tu orden #" . $_POST["idorder"] . " es de $" . $_POST["precio_final"] . "MXN.", "Costo de Compra", "terminar-compra", $_POST["precio_final"], $_POST["idorder"], $dbConnection);
      }
    }
  } else {
    $response["message"] = "Error.";
    $response["success"] = false;
  }
} catch (Exception $ex) {
  $response["message"] = $ex->getMessage();
  $response["success"] = false;
}
echo json_encode($response);


function updateUser($idorder, $precio_final, $dbConnection)
{
  $stmt = $dbConnection->prepare(QUERY_UPDATE_PRICE);
  return $stmt->execute([$precio_final, intval($idorder)]);
}

function getDeviceId($id_user, $dbConnection)
{
  $stmt = $dbConnection->prepare(QUERY_GET_DEVICE_ID);
  $stmt->execute([intval($id_user)]);
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
  $device_id = null;
  foreach ($result as $item) {
    $device_id = $item["device_id"];
  }
  return $device_id;
}

function SendOneSignalNotification($iduser, $mensaje, $titulo, $url = null, $precio_final, $idorder, $dbConnection)
{
  $devices = [];
  $device_id = getDeviceId($iduser, $dbConnection);
  if ($device_id == null) {
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
  curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8', 'Authorization: Basic ' . $API_KEY));
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
  curl_setopt($ch, CURLOPT_HEADER, FALSE);
  curl_setopt($ch, CURLOPT_POST, TRUE);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
  $response = curl_exec($ch);
  curl_close($ch);
  return $response;
}

function addCommission($orderId, $userId, $referredId, $price, $isPromotor, $dbConnection): void
{

  $commission = getCommission($price, REFERRED_COMISSION_PERCENTAJE);
  $commissionSecondLeven = getCommission($price, REFERRED_COMISSION_PERCENTAJE_SECOND_LEVEL);

  $createdAt = date('Y-m-d H:i:s');
  $validityAt = ($isPromotor == 1) ? null : date('Y-m-d H:i:s', strtotime($createdAt . ' + 21 days'));

  $existCommission = checkCommission($orderId, $referredId, $dbConnection);


  secondLevelReferred($dbConnection, $orderId, intval($referredId), intval($userId), $createdAt, $validityAt, $commissionSecondLeven);


  if (count($existCommission) <= 0) {
    $stmt = $dbConnection->prepare(QUERY_INSERT_REFERRED_COMISSION);
    $stmt->execute([intval($orderId), intval($referredId), intval($userId), $commission, $createdAt, $validityAt, REFERRED_PERCENTAJE]);

    return;
  }

  $stmt = $dbConnection->prepare(QUERY_UPDATE_REFERRED_COMISSION);
  $stmt->execute([$commission, $createdAt, $validityAt, $orderId, $referredId]);
}

function getCommission($price, $percentaje)
{
  return $price * $percentaje;
}

function checkCommission($orderId, $referredId, $dbConnection)
{
  $stmt = $dbConnection->prepare(QUERY_SELECT_REFERRED_COMISSION_BY_ORDER_ID);
  $stmt->execute([intval($orderId), intval($referredId)]);
  $result =  $stmt->fetchAll();
  return $result;
}
function secondLevelReferred($dbConnection, $orderId, $referredId, $userId, $createdAt, $validityAt, $commission)
{

  $stmt = $dbConnection->prepare(QUERY_SELECT_REFERRED_HAVE_SECOND_LEVEL);
  $stmt->execute([intval($referredId)]);
  $result =  $stmt->fetchAll();

  if (count($result) <= 0) {
    return;
  }

  $referredIdSecondLevel = $result[0];

  $existCommission = checkCommission($orderId, $referredId, $dbConnection);

  if (count($existCommission) <= 0) {
    $stmt = $dbConnection->prepare(QUERY_INSERT_REFERRED_COMISSION);
    $stmt->execute([intval($orderId), intval($referredIdSecondLevel['referido_id']), intval($referredId), $commission, $createdAt, $validityAt, REFERRED_PERCENTAJE_SECOND_LEVEL]);

    return;
  }

  $stmt = $dbConnection->prepare(QUERY_UPDATE_REFERRED_COMISSION);
  $stmt->execute([$commission, $createdAt, $validityAt, $orderId, $referredIdSecondLevel['referido_id']]);
}




