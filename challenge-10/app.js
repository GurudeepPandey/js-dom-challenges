const cardContainer = document.querySelector(".game-container")
const moves = document.querySelector("#moves")
const hintBtn = document.querySelector("#hintBtn")
const cardValueAry = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"]
let cardClick = 0
let hintCount = 0
let moveCount = 0
let prevElem = []
let matchElem = []
createCards()


function createCards() {
    const randomNumArr = generateRandomNum()
    for (const randomNum of randomNumArr) {
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("card")
        // cardDiv.classList.add("flipped")

        let frontCardDiv = document.createElement("div");
        frontCardDiv.className = "card-front"
        frontCardDiv.innerText = "?"

        let backCardDiv = document.createElement("div");
        backCardDiv.className = "card-back";
        backCardDiv.innerText = cardValueAry[randomNum];

        cardDiv.append(frontCardDiv, backCardDiv)
        cardContainer.appendChild(cardDiv)
    }
}

function generateRandomNum() {
    const randomValueArr = []
    while (true) {
        let randomNum = Math.floor(Math.random() * 16)
        if (!randomValueArr.includes(randomNum)) {
            randomValueArr.push(randomNum)
        }
        if (randomValueArr.length === 16) {
            break;
        }
    }
    return randomValueArr;
}

cardContainer.addEventListener("click", function (event) {
    if (event.target.className == "card-front") {
        event.target.parentElement.classList.add("flipped")
        prevElem.push(event.target.parentElement)
        cardClick++
        if (cardClick === 2) {
            moveCount++
            moves.innerText = moveCount
            checkResult()
        }
    }
})

function checkResult() {
    let newPrev = [...prevElem]
    prevElem = []
    if (newPrev[0].lastElementChild.innerText === newPrev[1].lastElementChild.innerText) {
        matchElem.push(newPrev[0])
        matchElem.push(newPrev[1])
        if(matchElem.length === 16) {
            let string = `
            You win Game in:
            Moves: ${moveCount}
            `
            alert(string)
            restartGame()
        }
    }
    else {
        setTimeout(() => {
            newPrev[0].classList.remove("flipped")
            newPrev[1].classList.remove("flipped")
        }, 650)
    }
    cardClick = 0
    // console.log(matchElem)
}

function restartGame() {
    for (let i = 0; i < 16; i++) {
        cardContainer.children[0].remove()
    }
    cardClick = 0
    hintCount = 0
    moveCount = 0
    prevElem = []
    matchElem = []
    createCards()
    hintBtn.innerText = `Hint: 3`
    moves.innerText = moveCount
}

function helpGame() {
    if (hintCount <= 2) {
        hintBtn.innerText = `Hint: ${2-hintCount}`
        for (let i = 0; i < 16; i++) {

            cardContainer.children[i].classList.add("flipped")
        }
        setTimeout(() => {
            for (let i = 0; i < 16; i++) {
                cardContainer.children[i].classList.remove("flipped")
            }
            for(let i = 0; i<matchElem.length; i++) {
                matchElem[i].classList.add("flipped")
            }
        }, 1000)
    }
    else {
        alert("Maximum hint used")
    }
    hintCount++
}