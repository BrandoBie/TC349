window.onload = init;

function init() {
	var x = document.getElementsByTagName("title");
	if(x[0].innerText == 'Home') {
		var id = document.getElementById("title_home");
		id.style.backgroundColor = "#343439";
	}
	if(x[0].innerText == 'Climbing Types') {
		var id = document.getElementById("title_climbing");
		id.style.backgroundColor = "#343439";
	}
	if(x[0].innerText == 'Equipment') {
		var id = document.getElementById("title_equipment");
		id.style.backgroundColor = "#343439";
	}
	if(x[0].innerText == 'Locations') {
		var id = document.getElementById("title_locations");
		id.style.backgroundColor = "#343439";
	}
}



var i = 0;

function getPrev() {
	if(i == 0) {
		i = 11;
	}
	var x = document.getElementById("centered");
	x.innerHTML = "<img id='centered-img' src='img/rr.jpg'><p id='label'>Red River Gorge</p>";
	var label = document.getElementById("label");
	label.innerHTML = labels[i];
}

function getNext() {
	if(i == 11) {
		i = 0;
	}
}