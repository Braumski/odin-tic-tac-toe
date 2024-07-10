import { Model } from "./Model.js";
import { View } from "./View.js";
// Controller /// View and Model communication
export const Controller = {
  playGame: () => {},
  whoseTurn: "Player 1",

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
  checkWin: () => {
    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return true; // We have a win
      }
      return false;
    }
  },

  addClickEvent: function () {
    View.board.addEventListener("click", (event) => {
      if (this.whoseTurn === "Player 1") {
        event.target.innerText = Model.player1.letter;
        this.whoseTurn = "Player 2";
      } else if (this.whoseTurn === "Player 2") {
        event.target.innerText = Model.player2.letter;
        this.whoseTurn = "Player 1";
      }
    });
  },
};
