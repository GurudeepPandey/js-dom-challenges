const clock = document.querySelector(".clock");
const digitalClock = document.querySelector(".digital-clock");
const date = document.querySelector(".date");

const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function addNum() {
    const div = document.createElement("div");
    div.className = "number";
    const centerX = 140;
    const centerY = 140;
    const radius = 120;

    for (let i = 1; i <= 12; i++) {
        const angle = (i * 30 - 90) * (Math.PI / 180); 
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const span = document.createElement("span");
        span.innerText = i;
        span.style.position = "absolute";
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        span.style.transform = "translate(-50%, -50%)";

        div.appendChild(span);
    }
    clock.appendChild(div);
}
addNum();

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";
    digitalClock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    date.textContent = now.toLocaleDateString(undefined, options);

    second.style.transform = `rotate(${seconds * 6}deg)`;
    minute.style.transform = `rotate(${minutes * 6}deg)`;
    hour.style.transform = `rotate(${hours * 30 + (minutes / 2)}deg)`;
}
updateClock()
setInterval(updateClock, 1000);