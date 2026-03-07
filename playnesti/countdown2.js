var countDownDate = new Date("June 12, 2026 18:00:00").getTime();
var endDate = new Date("June 14, 2026 18:30:00").getTime();
var x;

function updateCountdown() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var ended = endDate - now;

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

    if (ended < 0) {
        clearInterval(x);
        const countdown = document.getElementById("countdown");
        if (countdown) {
            countdown.className = "flex items-center justify-center w-full";
            countdown.innerHTML = `
            <div class="flex flex-col items-center gap-3 text-center">
                    <p class="font-ethnocentric text-white text-2xl md:text-3xl tracking-tight leading-tight">
                        OBRIGADO<br>
                        PLAYNESTI<span class="text-red-500 italic">26</span>.
                    </p>
                    <p class="font-coolvetica text-white/40 text-xs tracking-widest ">Até à próxima 👋</p>
                </div>
            `;
        }
    } else if (distance < 0) {
        clearInterval(x);
        const countdown = document.getElementById("countdown");
        if (countdown) {
            countdown.className = "flex items-center justify-center w-full";
            countdown.innerHTML = `
                <div class="flex flex-col items-center gap-3 text-center">
                    <div class="flex items-center gap-2">
                        <span class="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                        <span class="font-ethnocentric text-[10px] text-red-400 tracking-[0.4em] uppercase">Começou 🎉</span>
                        <span class="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    </div>
                    <p class="font-ethnocentric text-white text-2xl md:text-3xl tracking-tight leading-tight">
                        BEM-VINDOS À<br>
                        <span class="text-red-500">PLAYNESTI</span>.
                    </p>
                </div>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    updateCountdown();
    x = setInterval(updateCountdown, 1000);
});