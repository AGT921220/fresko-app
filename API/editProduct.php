<?php
require_once 'db_connect.php';

if (isset($_POST['idproduct']) && isset($_POST['idcategory']) && isset($_POST['product']) && isset($_POST['isKg']) 
    && isset($_POST['isPc']) && isset($_POST['weight']) && isset($_POST['price']) && isset($_POST['activated'])
   	&& isset($_POST['sum'])){
  
  	$idproduct = $_POST['idproduct'];
    $idcategory = $_POST['idcategory'];
    $product = $_POST['product'];
  	$isKg = $_POST['isKg'];
  	$isPc = $_POST['isPc'];
    $sum = $_POST['sum'];
    $weight = $_POST['weight'];
    $price = $_POST['price'];
    $activated = $_POST['activated'];

  	$success = false;
  	if(isset($_POST['url'])){
      $fileName = uniqid('Agroinvex_IMG_').".jpg";
      $content = base64_decode($_POST['url']);
      $file = getcwd().'/IMG/'.$fileName;
      file_put_contents($file, $content);
				
      $stmt = $dbConnection->prepare(QUERY_EDIT_PRODUCT_URL);
      $success = $stmt->execute([intval($idcategory),$product, $fileName,intval($isKg), intval($isPc), floatval($sum), floatval($weight), floatval($price), intval($activated), intval($idproduct)]);
    }else{
      $stmt = $dbConnection->prepare(QUERY_EDIT_PRODUCT);
      $success = $stmt->execute([intval($idcategory),$product, intval($isKg), intval($isPc), floatval($sum), floatval($weight), floatval($price), intval($activated), intval($idproduct)]);
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
