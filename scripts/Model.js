import { Controller } from "./Controller";

// Model / Game state / Data ///////////////////////
export const Model = {
  gameBoard: ["", "", "", "", "", "", "", "", ""],
  player1: {
    letter: "X",
    name: "Player One",
    changeName() {},
  },
  player2: {
    letter: "O",
    name: "Player Two",
  },

  // display "player x wins"
  // play again?
  // refresh the game state
};
