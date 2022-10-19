class MenuScreenState{
  execute(me){
    
  }
}

class targetObj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var start;
var instruction;
var target;
var canvas;
var gamestate = [];
var playgame;

var mouseClicked = function () {
  target.x = mouseX;
  target.y = mouseY;
  //text("x clicked" + target.x, 20, 20);
  //text("y clicked" + target.y, 20, 40);
};

function setup() {
  canvas = createCanvas(400, 400);
  target = new targetObj(100, 100);
  start = 0;
  instruction = 0;
  playgame = 0;
}

function draw() {
  background(0);
  if (start === 0) {
    fill(255)
    textSize(15);
    text("Created by:", 150, 350);
    textSize(20);
    text("Daniel Shin and Jihoon Park", 60, 380);
    // if (canvas.mouseClicked()) {
    //   text("x clicked" + target.x, 20, 20);W
    //   text("y clicked" + target.y, 20, 30);
    // }
    //mouseClicked();
    if (target.x >= 138 && target.x <= 233 && target.y >= 291 && target.y <= 299 && start === 0){
      print("Instructions clicked");
      start = 1;
    }
    else if (target.x >= 165 && target.y >= 256 && target.x <= 200 && target.y <= 270 && start === 0){
      start = 2;
    }
    text("Play", 165, 270);
    text("Instructions", 135, 300);
  }
  else if (start === 1){
    textSize(15);  
    text("THIS GAME IS SCUFFED AF", 0, 200);
    //text("This platformer/music game?? will be created by", 0, 20);
   // text("Daniel and Jihoon", 0, 40);
    text("Return", 340, 380);
    //mouseClicked();
    if (target.x >= 340 && target.y >= 370 && target.x <= 382 && target.y <= 380){
      start = 0;
    }
    // if (target.x >= 0 && target.y >= 0){
    //   //print("return");
    //   background(220);
    //   start = 1;
    //   instruction = 0;
    // }
  }
  else if(start === 2){
    text("I AM GAMING", 0, 200);
  }
}
