var eim = document.getElementById('eim');
var humss = document.getElementById('humss');
var gas = document.getElementById('gas');

function eimbutton() {
	humss.style.display = 'none';
	gas.style.display = 'none';

	if (eim.style.display === 'none') {
		eim.style.display = 'block';
	} else {
		eim.style.display = 'none';
	}
}

function humssbutton() {
	eim.style.display = 'none';
	gas.style.display = 'none';

	if (humss.style.display === 'none') {
		humss.style.display = 'block';
	} else {
		humss.style.display = 'none';
	}
}

function gasbutton() {
	eim.style.display = 'none';
	humss.style.display = 'none';

	if (gas.style.display == 'none') {
		gas.style.display = 'block';
	} else {
		gas.style.display = ' none';
	}
}
