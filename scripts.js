function ticTacToe() {
  // Model / Game state / Data ///////////////////////

  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  const player1 = {
    letter: "X",
    name: "Player One",
    changeName() {},
  };
  const player2 = {
    letter: "O",
    name: "Player Two",
  };
  function checkWin(gameBoard) {
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
    // display "player x wins"
    // play again?
    // refresh the game state
  }

  // View / Rendering the game board and updating the UI /////////////////////////////////////
  const displayController = {};

  // Controller / Hanlding User Input and updating the model and view accordingly ///////////////////
  (function playGame() {
    function player1Turn() {}
  })(); // IIFE
}
