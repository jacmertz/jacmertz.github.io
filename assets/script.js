// src/assets/tictactoe.js
export default function initTicTacToe() {
    const cells = document.querySelectorAll("td");
    const turnDisplay = document.getElementById("turn");
    let currentPlayer = "X";
    let gameActive = true;
    const boardState = Array(9).fill("");
  
    function checkWin() {
      const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
          return boardState[a];
        }
      }
      return null;
    }
  
    function checkTie() {
      return boardState.every(cell => cell !== "");
    }
  
    function handleCellClick(event) {
      const cell = event.target;
      const cellIndex = Array.from(cells).indexOf(cell);
      if (boardState[cellIndex] !== "" || !gameActive) return;
  
      boardState[cellIndex] = currentPlayer;
      cell.textContent = currentPlayer;
  
      const winner = checkWin();
      if (winner) {
        turnDisplay.textContent = `${winner} wins!`;
        gameActive = false;
      } else if (checkTie()) {
        turnDisplay.textContent = "It's a tie!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        turnDisplay.textContent = `${currentPlayer}'s Turn`;
      }
    }
  
    cells.forEach(cell => cell.addEventListener("click", handleCellClick));
  }
  