'use strict';

function Game() {
  var self = this;
  
  self.gameIsOver = false
  self.ball;
}

Game.prototype.start = function () {
  var self = this;

  self.gameMain = buildDom(`
    <main class="game container">
        </div>
        <div class="score">
          <span class="label">Score left:</span>
          <span class="label">  Score right:</span>
          <span class="value"></span>
        </div>
      </header>
      <div class="canvas">
        <canvas></canvas>
      </div>
    </main>
  `);

  self.canvasParentElement = self.gameMain.querySelector('.canvas');
  self.canvasElement = self.gameMain.querySelector('canvas');

  self.scoreElement = self.gameMain.querySelector('.score .value');

  document.body.appendChild(self.gameMain);

  self.width = 600;
  self.height = 600;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);
  
  self.canvasElement.strokeStyle="#FF0000";

  self.playerRight = new Player(self.canvasElement,'right')
  self.playerLeft = new Player(self.canvasElement,'left')
  if (self.playerRight >= window.innerHeight-self.playerRight.height) {
    self.playerRight = window.innerHeight- self.playerRight.height;
   };
  if (self.playerLeft >= window.innerHeight-self.playerLeft.height) {
    self.playerLeft = window.innerHeight- self.playerLeft.height;
   };

  self.ball = new Ball(self.canvasElement);
  self.startLoop();

  self.handleKeyDown= function (event) {
    if (event.key === 'ArrowUp') {
      self.playerRight.setDirection(-1);
    } else if (event.key === 'ArrowDown') {
      self.playerRight.setDirection(1);
    } else if (event.key === 'w') {
      self.playerLeft.setDirection(-1);
    } else if (event.key === 's') {
      self.playerLeft.setDirection(1);
    }
  };

  document.body.addEventListener('keydown', self.handleKeyDown);
  var height = self.canvasElement.height;
};

Game.prototype.startLoop = function() {
  var self = this;
  // if (Math.random() > 0.99){
  //   var y = self.canvasElement.height * Math.random();
  //   self.ball = 
  // };
 
  function loop() {
    var ctx = self.canvasElement.getContext('2d');
    self.playerRight.update();
    self.playerLeft.update();
    self.ball.update();
    ctx.clearRect(0, 0, self.width, self.height);
    self.playerRight.draw();
    self.playerLeft.draw();
    self.ball.draw();
    self.checkIfBallCollidedPlayer()
    if (!self.gameIsOver){
      window.requestAnimationFrame(loop);   
    };
  };
  window.requestAnimationFrame(loop);  
};

Game.prototype.checkIfBallCollidedPlayer = function(){
  var self = this;

  var ballRightSide = self.ball.x + self.ball.size / 2;
  var ballLeftSide = self.ball.x - self.ball.size / 2;
  var ballTopSide = self.ball.y - self.ball.size / 2;
  var ballBottomSide = self.ball.y + self.ball.size / 2;
  var ballLeftCenter =  {
    x : ballLeftSide,
    y : self.ball.y
  };
  var ballRightCenter = {
    x : ballRightSide, 
    y :self.ball.y
  };

  var playerRightSide = self.playerRight.x - self.playerRight.width / 2;
  var playerRightTop = self.playerRight.y - self.playerRight.height / 2;
  var playerRightBottom = self.playerRight.y + self.playerRight.height / 2;    
  var playerRightCenter = {
    x: playerRightSide,
    y: self.playerRight.y 
  };
  
  var playerLeftSide = self.playerLeft.x + self.playerLeft.width / 2;
  var playerLeftTop = self.playerLeft.y - self.playerLeft.height / 2;
  var playerLeftBottom = self.playerLeft.y + self.playerLeft.height / 2;
  var playerLeftCenter = {
    x: playerLeftSide,
    y :self.playerLeft.y 
  };
  var playerThatBallCollided = null;
  if ( ballRightSide >= playerRightSide && self.ball.x <= playerRightSide && ballTopSide >= playerRightTop && ballBottomSide <= playerRightBottom) {
    self.ball.direction.x = -1;
    playerThatBallCollided = self.playerRight
  }
  if ( ballLeftSide <= playerLeftSide && self.ball.x >= playerLeftSide && ballTopSide >= playerLeftTop && ballBottomSide <= playerLeftBottom) {
    self.ball.direction.x = 1;
    playerThatBallCollided = self.playerLeft
  }
  if (playerThatBallCollided) {
    var yDistance = self.ball.y - playerThatBallCollided.y;
    var ratio = yDistance/(playerThatBallCollided.height/2);
    self.ball.direction.y = ratio;
  }
  
  normalize(self.ball.direction, 1);
};

Game.prototype.onOver = function (callback) {
  var self = this;
  
  self.onGameOverCallback();
};

Game.prototype.gameOver = function (callback) {
  var self = this;
  self.gameIsOver = true
  self.ongameOverCallback()
};

Game.prototype.destroy = function () {
  var self = this;
  
  self.gameMain.remove();
};


function normalize(point, scale) {
  var norm = Math.sqrt(point.x * point.x + point.y * point.y);
  if (norm != 0) { // as3 return 0,0 for a point of zero length
    point.x = scale * point.x / norm;
    point.y = scale * point.y / norm;
  }
}