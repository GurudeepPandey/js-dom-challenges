const nextButton = document.getElementById("nextButton")
const prevButton = document.getElementById("prevButton")
const image = document.querySelector(".carousel-slide")
const caption = document.querySelector(".carousel-caption")
const indicator = document.querySelectorAll(".carousel-indicator")
const autoPlayBtn = document.querySelector(".auto-play-button")
const timerDisplay = document.getElementById("timerDisplay")
let imagesArr = [
    {path: "./Images/image1.avif", cap: "Image1"},
    {path: "./Images/image2.jpg", cap: "Image2"},
    {path: "./Images/image3.jpg", cap: "Image3"},
    {path: "./Images/image4.webp", cap: "Image4"}
]
let index = 0
let indicatorRef = indicator[0]


nextButton.addEventListener("click", function () {
    moveImages("right")
})

prevButton.addEventListener("click", function() {
    moveImages("left")
})

autoPlayBtn.addEventListener("click", function() {
    
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