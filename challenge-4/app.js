let inputRef = document.getElementById("taskInput")
const taskul = document.getElementById("taskList")
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
        clickAddBtn(inputValue);
    }
    console.log(inputValue);
})
function clickAddBtn(inputValue) {
    inputRef.value = ""
    tasksArr.push({ "desc": inputValue, "completed": false })
    emptyListText.style.display = !tasksArr.length ? "Block" : "none"
    addTaskInUi(inputValue);
    updateTotalTask();
}
function addTaskInUi(desc) {
    let li = document.createElement("li")
    li.classList.add("task-item")

    const checkbox = document.createElement("input");
    checkbox.classList.add("complete-checkbox")
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", updateCompleteTask)

    let text = document.createElement("div")
    text.classList.add("task-text")
    text.innerText = desc

    let button = document.createElement("button")
    button.innerText = "Delete"
    button.classList.add("delete-button")
    button.addEventListener("click", deleteTask)

    li.append(checkbox, text, button)
    taskul.appendChild(li)
    console.log(tasksArr)
}

function updateTotalTask() {
    totalTasks.innerText = `Total tasks: ${tasksArr.length}`
    completedTasks.innerText = `Completed: ${tasksArr.filter(task => task.completed).length}`
}

function updateCompleteTask(event) {
    event.target.parentElement.classList.toggle("completed")
    for (let task of tasksArr) {
        console.log("In loop: ", task)
        if (task.desc === event.target.nextSibling.textContent) {
            console.log("IN updateCompleteTask")
            if (task.completed) {
                task.completed = false
            } else {
                task.completed = true
            }
            break;
        }
    }
    // console.log(this)
    console.log(tasksArr)
    updateTotalTask()
}

function deleteTask(event) {
    event.target.parentElement.remove()
    for (let task of tasksArr) {
        if (task.desc === event.target.previousSibling.innerText) {
            tasksArr.splice(tasksArr.indexOf(task), 1)
            break;
        }
    }
    emptyListText.style.display = !tasksArr.length ? "Block" : "none"
    updateTotalTask()
    console.log(tasksArr)
}

// When enter key is pressed
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let inputValue = inputRef.value.trim()
        if (!inputValue) {
            alert("Please fill all values")
        }
        else {
            clickAddBtn(inputValue);
        }
    }
});