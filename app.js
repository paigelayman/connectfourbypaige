let myScore = 0
let theirScore = 0
let compScore = document.querySelector('.comp-score')
let playerScore = document.querySelector('.player-score')
let gameOver = document.querySelector('.game-over')
let gameBoard = document.querySelector('.board')
let spaces = document.getElementsByClassName('space')

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

//disable button after click

//make it so the bottom row has to fill first

//add winning combinations

//add to scoreboard
