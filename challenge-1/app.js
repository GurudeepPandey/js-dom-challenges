const button = document.querySelector("#toggleButton")
const statusbtn = document.querySelector("#status")
const bulb = document.querySelector("#bulb")
const btnclick = 0

// button.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode")
//     bulb.classList.toggle("bulbon")
//     if(btnclick === 0) {
//         btnclick = 1
//         button.innerText = "Turn Off"
//         statusbtn.innerText = "Status: On"
//     }
//     else {
//         btnclick = 0
//         button.innerText = "Turn On"
//         statusbtn.innerText = "Status: Off"
//     }
// })


const body = document.querySelector("body");
button.addEventListener("click", () => {
    const isDark = body.classList.toggle("dark-mode");
    // console.log(isDark)
    bulb.classList.toggle("bulbon");

    button.innerText = isDark ? "Turn On" : "Turn Off";
    statusbtn.innerText = `Status: ${isDark ? "Off" : "On"}`;
});