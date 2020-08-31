const game = () => {
  let pScore = 0;
  let cScore = 0;
  let playerName = prompt("Player name?");

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // * Jugar jogo
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    const displayName = document.querySelector(".player-score h2");

    //Cambiar name de player
    if (playerName !== null) {
      displayName.textContent = `${playerName}`;
    }

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    // * Opciones de la IA
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // * eleccion de la IA
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);
        //Aca se compara manos
        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          // updatear imagenes
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animacion
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //checkear empate
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //checkear piedra
    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        if (playerName !== null) {
          winner.textContent = `${playerName} Wins`;
        } else {
          winner.textContent = "Player Wins";
        }
        pScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        return;
      } else {
        if (playerName !== null) {
          winner.textContent = `${playerName} Wins`;
        } else {
          winner.textContent = "Player Wins";
        }
        pScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        if (playerName !== null) {
          winner.textContent = `${playerName} Wins`;
        } else {
          winner.textContent = "Player Wins";
        }
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // * Llamado a todas las funciones
  startGame();
  playMatch();
};

// * Arranca el jeugo
game();
