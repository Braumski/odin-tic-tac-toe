// View // Dom and interface
import { Model } from "./Model.js";
export const View = {
  board: document.querySelector(".board"),
  squares: [
    document.getElementById("block-1"),
    document.getElementById("block-2"),
    document.getElementById("block-3"),
    document.getElementById("block-4"),
    document.getElementById("block-5"),
    document.getElementById("block-6"),
    document.getElementById("block-7"),
    document.getElementById("block-8"),
    document.getElementById("block-9"),
  ],
  playAgain: document.getElementById("play-again"),
  playerTurn: document.getElementById("player-turn"),
  overlay: document.querySelector(".winner-overlay"),
  overlayContent: document.querySelector(".overlay-content"),
  matchOutcomeText: document.getElementById("match-outcome-text"),
  currentPlayerWinsNum: function () {
    if (Model.isPlayer1Turn) {
      return document.getElementById("player-one-wins-num");
    } else {
      return document.getElementById("player-two-wins-num");
    }
  },
};
