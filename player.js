
"use strict";
function Player(canvas, side){
    var self = this; 
    self.canvas = canvas;
    self.canvasHeight = canvas.height;
    self.canvasWidth = canvas.width;
    self.score = 0;
    self.size = 50;
   
    self.side = side;
    if(self.side ==='left'){
        self.x=10
    }
    else if(self.side === 'right'){
        self.x= self.canvasWidth -10
    }
    self.y = canvas.height/2
    self.direction = 0;
    
    self.speed = 2;
    self.ctx = canvas.getContext('2d');   
}

Player.prototype.setDirection = function(direction){
    var self = this;
    self.direction = direction;
};

Player.prototype.update = function(){
    var self = this;
    
    
    self.y = self.y +self.direction * self.speed;

    if (self.y < 0) {
        self.direction = 1;
    }
    if (self.y > self.canvas.height) {
        self.direction =-1;
    }
};
//Player.prototype.collidesWithBall = function(ball){
   // var self = this;
    //var result = false;

    //return result;
//}
//Player.prototype.collided =function(){
    //var self = this;
    //return - ball.self.direction;

//}
Player.prototype.draw =function(){
    var self = this;
    
    self.ctx.fillStyle ='black';
    self.ctx.fillRect(self.x-self.size/2, self.y-self.size/2, self.size, self.size);
};
