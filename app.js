let oneScore = 0
let twoScore = 0
let playerOneTurn = true
let playerTwoTurn = true
let playerOneScore = document.querySelector('.player-one-score')
let playerTwoScore = document.querySelector('.player-two-score')
let gameOver = document.querySelector('.game-over')
let gameBoard = document.querySelector('.board')
let spaces = document.getElementsByClassName('space')
let spaceNumber = document.getElementById('space')
let replay = document.querySelector('.play-again')
let winningCombos = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [13, 19, 25, 31],
  [7, 15, 23, 31],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27]
]

function playerTurn() {
  let boardClicks = 0
  for (const space of spaces)
    space.addEventListener('click', () => {
      boardClicks += 1
      if (boardClicks % 2 == 1) {
        for (const space of spaces)
          space.addEventListener('click', () => {
            space.style.backgroundColor = '#b091c9'
            space.classList.add('disable')
            playerTwoTurn === false
          })
      } else {
        for (const space of spaces)
          space.addEventListener('click', () => {
            space.style.backgroundColor = '#d97c7c'
            space.classList.add('disable')
            playerOneTurn = false
          })
      }
    })
}
playerTurn()

function roundWon() {
  let space1 = spaces[winningCombos[0]]
  let space2 = spaces[winningCombos[1]]
  let space3 = spaces[winningCombos[2]]
  let space4 = spaces[winningCombos[3]]
  for (let i = 0; i < winningCombos.length; i++)
    if (space1 === '' || space2 === '' || space3 === '' || space4 === '') {
      continue
    }
  if (
    space1 === space2 &&
    space2 === space3 &&
    space3 === space4
    // playerTwoTurn === false
  ) {
    playerOneScore += 1
  }
  if (
    space1 === space2 &&
    space2 === space3 &&
    space3 === space4
    // playerOneTurn === false
  ) {
    playerTwoScore.innerHTML = [playerTwoScore + 1]
  }
}

roundWon()
//add above scoreboard player_ won play again?
//add message

function playAgain() {
  for (const space of spaces)
    replay.addEventListener('click', () => {
      space.style.backgroundColor = '#ebe4f2'
      space.classList.remove('disable')
      playerOneScore = 0
      playerTwoScore = 0
    })
}
playAgain()

//make it so the bottom row has to fill first
// get welcome page to open first
