let rate = 30;

function changeRate(newrate) {
	rate = newrate;
}

let pos = 0;

// qui andiamo a mostrare tutte le luci e nasconderne una, così da dare l'effetto del fenomeno Phi 
function frame() {
	var light = document.getElementById("light");

	for (let i = 0; i < 8; i++) {
		var light = document.getElementById("light" + i);

		light.style.opacity = pos == i? 0 : 1;
	}

	pos++;
	if (pos > 7) {
		pos = 0;
	}

	setTimeout(frame, rate * 10);
}

// se l'url ha "light" su `true` allora rende lo sfondo, ottimo per mimetizzarsi con lo sfondo bianco di google sites 
let urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("light") === "true") {
	document.body.style.backgroundColor = "#fdf1fa";
	document.getElementById("interval").style.color = "#222222"
	document.getElementById("credit").style.color = "#222222"
}

// li mettiamo a cerchio 
for (let i = 0; i < 8; i++) {
	var light = document.getElementById("light" + i);

	var x = 180;
	var y = 215;

	var radius = 178;

	x += radius * Math.cos((2 * Math.PI * i) / 8);
	y += radius * Math.sin((2 * Math.PI * i) / 8);

	light.style.transform = "scale(1)";

	light.style.position = "absolute";
	light.style.left = x + "px";
	light.style.top = y + "px";

	// se l'url ha "light" su `true` allora cambia i punti bianchi in neri per poterli vedere sullo sfondo bianco 
	if (urlParams.get("light") === "true") {
		light.src = "rsc/dark.png";
	}
}

frame();
