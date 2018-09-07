
"use strict";
function Player(canvas, side){
    var self = this; 
    self.canvas = canvas;
    self.canvasHeight = canvas.height;
    self.canvasWidth = canvas.width;
    self.score = 0;
    self.width = 30;
    self.height = 100;
    
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
Player.prototype.collides= function(ball){
    var self = this;
    var result = false;

    return result;
}
Player.prototype.collidesWithBall = function(){
    var e = {
        x:self.width,
        y:0
    };
    var f= {
        x:self.width,
        y:self.height/2
    };
    var g = {
        x:self.width,
        y:self.height
    };
    var h= {
        x:0,
        y:0
    };
    var i  = {
        x:0,
        y:self.height/2
    };
    var j = {
        x:0,
        y:self.height
    };
    var e = {
        x:self.width,
        y:0
    };
    
    
     if (self.ball.x <self.player.x && self.ball.y === center){
         return self.ball.direction.x
     } else if (self.ball.x <self.player.x && self.ball.y <= zoneUp){
         return self.ball.direction.x*-1 &&self.ball.direction.y+-1
     }else if (self.ball.x <=self.player.x && self.ball.y <= zoneDown){
         return self.ball.direction.x*-1 &&self.ball.direction.y
     //return result;
 }
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

Player.prototype.draw =function(){
    var self = this;
    
    self.ctx.fillStyle ='black';
    self.ctx.fillRect(self.x-self.width/2, self.y-self.height/2, self.width, self.height);
};
