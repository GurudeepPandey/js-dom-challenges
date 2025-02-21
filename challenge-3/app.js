
document.querySelectorAll(".input").forEach( (input) => {
    input.addEventListener("input", (event) => {
        document.querySelector(`#${event.target.id}Display`).innerText = event.target.value
    })
})