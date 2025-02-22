const openButton = document.querySelector(".toggle-btn")
const clodebtn = document.querySelector(".close-btn")
const panel = document.querySelector(".panel")
const menu = document.querySelectorAll(".menu-item")

openButton.addEventListener("click", (event) => {
    event.stopPropagation()
    panel.classList.add("active")
})
clodebtn.addEventListener("click", (event) => {
    panelClose(event)
})
document.body.addEventListener("click", (event) => {
    panelClose(event)
})

menu.forEach( (item) => {
    item.addEventListener("click", () => {
        alert("clicked")
        panel.classList.remove("active")
    })
})

function panelClose(event) {
    event.stopPropagation()
    panel.classList.remove("active")
}