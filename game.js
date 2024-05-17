const SNAKE_SPEED = 5;

const gameBoard = document.getElementById("game-board");
let isGameOver = false;

const main = () => {
  update();
  draw();
  scoreDisplay();
  if (isGameOver) {
    alert("Game Over");
    clearInterval(gameLoop);
    snakeBody = null;
    food = null;
    draw();
  }
};
const restart = document
  .getElementById("reset")
  .addEventListener("click", () => {
    snakeBody = [
      { x: 11, y: 11 },
      { x: 11, y: 10 },
      { x: 11, y: 9 },
    ];
    food = getNewFoodPosition();
    update();
    draw();
    if (gameLoop) {
      clearInterval(gameLoop);
    }
    gameLoop = setInterval(main, 1000 / SNAKE_SPEED);
  });

const scoreDisplay = () => {
  let score = snakeBody.length;
  document.getElementsByClassName("scoreShow")[0].innerHTML =
    "当前分数:" + score;
};

let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
  console.log("Updating");
  updateSnake();
  updateFood();
  isGameOver = checkGameOver();
};

const draw = () => {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
};

const checkGameOver = () => {
  return snakeOutOfBounds() || snakeIntersectSelf();
};
