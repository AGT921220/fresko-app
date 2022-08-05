<?php
require_once 'db_connect.php';
if( isset($_POST["data"])){
	$data = json_decode($_POST["data"]);
    $celular = $data->celular;
	//Twilio
	// $account_sid = "AC0b031190afaa8c7613413c81934581c6";
	// $auth_token = "da5068c7e5b3febf2a2c22d52de2b649";
	// $twilio_number = "12133352373";
	// $client = new Client($account_sid, $auth_token);
	// $client->messages->create(
	// 	// Where to send a text message (your cell phone?)
	// 	'+52' . $celular,
	// 	array(
	// 		'from' => $twilio_number,
	// 		'body' => 'Code: ' . $data->code . " es tu codigo de verificacion."
	// 	)
	// );
	try{
		sendNexmoSMS("Mercasa", "52" . $celular, "Code: " . $data->code . " es tu codigo de verificacion.", "00a26601", "hEseN11fegTyEjsS");
		$response["success"] = true;
		$response["message"] = "Codigo de verificacion exitoso.";
	}catch(Exception $ex){
		$response["success"] = $ex->getMessage();
		$response["mensaje"] = "No se encontro cobertura en la zona";
	}

}else{
	$response["success"] = false;
	$response["mensaje"] = "No se encontro cobertura en la zona";
}
echo json_encode($response);


function sendNexmoSMS($from, $to, $text, $api_key, $api_secret){
	$url = 'https://rest.nexmo.com/sms/json?' . http_build_query([
		'api_key' => $api_key,
		'api_secret' => $api_secret,
		'to' => $to,
		'from' => $from,
		'text' => $text
	]);
	
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	return $response;
}


?>
