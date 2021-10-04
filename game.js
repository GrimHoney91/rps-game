    const commentary = document.getElementById('commentary');
    const pScore = document.getElementById('pScore');
    const cScore = document.getElementById('cScore');
    let playerScore = 0;
    let computerScore = 0;

    function computerPlay() {
      let getRandomIntInclusive = Math.floor(Math.random() * 3 + 1);
      let computerChoice = getRandomIntInclusive;
      if (computerChoice == 1) {
        return "rock";
      }
      if (computerChoice == 2) {
        return "paper";
      }
      if (computerChoice == 3) {
        return "scissors";
      }
    }
let result = null;
    function playRound(playerSelection) {
      const computerSelection = computerPlay();
      if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") && (computerScore < 5 && playerScore < 5)) {
        result = "You lose! Paper beats rock.";
        computerScore++;
      }
      if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors")  && (computerScore < 5 && playerScore < 5)) {
        result = "You win! Rock beats scissors.";
        playerScore++;
      }
      if ((playerSelection.toLowerCase() == "paper" && computerSelection == "scissors")  && (computerScore < 5 && playerScore < 5)) {
        result = "You lose! Scissors beats paper.";
        computerScore++;
      }
      if ((playerSelection.toLowerCase() == "paper" && computerSelection == "rock")  && (computerScore < 5 && playerScore < 5)) {
        result = "You win! Paper beats rock.";
        playerScore++;
      }
      if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")  && (computerScore < 5 && playerScore < 5)) {
        result = "You lose! Rock beats scissors.";
        computerScore++;
      }
      if ((playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")  && (computerScore < 5 && playerScore < 5)) {
        result = "You win! Scissors beats paper.";
        playerScore++;
      }
      else if (playerSelection.toLowerCase() == computerSelection) {
        result = "It's a tie!";
      }
    }

    function declareWinner() {
      if ((playerScore > computerScore) && (playerScore == 5)) {
        result = "WOHOO! You Won the Game!";
        setTimeout(function () {location.reload(1);
        }, 3000);
      }
      if ((computerScore > playerScore) && (computerScore == 5)) {
        result = "You Lost to a Bot! Try Again!";
        setTimeout(function () {location.reload(1);
        }, 3000);
      }
    }

    const images = document.querySelectorAll('img');
  
    images.forEach((image) => {
      image.addEventListener('click', (e) => {
        playerChoice = e.target.dataset.selection;
        playRound(playerChoice);
        pScore.innerHTML = playerScore;
        cScore.innerHTML = computerScore;
        declareWinner();
        commentary.innerHTML = result;
      });
    });

    