// declaring the variables we will need for the game

let userScore = 1;
let computerScore = 1;
const rock_button = document.querySelector('.rock-btn');
const paper_button = document.querySelector('.paper-btn');
const scissors_button = document.querySelector('.scissor-btn');
let buttons = document.querySelectorAll('button');
const centerMsg = document.querySelector('.txt');
let playerScore = document.querySelector('.userscore');
let pcScore = document.querySelector('.computerscore');
const btnCon = document.querySelector('.btn-container');
const mainCon = document.querySelector('main');
const centerDiv = document.querySelector('.center-div');





function classRemove() {
const butty = document.getElementById("grad, grad2, grad3")
grad.classList.remove('btn-grad');
grad2.classList.remove('btn-grad');
grad3.classList.remove('btn-grad');




}

//  function for disabling buttons

function disableButtons() {
  buttons.forEach(elem => {
    elem.disabled = true  })
    classRemove();
};


//  refresh button
const refresh = document.createElement("button");
refresh.classList.add('refresh')
refresh.textContent = "Refresh";


// some message for greeting the players

function refreshPage() {

  window.location.reload();



}


function greetingMsg() {
  const container = document.querySelector('main');
  let msg = document.createElement('p');
  msg.classList.add('greetMsg');
  msg.textContent = 'Greetings';
  container.append(msg)
};


// randome pick for the computer

function getComputerChoice() {
  const pick = ['rock', 'paper', 'scissors'];
  const randomPick = Math.floor(Math.random() * 3);
  return pick[randomPick];


}

function win(playerChoice, computerPlay) {
  // userScore++;
  playerScore.innerHTML = userScore++;

  congrats = document.createElement('p');
  if (userScore === 6) {
     disableButtons()
    congrats.textContent = 'You Won! :}';
    congrats.classList.add('txt');
    centerDiv.append(congrats);
    mainCon.append(refresh);
  }

  centerMsg.innerHTML = "Your " + playerChoice + " beats " + "Computer's " + computerPlay;
}

function lose(playerChoice, computerPlay) {
  // userScore++;
  pcScore.innerHTML = computerScore++;

  congrats = document.createElement('p');
  congrats.textContent = 'You lost! :( ';
    congrats.classList.add('txt');
  if (computerScore === 6) {
    disableButtons()
    centerDiv.append(congrats);
    mainCon.append(refresh);
  }
centerMsg.innerHTML = "Your " + playerChoice + " lost to " + "Computer's " + computerPlay;
}





function draw(playerChoice, computerPlay) {
  centerMsg.innerHTML = "Your " + playerChoice + " is the same as   " + "Computer's " + computerPlay ;
  console.log('User score', userScore, 'computer score', computerScore);
  

}


// the main function of the game ( picking an option) 

function playRound(playerChoice) {
  const computerPlay = getComputerChoice();
  console.log('Computer picked', computerPlay);
  switch (playerChoice + computerPlay) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(playerChoice, computerPlay);

      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(playerChoice, computerPlay);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(playerChoice, computerPlay);
      break;
  }

}

// on click events 
function main() {



  rock_button.addEventListener('click', function () {
    console.log('You picked rock');
    playRound('rock');
  });
  paper_button.addEventListener('click', function () {
    console.log('You picked paper');
    playRound('paper');
  });

  scissors_button.addEventListener('click', function () {
    console.log('You picked scissors');
    playRound('scissors');
  });

  refresh.addEventListener('click', function () {
    refreshPage();

  });

}
greetingMsg();
main();
getComputerChoice();