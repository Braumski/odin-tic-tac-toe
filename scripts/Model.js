import { Controller } from "./Controller.js";

// Model / Game state / Data ///////////////////////
export const Model = {
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
  gameBoard: ["", "", "", "", "", "", "", "", ""],
  isPlayer1Turn: true,
  isVictory: false,
  get currentPlayer() {
    return this.isPlayer1Turn ? this.player1 : this.player2;
  },
  player1: {
    letter: "X",
    name: "Player One",
  },
  player2: {
    letter: "O",
    name: "Player Two",
  },

  // display "player x wins"
  // play again?
  // refresh the game state
};
