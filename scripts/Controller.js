import { Model } from "./Model";
import { View } from "./View";
// Controller /// View and Model communication
export const Controller = {
  playGame: () => {},

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

  addClickEvent: View.squares.forEach((square) => {
    square.addEventListener("click", () => {});
  }),
};
