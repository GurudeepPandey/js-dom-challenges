let buttons = document.querySelectorAll(".accordion-button")
let prev = document.querySelector(".accordion-item")
// const accordionItem = document.querySelectorAll(".accordion-item")

buttons.forEach( (button) => {
    button.addEventListener("click", (event) => {
        // event.target.firstElementChild.classList.toggle("active")
        // event.target.nextElementSibling.classList.toggle("changeHeight")
        // accordionItem.forEach( (item) => {
        //     if(item.classList.contains("active")) {
        //         item.classList.remove("active")
        //     }
        // })
        if(prev !== event.target.parentElement) {
            prev.classList.remove("active")
        }
        event.target.parentElement.classList.toggle("active")
        prev = event.target.parentElement
    })
})