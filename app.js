let myScore = 0
let theirScore = 0
let compScore = document.querySelector('.comp-score')
let playerScore = document.querySelector('.player-score')
let gameOver = document.querySelector('.game-over')
let gameBoard = document.querySelector('.board')
let spaces = document.getElementsByClassName('space')
let spaceNumber = document.getElementById('space')
let replay = document.querySelector('.play-again')

function playerTurn() {
  let boardClicks = 0
  for (const space of spaces)
    space.addEventListener('click', () => {
      boardClicks += 1
      if (boardClicks % 2 == 0) {
        for (const space of spaces)
          space.addEventListener('click', () => {
            space.style.backgroundColor = '#b091c9'
            space.classList.add('disable')
          })
      } else {
        for (const space of spaces)
          space.addEventListener('click', () => {
            space.style.backgroundColor = '#1c012b'
            space.classList.add('disable')
          })
      }
    })
}
playerTurn()

//make it so the bottom row has to fill first

//add winning combinations

//add to scoreboard

//play again button
function playAgain() {
  for (const space of spaces)
    replay.addEventListener('click', () => {
      space.style.backgroundColor = '#ebe4f2'
      space.classList.remove('disable')
    })
}
playAgain()
