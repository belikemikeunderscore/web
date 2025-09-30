var countDownDate = new Date("April 17, 2026 16:00:00").getTime();

var x = setInterval(function () {

	var now = new Date().getTime();

	var distance = countDownDate - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = `
	  <ul class="flex space-x-6 font-ethnocentric text-white text-4xl text-shadow-lg">
	    <li class="flex flex-col items-center"><span class="text-6xl">${days}</span><span class="text-base mt-1">Dias</span></li>
	    <li class="flex flex-col items-center"><span class="text-6xl">${hours}</span><span class="text-base mt-1">Horas</span></li>
	    <li class="flex flex-col items-center"><span class="text-6xl">${minutes}</span><span class="text-base mt-1">Minutos</span></li>
	    <li class="flex flex-col items-center"><span class="text-6xl">${seconds}</span><span class="text-base mt-1">Segundos</span></li>
	  </ul>`;

	if (distance < 0) {
		clearInterval(x);
	}
	
}, 1000);