"use strict";

function Ball(canvas){
    var self =this; 
    self.canvas = canvas;
    self.size = 20;
    self.x = canvas.width/2;
    self.y = canvas.height/2 + 50;
    self.speed = 2;
    self.ctx = self.canvas.getContext('2d');   
    self.direction = {
        x: 1,
        y: 0
    }
};

Ball.prototype.collidesPlayer = function(){
    // var a = {
    //     x:0,
    //     y:0
    // };
    // var b = {
    //     x:self.width,
    //     y:0
    // };
    // var c = {
    //     x:0,
    //     y:self.height
    // };
    // var d = {
    //     x:self.width,
    //     y:self.height
    // };
    // var k ={
    //     x:0,
    //     y:self.height/2
    // }
    // var l = {
    //     x: self.width,
    //     y:self.height/2
    // }
};

Ball.prototype.update = function() {
    var self = this;
    self.x += self.speed * self.direction.x;
    self.y += self.speed * self.direction.y
};

Ball.prototype.draw =function() {
    var self = this;
    self.ctx.fillStyle ='blue';
    self.ctx.fillRect(self.x-self.size/2, self.y-self.size/2, self.size, self.size);
};
