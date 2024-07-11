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
  checkWin: function () {
    for (const condition of this.winConditions) {
      const [a, b, c] = condition;
      const gameBoard = Model.gameBoard;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        document.querySelector(".overlay-text").style.visibility = "visible";
        document.querySelector(".winner-overlay").style.visibility = "visible";
        console.log(`${Model.whoseTurn} Wins!`);
        return (Model.isVictory = true);
      }
    }
    console.log("No Victory Yet");
    return (Model.isVictory = false);
  },

  // TODO: This is where i was below
  boardReset: function () {
    This.view.squares.forEach((square) => {
      square.innerText = "";
    });
    Model.gameBoard = ["", "", "", "", "", "", "", "", ""];
    Model.isPlayer1Turn = !Model.isPlayer1Turn;
  },

  clickLogic: function () {
    View.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        const squareId = event.target.id;
        const squareNum = squareId[squareId.length - 1];
        if (event.target.innerText === "") {
          // ^ This just checks if the block is empty, if it isnt, nothing happens
          const currentPlayer = Model.isPlayer1Turn
            ? Model.player1
            : Model.player2;
          Model.gameBoard.splice(squareNum - 1, 1, currentPlayer.letter);
          event.target.innerText = currentPlayer.letter;
          Model.isPlayer1Turn = !Model.isPlayer1Turn;
          this.checkWin();
        }
        console.log(Model);
      });
    });
  },
};

// Modular clickLogic check
function clickLogicEachPlayer() {}
