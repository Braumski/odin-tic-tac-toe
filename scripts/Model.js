import { Controller } from "./Controller.js";

// Model / Game state / Data ///////////////////////
export const Model = {
  gameBoard: ["", "", "", "", "", "", "", "", ""],
  isPlayer1Turn: true,
  isVictory: false,
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
