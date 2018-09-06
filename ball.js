"use strict";

function Ball(canvas){
    var self =this; 
    self.canvas = canvas;
    self.size = 20;
    self.x = canvas.width/2;
    self.y = canvas.height/2;
    self.speed = 3;
    self.ctx = self.canvas.getContext('2d');   
};

Ball.prototype.update = function() {
    var self = this;

    self.x = self.x - self.speed;
};

Ball.prototype.draw =function() {
    var self = this;
    self.ctx.fillStyle ='blue';
    self.ctx.fillRect(self.x, self.y, self.size, self.size);
};
