'use strict';

function Game() {
  var self = this;

  self.gameIsOver = false
}

Game.prototype.start = function () {
  var self = this;

  self.gameMain = buildDom(`
    <main class="game container">
        </div>
        <div class="score">
          <span class="label">Score:</span>
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

  self.width = self.canvasParentElement.offsetWidth;
  self.height = self.canvasParentElement.offsetHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);
 
 self.playerRight=new Player(self.canvasElement,'right')
 self.playerLeft=new Player(self.canvasElement,'left')

 self.ball = new Ball(self.canvasElement)

  self.startLoop();

  self.handleKeyDown= function (event) {
    if (event.key === 'ArrowUp') {
      self.playerRight.setDirection(-1);
    } else if (event.key === 'ArrowDown') {
      self.playerRight.setDirection(+1);
    }
    else if (event.key === 'w') {
      self.playerLeft.setDirection(-1);
    }
    else if (event.key === 's') {
      self.playerLeft.setDirection(1);
    }
  };

  document.body.addEventListener('keydown', self.handleKeyDown);
  var height = self.canvasElement.height;
};

Game.prototype.startLoop = function() {
  var self = this;
 
  function loop() {
    var ctx = self.canvasElement.getContext('2d');
    self.playerRight.update();
    self.playerLeft.update();
    self.ball.update();
    ctx.clearRect(0, 0, self.width, self.height);
    self.playerRight.draw();
    self.playerLeft.draw();
    self.ball.update();
    if (!self.gameIsOver){
    window.requestAnimationFrame(loop);   
    };
  };
window.requestAnimationFrame(loop);  
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
//Game.prototype.checkIfEnemiesCollidedPlayer = function(){
  //var self =this;

  //self.enemies.forEach(function (item){
    //if(self.player.collidesWithEnemy(item)){
      //self.player.collided();

      //if (!self.player.lives) {
        //self.gameOver();
      //}
    //}
//})
//};

Game.prototype.destroy = function () {
  var self = this;
  
  self.gameMain.remove();
};
