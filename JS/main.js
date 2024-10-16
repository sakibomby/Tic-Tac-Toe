/*----- constants -----*/

const PLAYER_COLORS = {
    'null': 'white',
    '1': 'Blue',
    '-1': 'Green',
};

const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- state variables -----*/

let board;
let turn;
let winner;

/*----- cached elements -----*/

const message = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const squares =-  [...document.querySelectorAll('#board > div')];

/*----- event listeners -----*/

document.getElementById('board').addEventListener('click', handleMove);
playAgainBtn.addEventListener('click', init);

/*----- functions -----*/

init ();

function init () {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render ();
}

function handleMove(evt) {
 
    const idx = squares.findIndex((squares) => squares === evt.target);
    if (idx === -1 || board[idx] || winner) return;
    board[idx] = turn;
    winner = getWinner();
    turn *= -1;
    render();
  }
  
  function getWinner() {
    for (let winArr of WINNING_COMBOS) {
      if (Math.abs(board[winArr[0]] + board[winArr[1]] + board[winArr[2]]) === 3) return turn;
    }
    
    if (board.includes(null)) return null;
    return 'T';
  }
  
  function render() {
    renderBoard();
    renderMessage();
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
  }
  
  function renderBoard() {
    board.forEach(function(sqVal, idx) {
      const squareEl = document.getElementById(`sq-${idx}`);
      squareEl.style.backgroundColor = PLAYER_COLORS[sqVal];
    });
  }
  
  function renderMessage() {
    if (winner === 'T') {
      message.innerHTML = '😼 Game! Tie!';
    } else if (winner) {
      message.innerHTML = `Congrats <span style="color: ${PLAYER_COLORS[winner]}">${PLAYER_COLORS[winner].toUpperCase()} You WIN!</span>!`;
    } else {
      message.innerHTML = `<span style="color: ${PLAYER_COLORS[turn]}">${PLAYER_COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
  }