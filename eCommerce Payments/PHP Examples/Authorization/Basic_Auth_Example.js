var z = new Payfirma(publicKey, {

		"card_number":  cardNumber,
		"card_expiry_month": cardExpiryMonth,
		"card_expiry_year": cardExpiryYear,
		"cvv2": cvv
		
}, {

		"function":"preauth",
		"amount": amount,
		"key": apiKey,
		"merchant_id": merchantId
		
}, target, callbackFunction);

