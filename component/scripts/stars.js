function Star(x,y,r,color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.rChange = 0.015;
    // this.vx = Math.floor(Math.random()*4+1);
    // this.vy = Math.floor(Math.random()*4+1);
    this.color = color;
}

Star.prototype = {
    constructor: Star,
    render: function(){
      context.beginPath();
      context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);
      context.shadowBlur = 8; 
      context.shadowColor = "white";
      context.fillStyle = this.color;
      context.fill();
    },
    update: function(){
      
       if (this.r > 2.7 || this.r < .8){
           this.rChange = - this.rChange;
       }
       this.r += this.rChange;
    }
}

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var C_WIDTH = canvas.width = document.body.offsetWidth;
var C_HEIGHT = canvas.height = document.body.offsetHeight;

var animationID;

function randomColor(){
        var arrColors = ["ffffff", "ffecd3" , "bfcfff"];
        return "#"+arrColors[Math.floor((Math.random()*3))];
}
        
var arrStars = [];

function start(){

    for(i = 0; i < 300; i++){
        var randX = Math.floor((Math.random()*C_WIDTH)+1);
        var randY = Math.floor((Math.random()*C_HEIGHT)+1);
        var randR = Math.random() * 2 + 1.5;
        
        var star = new Star(randX, randY, randR, randomColor());
        arrStars.push(star);
    }

    animate();

}

function update(){
    for(i = 0; i < arrStars.length; i ++){
        arrStars[i].update();
    }
    }
function animate(){
        update();
        context.clearRect(0,0,C_WIDTH,C_HEIGHT);
        for(var i = 0; i < arrStars.length; i++){
        arrStars[i].render();
        }
        animationID=requestAnimationFrame(animate);
}

$(document).ready(start);


$(window).resize(function(){
    cancelAnimationFrame(animationID);

    C_WIDTH = canvas.width = document.body.offsetWidth;
    C_HEIGHT = canvas.height = document.body.offsetHeight

    arrStars=[];

    start();
}
);
