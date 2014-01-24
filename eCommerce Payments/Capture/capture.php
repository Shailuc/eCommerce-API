<?php

	$url = 'https://ecom.payfirma.com/capture/{{ transaction id from authorization }}';

	$post_fields = array(
		'key' => '{{ your api key }}',
		'merchant_id' => '{{ your merchant id }}',
		'amount' => '12.00' // amount being captured, must be less than or equal to authorized amount
	);

	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$result = curl_exec($ch);

?>