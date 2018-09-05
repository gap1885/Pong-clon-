"use strict";

function Ball(canvas){
    var self = this; 
    self.canvas = canvas;
    self.canvasHeight = canvas.height;
    self.canvasWidth = canvas.width;
    self.score = 0;
    self.size = 20;
    self.x= canvas.width/2
    self.y = canvas.height/2
 
    
    self.speed = 2;
    self.ctx = canvas.getContext('2d');   
}


Ball.prototype.update = function(){
    var self = this;
    
    
    self.y = self.y +self.direction * self.speed;

    if (self.y < 0) {
        self.direction = 1;
    }
    if (self.y > self.canvas.height) {
        self.direction =-1;
    }
};

Ball.prototype.draw =function(){
    var self = this;
    
    self.ctx.fillStyle ='blue';
    self.ctx.fillRect(self.x-self.size/2, self.y-self.size/2, self.size/2, self.size/2);
};