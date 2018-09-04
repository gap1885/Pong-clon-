"use strict";

function Ball(canvas,y, speed){
    var self =this; 

    self.canvas = canvas;
    self.size = 20;
    self.x = canvas.width 
    self.y = y;
    self.speed = speed;
    self.ctx = self.canvas.getContext('2d');   

};

Ball.prototype.update = function() {
    var self = this;

    self.x = self.x - self.speed;
};

Ball.prototype.draw =function() {
    var self = this;
        
    self.ctx.fillStyle ='black';
    self.ctx.fillRect(20,20,20,20);
};


