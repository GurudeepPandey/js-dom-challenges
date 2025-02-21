const heading = document.querySelector("#mainHeading")
document.querySelector(".color-buttons").addEventListener("click", (event) => {
    console.log(event)
    if(event.target.localName == "button") {
        heading.style.color = event.target.id
    }
    if(event.target.id == "reset") {
        heading.style.color = "black"
    }
})