import { Model } from "./Model.js";
import { View } from "./View.js";
// Controller /// View and Model communication
export const Controller = {
  initializeGame: function () {
    this.resetGame();
    this.addBoardClickEvents();
    this.addPlayAgainClickEvent();
  },

  resetGame: function () {
    View.squares.forEach((square) => {
      square.innerText = "";
    });
    Model.gameBoard = ["", "", "", "", "", "", "", "", ""];
    Model.isPlayer1Turn = true;
    View.overlayContent.style.visibility = "hidden";
    View.overlay.style.visibility = "hidden";
    View.playerTurn.innerText = `${Model.currentPlayer.name} ( ${Model.currentPlayer.letter} )'s turn`;
  },

  addPlayAgainClickEvent: function () {
    View.playAgain.addEventListener("click", () => {
      this.resetGame();
    });
  },

  addBoardClickEvents: function () {
    View.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        const squareId = event.target.id;
        const squareNum = squareId[squareId.length - 1];
        if (event.target.innerText === "") {
          // ^ This just checks if the block is empty, if it isnt, nothing happens
          Model.gameBoard.splice(squareNum - 1, 1, Model.currentPlayer.letter);
          event.target.innerText = Model.currentPlayer.letter;
          const gameWon = this.isWon();
          if (gameWon) {
            // TODO: get this below to work
            Model.currentPlayer.wins++;
            const currPlayerWinsEle = View.currentPlayerWinsNum();
            currPlayerWinsEle.innerText = Model.currentPlayer.wins;
            return gameWon;
          } else {
            Model.isPlayer1Turn = !Model.isPlayer1Turn;
            View.playerTurn.innerText = `${Model.currentPlayer.name} ( ${Model.currentPlayer.letter} )'s turn`;
          }
        }
        console.log(Model);
      });
    });
  },

  isBoardFull: function () {
    return Model.gameBoard.every((square) => square === "X" || square === "O");
  },
  addWin: function () {
    if (Model.currentPlayer === "player1") {
      Model.player1.wins++;
      View;
    }
  },
  isWon: function () {
    const winConditions = [
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
    ];
    for (const condition of winConditions) {
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
        return !Model.isVictory;
      }
    }
    if (this.isBoardFull() === true) {
      // Draw
      View.overlayContent.style.visibility = "visible";
      View.overlay.style.visibility = "visible";
      View.matchOutcomeText.innerText = "Draw";
    } else {
      return Model.isVictory;
    }
  },
};
