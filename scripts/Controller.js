import { Model } from "./Model.js";
import { View } from "./View.js";
// Controller /// View and Model communication
export const Controller = {
  winConditions: [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ],

  isBoardFull: function () {
    return Model.gameBoard.every((square) => square === "X" || square === "O");
  },

  isWon: function () {
    for (const condition of this.winConditions) {
      const [a, b, c] = condition;
      const gameBoard = Model.gameBoard;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        View.overlayContent.style.visibility = "visible";
        View.overlay.style.visibility = "visible";
        View.matchOutcomeText.innerText = `${Model.currentPlayer.name} Wins!`;
        console.log(`${Model.currentPlayer.name} Wins!`);
        return !Model.isVictory;
      }
    }
    console.log("No Victory Yet");
    if (this.isBoardFull() === true) {
      View.overlayContent.style.visibility = "visible";
      View.overlay.style.visibility = "visible";
      View.matchOutcomeText.innerText = `Draw`;
    } else {
      return Model.isVictory;
    }
  },

  initializeGame: function () {
    this.resetGame();
    this.addClickEvents();
  },

  resetGame: function () {
    View.squares.forEach((square) => {
      square.innerText = "";
    });

    Model.gameBoard = ["", "", "", "", "", "", "", "", ""];
    Model.isPlayer1Turn = true;
    View.playerTurn.innerText = `${Model.currentPlayer.name} ( ${Model.currentPlayer.letter} )'s turn`;
  },
  addPlayAgainClickEvents: function () {},
  addBoardClickEvents: function () {
    View.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        const squareId = event.target.id;
        const squareNum = squareId[squareId.length - 1];
        if (event.target.innerText === "") {
          // ^ This just checks if the block is empty, if it isnt, nothing happens
          Model.gameBoard.splice(squareNum - 1, 1, Model.currentPlayer.letter);
          event.target.innerText = Model.currentPlayer.letter;
          View.playerTurn.innerText = `${Model.currentPlayer.name} ( ${Model.currentPlayer.letter} )'s turn`;
          this.isWon();
          Model.isPlayer1Turn = !Model.isPlayer1Turn;
        }
        console.log(Model);
      });
    });
  },
};
