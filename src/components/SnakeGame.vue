<template>
  <div class="snake-game">
    <h1>贪吃蛇游戏</h1>
    <div class="controls">
      <p>分数: {{ score }}</p>
      <button @click="startGame" v-if="!gameRunning">开始游戏</button>
      <button @click="endGame" v-if="gameRunning">结束游戏</button>
    </div>
    <canvas ref="gameCanvas" width="400" height="400"></canvas>
    <div class="direction-buttons" v-if="gameRunning">
      <button @click="changeDirection({ keyCode: 38 })">上</button>
      <div>
        <button @click="changeDirection({ keyCode: 37 })">左</button>
        <button @click="changeDirection({ keyCode: 39 })">右</button>
      </div>
      <button @click="changeDirection({ keyCode: 40 })">下</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnakeGame',
  data() {
    return {
      context: null,
      snake: [{ x: 10, y: 10 }],
      direction: 'RIGHT',
      food: { x: 15, y: 15 },
      gridSize: 20,
      gameInterval: null,
      score: 0,
      gameRunning: false
    };
  },
  mounted() {
    this.context = this.$refs.gameCanvas.getContext('2d');
    document.addEventListener('keydown', this.changeDirection);
    window.addEventListener('keydown', this.preventScroll);
  },
  beforeUnmount() {
    clearInterval(this.gameInterval);
    document.removeEventListener('keydown', this.changeDirection);
    window.removeEventListener('keydown', this.preventScroll);
  },
  methods: {
    startGame() {
      this.resetGame();
      this.gameRunning = true;
      this.gameInterval = setInterval(this.gameLoop, 100);
    },
    endGame() {
      clearInterval(this.gameInterval);
      this.gameRunning = false;
    },
    resetGame() {
      this.snake = [{ x: 10, y: 10 }];
      this.direction = 'RIGHT';
      this.food = { x: 15, y: 15 };
      this.score = 0;
    },
    gameLoop() {
      this.update();
      this.draw();
    },
    update() {
      let head = { ...this.snake[0] };

      switch (this.direction) {
        case 'LEFT':
          head.x--;
          break;
        case 'UP':
          head.y--;
          break;
        case 'RIGHT':
          head.x++;
          break;
        case 'DOWN':
          head.y++;
          break;
      }

      // Wrap snake position on edge of screen
      if (head.x < 0) head.x = this.gridSize - 1;
      if (head.x >= this.gridSize) head.x = 0;
      if (head.y < 0) head.y = this.gridSize - 1;
      if (head.y >= this.gridSize) head.y = 0;

      if (head.x === this.food.x && head.y === this.food.y) {
        this.snake.push({});
        this.food = {
          x: Math.floor(Math.random() * this.gridSize),
          y: Math.floor(Math.random() * this.gridSize)
        };
        this.score++;
      } else {
        this.snake.pop();
      }

      this.snake.unshift(head);

      if (this.snakeCollision(head)) {
        this.endGame();
        alert('游戏结束');
      }
    },
    draw() {
      this.context.clearRect(0, 0, this.$refs.gameCanvas.width, this.$refs.gameCanvas.height);

      this.context.fillStyle = 'green';
      this.snake.forEach(part => {
        this.context.fillRect(part.x * this.gridSize, part.y * this.gridSize, this.gridSize, this.gridSize);
      });

      this.context.fillStyle = 'red';
      this.context.fillRect(this.food.x * this.gridSize, this.food.y * this.gridSize, this.gridSize, this.gridSize);
    },
    changeDirection(event) {
      switch (event.keyCode) {
        case 37:
          if (this.direction !== 'RIGHT') this.direction = 'LEFT';
          break;
        case 38:
          if (this.direction !== 'DOWN') this.direction = 'UP';
          break;
        case 39:
          if (this.direction !== 'LEFT') this.direction = 'RIGHT';
          break;
        case 40:
          if (this.direction !== 'UP') this.direction = 'DOWN';
          break;
      }
    },
    preventScroll(event) {
      if ([37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
      }
    },
    snakeCollision(head) {
      for (let i = 1; i < this.snake.length; i++) {
        if (this.snake[i].x === head.x && this.snake[i].y === head.y) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style scoped>
.snake-game {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
}

h1 {
  margin-bottom: 20px;
  color: #333;
}

.controls {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.controls p {
  margin: 0 20px 0 0;
  font-size: 18px;
  color: #333;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #42b983;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #369f6e;
}

canvas {
  border: 1px solid #000;
  background-color: #fff;
}

.direction-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.direction-buttons div {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
</style>