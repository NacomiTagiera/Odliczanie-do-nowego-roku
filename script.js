const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime();

updateCountdown();

function updateCountdown()
{
    const now = new Date().getTime(); //w milisekundach
    const gap = newYearTime - now;
    const second = 1000; //dlatego mnożę przez 1000, żeby dostać sekundy
    const minute = second*60;
    const hour = minute*60;
    const day = hour*24;

    const d = Math.floor(gap/day); //obliczam, ile zostało: dni
    const h = Math.floor((gap % day) / hour);               //godzin
    const m = Math.floor((gap % hour) / minute);            //minut
    const s = Math.floor((gap % minute) / second);          //sekund
    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    setTimeout(updateCountdown, 1000); //odświeżam stronę co sekundę
}