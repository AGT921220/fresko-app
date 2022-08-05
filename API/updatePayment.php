<?php

require_once 'db_connect.php';
try{
        
      $idorder = $_POST['idorder'];
      $subtotal = $_POST['subtotal'];
      $id_paypal = $_POST['id_paypal'];
      $email = $_POST['email'];
      $nombre = $_POST['nombre'];


      if(updatePayment($idorder, $subtotal, $id_paypal, $email, $nombre, $dbConnection)){
        updatePagado($idorder, $dbConnection);
        $response["success"] = true;
        $response["message"] = "El pago ha sido procesado y completado correctamente.";
      }else{
        $response["message"] = "Ocurrio un error al procesar el pago.";
        $response["success"] = false;
      }

}catch(Exception $ex){
  $response["message"] = $ex->getMessage();
  $response["success"] = false;
}
echo json_encode($response);


function updatePayment($idorder, $subtotal, $id_paypal, $email, $nombre, $dbConnection){
  $stmt = $dbConnection->prepare(INSERT_PAYMENT);
  return $stmt->execute([ $idorder, $subtotal, $id_paypal, $email, $nombre ]);
}

function updatePagado($idorder, $dbConnection){
  $stmt = $dbConnection->prepare(UPDATE_PAGADO);
  return $stmt->execute([ $idorder ]);
}

?>
