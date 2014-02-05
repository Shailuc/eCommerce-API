var z = new Payfirma(publicKey, {

  "card_number": cardNumber,
  "card_expiry_month": cardExpiryMonth,
  "card_expiry_year": cardExpiryYear,
  "cvv2": cvv
  
}, {

  "function":"capture",
  "amount": amount,
  "key": apiKey,
  "merchant_id": merchantId,
  "original_id": captureId
  
}, target, callbackFunction);

<code>
	function callback(response) {
		console.log(response);
	}

	document.querySelector('button').onclick = function(e) {

		var doc = document;

		var card_number = doc.querySelector('input[name="card_number"]').value;
		var card_expiry_month = doc.querySelector('input[name="card_expiry_month"]').value;
		var card_expiry_year = doc.querySelector('input[name="card_expiry_year"]').value;
		var cvv2 = doc.querySelector('input[name="cvv2"]').value;

		var first_name = doc.querySelector('input[name="first_name"]').value;
		var last_name = doc.querySelector('input[name="last_name"]').value;

		var key = 'PUBLIC_API_KEY_HERE';
		var z = new Payfirma(key, {
			'card_number': card_number,
			'card_expiry_month': card_expiry_month,
			'card_expiry_year':  card_expiry_year,
			'cvv2': cvv2
		}, {
			'first_name': first_name,
			'last_name': last_name
		}, 'https://www.YOUWEBSITEADDRESS.com/capture.php', callback);

	}
</code>