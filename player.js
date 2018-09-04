
"use strict";
function Player(canvas, score,side){
    var self =this; 
    self.canvas = canvas;
    self.score = score;
    self.size = 100;
    //self.side = if ('side left'){
                //return x=10 +self.size/2;
                //else
                //return x= 250
    //};
    self.x = 10 +self.size/2
    self.y = canvas.height/2
    self.direction = 0;
    
    self.speed = 5;
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

Player.prototype.draw =function(){
    var self = this;
    
    self.ctx.fillStyle ='black';
    self.ctx.fillRect(25,100,25,100);
};
