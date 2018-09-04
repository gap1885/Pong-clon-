'use strict';


function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashMain;
  var gameOverMain;

  var game; // instance of Game

  // -- splash

  function buildSplash() {

    splashMain = buildDom(`
      <main>
        <h1>Pong</h1>
        <button>Start</button>
        <button>Instructions</button>
        <button>ESC</button>
      </main>
    `);
    
    document.body.appendChild(splashMain);

    var button = splashMain.querySelector('button');
    button.addEventListener('click', startGame);
  }

  function destoySplash() {
    splashMain.remove();
  }

  
  // -- game

  function startGame() {
    destoySplash();
    destoyGameOver();

    game = new Game();
    game.start();
    //game.onOver(function() {
   //   gameOver(game.score);
    //});
  }

  function destroyGame() {
    game.destroy();
  }

  // -- game over 


  function gameOver(score) {
    destroyGame();
    buildGameOver(score);
  }

  function buildGameOver(score) {

    gameOverMain = buildDom(`
      <main>
        <h1>Game over</h1>
        <p>Player x wins: <span></span></p>
        <button>Restart</button>
        <button>ESC</button>
      </main>
    `);

    var button = gameOverMain.querySelector('button');
    button.addEventListener('click', startGame);    
    
    var span = gameOverMain.querySelector('span');
    span.innerText = score;

    document.body.appendChild(gameOverMain);
  }

  function destoyGameOver() {
    if (gameOverMain) {
      gameOverMain.remove();
    }
  }

  // -- initialize

  buildSplash();
}

window.addEventListener('load', main);