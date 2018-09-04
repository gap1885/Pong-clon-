# Pong(clon)

## Description
Ping pong game using canvas and trying to reproduce the classic atari game Pong


## MVP (DOM - CANVAS)
Two players (a,b), and a ball. The player has to touch the ball and avoid to pass from a limit (x). If the ball pass the limit the opposite player gets one point. Game ends when any player gets 3 points
- Create players (a,b)
- Creat ball ()
- Set collision's effects
- Update points 
- + 3 points any player = game over

## Backlog
    - sounds
    - color
    - background
    - music

## Data structure

### Main.js
```
buildDom()

buildSplash()
destroySplash()

buildGame()
destroyGame()

buildGameOver()
destroyGameOver()

```

### Game.js
```
properties
    - self.players = [players]
    - self.playerOne = new 
    - self.playerTwo
    - self.ball
    - self.isOver

methods
    - Ball.prototype.loop()

```

### Player.js
```
properties
    - self.size (x,y)
    - self.color
    - self.speed
    - self.score
    - self.initialPosition = { x: x, y: y)} (spec)
    - self.position = { x: x, y: y)} 
    - self.direction (spec)

methods
    - Player.prototype.draw()
    - Player.proyotype.update()
    - Player.prototype.move()
    - Player.prototype.score()
    - Player.prototype.checkCollisionWithWall()
````

### Ball.js
```
properties
    - self.size (x,y)
    - self.color
    - self.speed
    - self.intialPosition = { x: x, y: y)}
    - self.position = { x: x, y: y)}

methods
    - Ball.prototype.draw()
    - Ball.proyotye.update()
    - Ball.prototype.direction()
    - Ball.prototype.checkCollisionWithWall()
    - Ball.prototype.checkCollisionWithPlayer()

    // create collision variables (on the center, on the corner, in other position):
    // center: if self.player.x center === self.ball.x center turns back opossite direction x
    // corner if corner(1).player(1) == corner (1).ball send ball at 90ª (3 other similar variables)
    // else (create vector)
```

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen

 Initial board:
  Text = Pong!
  button. instructions: (hidden screen)
   player a = arrows
   player b = S,W
  botton.startGame
  botton.esc

Transition:
startGame()
close()


- gameScreen

    player a = (initial.x,initial.y)
    player b = (initial.x,initial.y)
    ball = (initial.x,initial.y)

    Transition:
    gameOver()

- gameoverScreen
    Text = "Game Over"
    Text = "Player (n) wins!2
    botton.playAgain
    botton.esc

    Transitions:
    botton.playAgain
    botton.esc


## Task
- create a repository
- create main file
- create game file
    - set properties
    - set methods
- create player file
    - set properties
    - set methods
- create ball file
    - set properties
    - set methods
- copy basic structure html and update
- create game initial screen
- create game screen
- collision ball and player algorythm


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
