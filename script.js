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