<?php
ini_set('memory_limit', '-1');
if (
  isset($_POST["token"])
  && $_POST["token"] == TOKEN
  && isset($_POST["date_start"])
  && isset($_POST["date_end"])
) {

  $dbConnection = null;
  try {
    $dbConnection = new PDO('mysql:host=156.67.73.86;dbname=u569882363_mercasa', 'u569882363_mercasa', 'Contra123@');
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  } catch (PDOException $ex) {
    throw $ex->getMessage();
  }
  $timestamp_start = strtotime($_POST["date_start"]);
  $timestamp_end = strtotime($_POST["date_end"]);
  $stmt = $dbConnection->prepare(QUERY_SELECT_ORDERS_BY_DATE);
  $stmt->execute([$timestamp_start, $timestamp_end]);
  $result = $stmt->fetchAll();
  $response["orders"] = array();
  foreach ($result as $order) {
    $orderToAdd = array();
    $orderToAdd["idorder"] = $order["idorder"];
    $orderToAdd["iduser"] = $order["iduser"];
    $orderToAdd["timestamp"] = explode(" = ", $order["timestamp"])[1];
    $orderToAdd["name"] = $order["name"];
    $orderToAdd["street"] = $order["street"];
    $orderToAdd["streetnumber"] = $order["streetnumber"];
    $orderToAdd["colony"] = $order["colony"];
    $orderToAdd["free_delivery"] = $order["free_delivery"];
    $orderToAdd["discount"] = $order["discount"];
    $orderToAdd["free_product"] = $order["free_product"];
    $orderToAdd["telephone"] = $order["telephone"];
    $orderToAdd["notes"] = $order["notes"];
    $orderToAdd["subtotal"] = $order["subtotal"];
    $orderToAdd["tipo_pago"] = $order["tipo_pago"];
    $orderToAdd["pagado"] = $order["pagado"];
    if ($orderToAdd["tipo_pago"] == null) {
      if ($order["pickup"] == "0") {
        $orderToAdd["pickup"] = "Horario matutino";
        $orderToAdd["pickupnotes"] = "9:30pm a 12:30pm";
      } else if ($order["pickup"] == "1") {
        $orderToAdd["pickup"] = "Horario vespertino";
        $orderToAdd["pickupnotes"] = "4:00pm a 6:45pm";
      } else {
        $orderToAdd["pickup"] = "Horario elegido por cliente";
        $orderToAdd["pickupnotes"] = $order["pickupnotes"];
      }
    } else {
      if ($order["pickup"] == "0") {
        $orderToAdd["pickup"] = "A Domicilio";
        $orderToAdd["pickupnotes"] = "12:30pm a 04:00pm";
      } else if ($order["pickup"] == "1") {
        $orderToAdd["pickup"] = "En Escuela";
        $orderToAdd["pickupnotes"] = "En la salida de la escuela";
      } else {
        $orderToAdd["pickup"] = "Horario elegido por cliente";
        $orderToAdd["pickupnotes"] = $order["pickupnotes"];
      }
    }



    $stmt = $dbConnection->prepare(QUERY_SELECT_CONTENT_ORDER);
    $stmt->execute([intval($order["idorder"])]);
    $resultContent = $stmt->fetchAll();
    $contentStr = "";
    $price = 0.0;
    foreach ($resultContent as $content) {
      $contentStr .= "-" . $content["product"];
      $contentStr .= " (Kilos: " . $content["kg"] . ", ";
      $contentStr .= " Piezas: " . $content["pc"] . ")";
      $contentStr .= "\n";
      $price += doubleval($content["price"]);
    }

    if ($orderToAdd["discount"] != null && $orderToAdd["discount"] != "0") {
      $descuento = $orderToAdd["price_real"] * ($orderToAdd["discount"] / 100);
      $orderToAdd["price_real"] = $orderToAdd["price_real"] - $descuento;
    }


    if ($orderToAdd["free_delivery"] == "1") {
      $orderToAdd["price_real"] = $orderToAdd["price_real"] - 45;
    } else {
      $orderToAdd["price_real"] = $orderToAdd["price_real"] + 45;
    }

    if ($orderToAdd["subtotal"] != 0) {
      $orderToAdd["price"] = $orderToAdd["subtotal"];
      $orderToAdd["price_real"] = $orderToAdd["subtotal"];
      $price = $orderToAdd["subtotal"];
    } else {
      $orderToAdd["price"] = $price;
      $orderToAdd["price_real"] = $price;
    }

    $orderToAdd["content"] = $contentStr;
    array_push($response["orders"], $orderToAdd);
  }
  $response["success"] = 1;
} else {
  $response["success"] = 0;
}
echo json_encode($response);
