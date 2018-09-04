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

  self.player = new Player(self.canvasElement,5);
 
  self.startLoop();

  self.handleKeyDown = function (event) {
    if (event.key === 'ArrowUp') {
      self.player.setDirection(-1);
    } else if (event.key === 'ArrowDown') {
      self.player.setDirection(1);
    }
    
  };

  document.body.addEventListener('keydown', self.handleKeyDown);
  var height = self.canvasElement.height;
};

Game.prototype.startLoop = function() {
  var self = this;
 
  function loop() {
    var ctx = self.canvasElement.getContext('2d');
    
    if (Math.random() > 0.99){
    var y = self.canvasElement.height * Math.random();
    }
   // create more enemies now and then
   //update player posdition
   
    self.player.update();
   
    ctx.clearRect(0, 0, self.width, self.height);

    self.player.draw();
   
    if (!self.gameIsOver){
      window.requestAnimationFrame(loop);
      
    } //draw all enemies 
   window.requestAnimationFrame(loop);

 }
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
Game.prototype.checkIfEnemiesCollidedPlayer = function(){
  var self =this;

  self.enemies.forEach(function (item){
    if(self.player.collidesWithEnemy(item)){
      self.player.collided();

      if (!self.player.lives) {
        self.gameOver();
      }
    }
})
};

Game.prototype.destroy = function () {
  var self = this;
  
  self.gameMain.remove();
};
