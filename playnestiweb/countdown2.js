
var countDownDate = new Date("April 17, 2025 16:00:00").getTime();

var x = setInterval(function () {

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = "<ul><li>" + days + "<span>Dias</span></li><li>" + hours + "<span>Horas</span></li><li>" + minutes + "<span>Minutos</span></li><li>" + seconds + "<span>Segundos</span></li></ul>";

	if (distance < 0) {
		clearInterval(x);
	}
	
}, 1000);