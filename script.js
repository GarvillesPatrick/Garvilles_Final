var eim = document.getElementById('eim');
var humss = document.getElementById('humss');
var gas = document.getElementById('gas');
var z = document.getElementById('z');

function eimbutton() {
	humss.style.display = 'none';
	gas.style.display = 'none';

	if (eim.style.display === 'none') {
		eim.style.display = 'flex';
		z.style.padding = '5% 0 0 0';
	} else {
		eim.style.display = 'none';
		z.style.padding = '5% 0 5% 0';
	}
}

function humssbutton() {
	eim.style.display = 'none';
	gas.style.display = 'none';

	if (humss.style.display === 'none') {
		humss.style.display = 'flex';
		z.style.padding = '5% 0 0 0';
	} else {
		humss.style.display = 'none';
		z.style.padding = '5% 0 5% 0';
	}
}

function gasbutton() {
	eim.style.display = 'none';
	humss.style.display = 'none';

	if (gas.style.display == 'none') {
		gas.style.display = 'flex';
		z.style.padding = '5% 0 0 0';
	} else {
		gas.style.display = ' none';
		z.style.padding = '5% 0 5% 0';
	}
}
