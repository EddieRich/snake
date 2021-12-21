let lastRenderTime = 0
import { update as updateSnake, render as renderSnake, snakeValid, SNAKE_SPEED } from "./snake.js"
import { update as updateFood, render as renderFood } from "./food.js"
const gameBoard = document.getElementById('game-board')
let gameOver = false

function main(currentTime) {
  if (gameOver) {
    if (confirm('You Lose! Play Again'))
      window.location = '/'

    return
  }

  window.requestAnimationFrame(main)
  const delta = (currentTime - lastRenderTime)

  if ((currentTime - lastRenderTime) < SNAKE_SPEED) return

  lastRenderTime = currentTime
  update()
  render()
}

function update() {
  updateSnake()
  checkDeath()
  updateFood()
}

function render() {
  gameBoard.innerHTML = ''
  renderFood(gameBoard)
  renderSnake(gameBoard)
}

function checkDeath() {
  gameOver = !snakeValid()
}

window.requestAnimationFrame(main)