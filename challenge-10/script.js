// Optimised version of my app.js code and it is generated by ChatGPT
const cardContainer = document.querySelector(".game-container");
const moves = document.querySelector("#moves");
const hintBtn = document.querySelector("#hintBtn");

const cardValueAry = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼"];
let cardClick = 0, hintCount = 0, moveCount = 0;
let prevElem = [], matchElem = [];

// Initialize the game
createCards();

function createCards() {
    const shuffledCards = shuffleArray([...cardValueAry]);
    cardContainer.innerHTML = ""; // Clear previous cards

    shuffledCards.forEach((value) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${value}</div>
        `;
        cardContainer.appendChild(cardDiv);
    });
}

// Fisher-Yates shuffle algorithm for better performance
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Card click handling
cardContainer.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    if (!card || card.classList.contains("flipped") || cardClick >= 2) return;

    card.classList.add("flipped");
    prevElem.push(card);
    cardClick++;

    if (cardClick === 2) {
        moveCount++;
        moves.innerText = moveCount;
        checkResult();
    }
});

function checkResult() {
    const [first, second] = prevElem;
    prevElem = [];

    if (first.lastElementChild.innerText === second.lastElementChild.innerText) {
        matchElem.push(first, second);
        if (matchElem.length === 16) {
            setTimeout(() => {
                alert(`You win the game in ${moveCount} moves!`);
                restartGame();
            }, 500);
        }
    } else {
        setTimeout(() => {
            first.classList.remove("flipped");
            second.classList.remove("flipped");
        }, 650);
    }

    cardClick = 0;
}

function restartGame() {
    cardClick = hintCount = moveCount = 0;
    prevElem = [];
    matchElem = [];
    createCards();
    hintBtn.innerText = `Hint: 3`;
    moves.innerText = moveCount;
}

// Hint functionality
function helpGame() {
    if (hintCount >= 3) return alert("Maximum hints used");

    hintBtn.innerText = `Hint: ${2 - hintCount}`;
    hintCount++;

    document.querySelectorAll(".card").forEach((card) => card.classList.add("flipped"));

    setTimeout(() => {
        document.querySelectorAll(".card").forEach((card) => {
            if (!matchElem.includes(card)) card.classList.remove("flipped");
        });
    }, 1000);
}
