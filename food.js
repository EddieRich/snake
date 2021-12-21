import { onSnake, expandSnake } from "./snake.js"

let food = randomFood()

export function update() {
  if (onSnake(food)) {
    while (onSnake(food)) {
      food = randomFood()
    }
    expandSnake()
  }
}

export function render(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function randomFood() {
  return { x: Math.floor(Math.random() * 19) + 2, y: Math.floor(Math.random() * 19) + 2 }
}