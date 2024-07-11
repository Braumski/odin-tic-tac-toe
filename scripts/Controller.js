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
        return true;
      }
    }
    console.log("No Victory Yet");
    return false;
  },

  // TODO: This is where i was below
  boardReset: function () {
    This.view.squares.forEach((square) => {
      square.innerText = "";
    });
    Model.gameBoard = ["", "", "", "", "", "", "", "", ""];
    Model.whoseTurn = "Player 1";
  },

  clickLogic: function () {
    View.squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        const squareId = event.target.id;
        const squareNum = squareId[squareId.length - 1];
        if (event.target.innerText === "") {
          // ^ This just checks if the block is empty, if it isnt, nothing happens

          if (Model.whoseTurn === "Player 1") {
            Model.gameBoard.splice(squareNum - 1, 1, Model.player1.letter);
            event.target.innerText = Model.player1.letter;
            Model.whoseTurn = "Player 2";
            // view;
            this.checkWin();
          } else if (Model.whoseTurn === "Player 2") {
            Model.gameBoard.splice(squareNum - 1, 1, Model.player2.letter);
            event.target.innerText = Model.player2.letter;
            Model.whoseTurn = "Player 1";
            this.checkWin();
          }
        }
        console.log(Model);
      });
    });
  },
};
