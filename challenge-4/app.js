let inputRef = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")
const emptyListText = document.querySelector(".empty-list")
const totalTasks = document.querySelector("#totalTasks")
const completedTasks = document.querySelector("#completedTasks")
const tasksArr = []

document.getElementById("addButton").addEventListener("click", () => {
    let inputValue = inputRef.value.trim()
    if (!inputValue) {
        alert("Please fill all values")
    }
    else {
        inputRef.value = ""
        tasksArr.push({ "desc": inputValue, "completed": false })
        emptyListText.style.display = !tasksArr.length ? "Block" : "none"
        addTaskInUi(inputValue);
        updateTotalTask();
    }
    console.log(inputValue);
})

function addTaskInUi(desc) {
    let div = document.createElement("div")
    div.classList.add("task-item")

    const checkbox = document.createElement("input");
    checkbox.classList.add("complete-checkbox")
    checkbox.type = "checkbox";

    let text = document.createElement("div")
    text.classList.add("task-text")
    text.innerText = desc

    let button = document.createElement("button")
    button.innerText = "Delete"
    button.classList.add("delete-button")

    div.append(checkbox, text, button)
    taskList.appendChild(div)
    console.log(tasksArr)
}

function updateTotalTask() {
    totalTasks.innerText = `Total tasks: ${tasksArr.length}`
    completedTasks.innerText = `Completed: ${tasksArr.filter(task => task.completed).length}`
}