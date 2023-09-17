let compScore=0;
let userScore=0;
if(localStorage.getItem('userScore')!=null){
    userScore=Number(localStorage.getItem('userScore'));
    compScore=Number(localStorage.getItem('compScore'));
}
else{
    localStorage.setItem('userScore',0);
    localStorage.setItem('compScore',0);
}


let compScoreBoard = document.getElementById('comp-score');
let userScoreBoard = document.getElementById('user-score');
let rock_btn = document.getElementById('rock');
let paper_btn = document.getElementById('paper');
let scissor_btn = document.getElementById('scissor');
let gameBoard = document.getElementById('game-board');
let resultBoard = document.getElementById('result-board');
let img1 = document.getElementById('user-choice-image');
let img2 = document.getElementById('comp-choice-image');
let play_again = document.getElementById('play-again');
let text = document.getElementById('text');
let against_text = document.getElementById('against-text');
let instructions = document.getElementById('instructions');
let rules = document.getElementById('rules');
let next = document.getElementById('next');
let cross = document.getElementById('cross');


compScoreBoard.innerHTML=compScore;
userScoreBoard.innerHTML=userScore

function setImage1(userChoice){
    switch(userChoice){
        case 'r':
            img1.setAttribute('src','rock-group.png');
            break;
        case 'p':
            img1.setAttribute('src','paper-group.png');
            break;
        case 's':
            img1.setAttribute('src','scissor-group.png');
            break;
    }
}

function setImage2(compChoice){
    switch(compChoice){
        case 'r':
            img2.setAttribute('src','rock-group.png');
            break;
        case 'p':
            img2.setAttribute('src','paper-group.png');
            break;
        case 's':
            img2.setAttribute('src','scissor-group.png');
            break;
    }
}

function wonLayout(userChoice,compChoice){
    gameBoard.style.scale=0;
    setImage1(userChoice);
    text.innerHTML='YOU WON';
    setImage2(compChoice);
    resultBoard.style.scale=1;
    next.style.display='inline-block';
}
function lostLayout(userChoice,compChoice){
    gameBoard.style.scale=0;
    setImage1(userChoice);
    text.innerHTML='YOU LOST';
    setImage2(compChoice);
  
    
    resultBoard.style.scale=1;
}
function tiedLayout(userChoice,compChoice){
    gameBoard.style.scale=0;
    setImage1(userChoice);
    text.innerHTML='GAME TIED';
    against_text.style.scale=0;
    setImage2(compChoice);
    
    
    resultBoard.style.scale=1;
}



function userWon(userChoice,compChoice){
    userScore++;
    userScoreBoard.innerHTML=userScore;
    wonLayout(userChoice,compChoice);
    localStorage.setItem('userScore',userScore);

}

function userLost(userChoice,compChoice){
    compScore++;
    compScoreBoard.innerHTML = compScore;
    lostLayout(userChoice,compChoice);
    localStorage.setItem('compScore',compScore);
}

function tied(userChoice,compChoice){
    // do nothing
    userScore++;
    userScoreBoard.innerHTML=userScore;
    compScore++;
    compScoreBoard.innerHTML = compScore;
    tiedLayout(userChoice,compChoice);
    localStorage.setItem('userScore',userScore);
    localStorage.setItem('compScore',compScore);
}

function createChoice(){
    let a = ['r','p','s'];
    let index = Math.floor(Math.random() *3);
    return a[index];
}

function decide(userChoice){
    let compChoice = createChoice();
    switch(userChoice+compChoice){
        case 'rs':
        case 'sp':
        case 'pr':
            userWon(userChoice,compChoice);
            break;
        case 'rp':
        case 'sr':
        case 'ps':
            userLost(userChoice,compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            tied(userChoice,compChoice);
            break;
    }
}

rock_btn.addEventListener('click',()=>{
    decide('r');
    
    
})
paper_btn.addEventListener('click',()=>{
    decide('p');
    
})
scissor_btn.addEventListener('click',()=>{
    decide('s');
   
})

play_again.addEventListener('click',()=>{
    against_text.style.scale=1;
    resultBoard.style.scale=0;

    gameBoard.style.scale=1;
})

rules.addEventListener('click',()=>{
    instructions.style.scale=1;
})

cross.addEventListener('click',()=>{
    instructions.style.scale=0;
})