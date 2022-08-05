<?php

require_once 'db_connect.php';
if (isset($_POST['idcategory']) && isset($_POST['product']) && isset($_POST['url']) 
    && isset($_POST['isKg']) && isset($_POST['isPc'])  && isset($_POST['weight']) 
    && isset($_POST['price']) && isset($_POST['activated']) && isset($_POST['sum'])){
                    
    $idcategory = $_POST['idcategory'];
  	$product = $_POST['product'];
  	$url = $_POST['url'];
  	$isKg = $_POST['isKg'];
    $isPc = $_POST['isPc'];
  	$sum = $_POST['sum'];
    $weight = $_POST['weight'];
    $price = $_POST['price'];
    $activated = $_POST['activated'];

    if(insertProduct($idcategory, $product, $url,$isKg, $isPc, $sum,$weight, $price,$activated, $dbConnection)){
    	$response["success"] = 1;
    }else{
    	$response["success"] = 0;
    }
    

}else{
    $response["success"] = -2;
}
echo json_encode($response);

function insertProduct($idcategory, $product, $url,$isKg, $isPc,$sum, $weight, $price, $activated,$dbConnection){
  $fileName = uniqid('Agroinvex_IMG_').".jpg";
  $content = base64_decode($url);
  $file = getcwd().'/IMG/'.$fileName;
  file_put_contents($file, $content);
				
  $stmt = $dbConnection->prepare(QUERY_INSERT_PRODUCT);
  return $stmt->execute([intval($idcategory), $product, $fileName, intval($isKg), intval($isPc), floatval($sum),floatval($weight),floatval($price),intval($activated)]);
}

?>
