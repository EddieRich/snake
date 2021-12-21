export const SNAKE_SPEED = 160
import { getInputDirection } from "./input.js"

const snakeBody = [{ x: 11, y: 11 }]

export function update() {
  const direction = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += direction.x
  snakeBody[0].y += direction.y
}

export function render(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(segment, position)
  })
}

export function expandSnake() {
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
}

export function snakeValid() {
  return snakeBody[0].x > 0 && snakeBody[0].y > 0 && snakeBody[0].x < 22 && snakeBody[0].y < 22 && !onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}