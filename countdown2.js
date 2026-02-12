var countDownDate = new Date("April 1, 2026 16:00:00").getTime();
var endDate = new Date("April 3, 2026 18:30:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("days")) {
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        if (document.getElementById("countdown")) {
            document.getElementById("countdown").innerHTML = 
                `<span class="font-ethnocentric text-white text-xl">BEM VINDOS!</span>"`;
        }
    }
    
}, 1000);
