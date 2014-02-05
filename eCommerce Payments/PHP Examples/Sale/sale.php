<?php

	// Receive POST'ed data
	$token = $_REQUEST['token'];


	$url = 'https://ecom.payfirma.com/sale';

	$post_fields = array(
		'token' => $token, // contains card info
		'key' => '{{ your api key }}',
		'merchant_id' => '{{ your merchant id }}',
		'amount' => '12.00'
	);

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($ch);

?>