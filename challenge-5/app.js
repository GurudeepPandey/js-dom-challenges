const nextButton = document.getElementById("nextButton")
const prevButton = document.getElementById("prevButton")
const image = document.querySelector(".carousel-slide")
const caption = document.querySelector(".carousel-caption")
const indicator = document.querySelectorAll(".carousel-indicator")
const autoPlayBtn = document.querySelector(".auto-play-button")
const timerDisplay = document.getElementById("timerDisplay")
let imagesArr = [
    {path: "./Images/image1.avif", cap: "Green Mountain"},
    {path: "./Images/image2.jpg", cap: "Snowy Mountains"},
    {path: "./Images/image3.jpg", cap: "Lake"},
    {path: "./Images/image4.webp", cap: "Valley"}
]
let index = 0
let btnClick = false;
let setTimeRef;
let indicatorRef = indicator[0]


nextButton.addEventListener("click", function () {
    moveImages("right")
})

prevButton.addEventListener("click", function() {
    moveImages("left")
})

autoPlayBtn.addEventListener("click", function() {
    let i = 3;
    if(!btnClick) {
        btnClick = true;
        autoPlayBtn.innerText = "Stop Auto Play"
        timerDisplay.innerText = `Next Slide in 4s`
        setTimeRef = setInterval(() => {
            timerDisplay.innerText = `Next Slide in ${i}s`
            i--;
            if(i<0) {
                moveImages("right")
                i = 4
            }
        }, 1000)
    } else {
        btnClick = false
        autoPlayBtn.innerText = "Start Auto Play"
        clearInterval(setTimeRef)
        timerDisplay.innerText = ""
    }

})

function moveImages(direction) {
    if(index == 3 && direction == "right") {
        index = 0
    }
    else if(index == 0 && direction == "left") {
        index = 3
    } 
    else if(direction == "left") {
        index--
    }
    else if(direction == "right") {
        index++
    }
    image.src = imagesArr[index]["path"]
    caption.innerText = imagesArr[index]["cap"]
    indicatorRef.classList.remove("active")
    indicator[index].classList.add("active")
    indicatorRef = indicator[index]
}