// Get The Random pin Number
document.getElementById('pinGenerateBtn').addEventListener('click', function () {
	document.getElementById('action-left').innerHTML = '<span id="tryLeft">3</span> try left';
	document.getElementById('submitBtn').removeAttribute("disabled");
	const randomPinGenerate = Math.floor(Math.random() * (9999 - 999 + 1) + 999);
	document.getElementById('randomPinCode').value = randomPinGenerate;

	document.getElementById('pinOutput').value = '';
	document.getElementById('pinMatch').setAttribute('style', 'display:none');
	document.getElementById('pinNotMatch').setAttribute('style', 'display:none');
});

// Click The Button And Output The Pin
function pinInputBtn(pinNumer) {
	const randomPinCode = document.getElementById('randomPinCode');
	if (randomPinCode.value != '') {
		let pinInputValue = document.getElementById('pinOutput');

		if (pinInputValue.value.length < 4) {
			pinInputValue.value = pinInputValue.value + pinNumer;
		}
	} else {
		alert('You Must Need To Generate A Pin');
	}
}

// Check The pin Number Match or Not

document.getElementById('submitBtn').addEventListener('click', function () {
	const randomPin = document.getElementById('randomPinCode').value;
	const inputPin = document.getElementById('pinOutput').value;

	if (inputPin != '') {
		if (randomPin == inputPin && inputPin != '') {
			document.getElementById('pinMatch').setAttribute('style', 'display:block');
			document.getElementById('pinNotMatch').setAttribute('style', 'display:none');
		} else {
			let tryLeft = document.getElementById('tryLeft').innerText;
			if (tryLeft != 0) {
				let totalTryLeft = tryLeft - 1;
				document.getElementById('tryLeft').innerText = totalTryLeft;
			} else {
				document.getElementById('action-left').innerText = 'Your Time Is Over';
				document.getElementById('submitBtn').setAttribute('disabled', true);
			}
			document.getElementById('pinNotMatch').setAttribute('style', 'display:block');
			document.getElementById('pinMatch').setAttribute('style', 'display:none');
		}
	} else {
		alert('Please Enter The PinCode');
	}
});