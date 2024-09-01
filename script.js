let userScore = 0;
let compScore = 0;
let choices = ["rock", "paper", "scissor"];
let refresh = document.querySelector("#refresh")
let userscore = document.querySelector("#user-score")
let compscore = document.querySelector("#comp-score")
const userChoice = document.querySelectorAll(".choice");
let compOpt = document.querySelector("#comp-choice");
let userOpt = document.querySelector("#user-choice");
// console.log("hello");

loadEventListener();

function loadEventListener() {
    userChoice.forEach((choice) => {
        choice.addEventListener("click", (e) => {
            refresh.style.display = "inline";
            let userId = e.target.getAttribute("id");
            // console.log(userId);
            const userIndex = getIndex(userId);
            const computerChoice = Math.floor((Math.random()) * 3);
            checkWinner(userIndex, computerChoice);
        })
    })
    refresh.addEventListener("click",()=>{
        userScore=0;
        compScore=0;
        compOpt.innerText=" ";
        userOpt.innerText=" ";
        updateScore();
        displayMsg("Play your move");
        refresh.style.display = "none";

    })

}
function getIndex(id) {
    return choices.indexOf(id);
}
function checkWinner(user, comp) {
    updateChoice(user, comp);
    if (user == comp) {
        displayMsg("Draw");
    }
    else if ((user == 0 && comp == 2) || (user == 1 && comp == 0) || (user == 2 && comp == 1)) {
        displayMsg("Player Wins");
        userScore++;
    }
    else if ((user == 2 && comp == 0) || (user == 0 && comp == 1) || (user == 1 && comp == 2)) {
        compScore++;
        displayMsg("Computer Wins");
    }
    updateScore();
}
function updateChoice(user, comp) {
    compOpt.innerText = choices[comp];
    userOpt.innerText = choices[user];
}
function displayMsg(msg) {
    document.querySelector("#msg").innerText = `${msg}`
}
function updateScore() {
    userscore.innerText = userScore;
    compscore.innerText = compScore;
}