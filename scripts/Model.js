import { Controller } from "./Controller.js";

// Model / Game state / Data ///////////////////////
export const Model = {
  gameBoard: ["", "", "", "", "", "", "", "", ""],
  whoseTurn: "Player 1",
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
