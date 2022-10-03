let myScore = 0
let theirScore = 0
let compScore = document.querySelector('.comp-score')
let playerScore = document.querySelector('.player-score')
let gameOver = document.querySelector('.game-over')
let spaces = document.getElementsByClassName('space')

for (const space of spaces)
  space.addEventListener('click', () => {
    space.style.backgroundColor = '#b091c9'
  })
