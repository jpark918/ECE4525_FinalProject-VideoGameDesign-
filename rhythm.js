class MenuScreenState {
  constructor() {
    this.x = 200;
    this.y = 150;
  }
  execute(me) {
    if (keyArray[65] === 1) { //a
      fill(150);
      circle(this.x - 170, this.y, 40);
      addCircle(this.x - 170, this.y);
    }
    else {
      fill(225);
      circle(this.x - 170, this.y, 40);
    }
    if (keyArray[83] === 1) {
      fill(150);
      circle(this.x - 100, this.y, 40);
      addCircle(this.x - 100, this.y);
    }
    else {
      fill(225);
      circle(this.x - 100, this.y, 40);
    }
    if (keyArray[68] === 1) {
      fill(150);
      circle(this.x - 30, this.y, 40);
      addCircle(this.x - 30, this.y);
    }
    else {
      fill(225);
      circle(this.x - 30, this.y, 40)
    }
    if (keyArray[74] === 1) { //j
      fill(150);
      circle(this.x + 30, this.y, 40);
      addCircle(this.x + 30, this.y);
    }
    else {
      fill(225);
      circle(this.x + 30, this.y, 40);
    }
    if (keyArray[75] === 1) { //k
      fill(150);
      circle(this.x + 100, this.y, 40);
      addCircle(this.x + 100, this.y);
    }
    else {
      fill(225);
      circle(this.x + 100, this.y, 40);
    }
    if (keyArray[76] === 1) { //l
      fill(150);
      circle(this.x + 170, this.y, 40);
      addCircle(this.x + 170, this.y);
    }
    else {
      fill(225);
      circle(this.x + 170, this.y, 40)
    }
    fill(0);
    text("A", this.x - 176, this.y + 7);
    text("S", this.x - 106, this.y + 7)
    text("D", this.x - 36, this.y + 7);
    text("J", this.x + 24, this.y + 7);
    text("K", this.x + 94, this.y + 7);
    text("L", this.x + 164, this.y + 7);
  }
}

// Circle class that expands
class expandCircleObj {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.red = r;
    this.green = g;
    this.blue = b;
  }

  display() {
    push();
    stroke(this.red, this.green, this.blue);
    strokeWeight(5);
    noFill();
    circle(this.x, this.y, this.diameter);
    this.red -= 5;
    this.blue -= 5;
    this.green -= 5;
    pop();
  }

  update() {
    this.diameter += 5;
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
var gamestate = [new MenuScreenState];
var playgame;
var keyArray = [];
var c = [];
var index = 0;

var mouseClicked = function () {
  target.x = mouseX;
  target.y = mouseY;
  //text("x clicked" + target.x, 20, 20);
  //text("y clicked" + target.y, 20, 40);
};

function keyPressed() {
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}

function addCircle(x, y) {
  c[index] = (new expandCircleObj(x, y, 255, 255, 255));
  index++;
  if (index > 30) {
    index = 0;
  }
}

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
    for (var i = 0; i < c.length; i++) {
      c[i].display();
      c[i].update();
    }
    print(c.length);
    gamestate[0].execute(gamestate[0]);
    fill(255)
    textSize(15);
    text("Created by:", 160, 350);
    textSize(20);
    text("Daniel Shin and Jihoon Park", 75, 380);
    // if (canvas.mouseClicked()) {
    //   text("x clicked" + target.x, 20, 20);W
    //   text("y clicked" + target.y, 20, 30);
    // }
    //mouseClicked();
    if (target.x >= 138 && target.x <= 233 && target.y >= 291 && target.y <= 299 && start === 0) {
      print("Instructions clicked");
      start = 1;
    }
    else if (target.x >= 165 && target.y >= 256 && target.x <= 200 && target.y <= 270 && start === 0) {
      start = 2;
    }
    text("Play", 180, 270);
    text("Instructions", 145, 300);
  }
  else if (start === 1) {
    textSize(15);
    //text("THIS GAME IS SCUFFED AF", 0, 200);
    text("NAMEOFGAME is a rhythm game that tests the player's", 5, 15);
    text("ability to match button presses at a certain time.", 5, 30);
    //text("This platformer/music game?? will be created by", 0, 20);
    // text("Daniel and Jihoon", 0, 40);
    text("Controls: Use SDFJKL keys to hit the note at the correct", 5, 180);
    text("timing", 5, 195);
    text("Return", 340, 380);
    //mouseClicked();
    if (target.x >= 340 && target.y >= 370 && target.x <= 382 && target.y <= 380) {
      start = 0;
    }
    // if (target.x >= 0 && target.y >= 0){
    //   //print("return");
    //   background(220);
    //   start = 1;
    //   instruction = 0;
    // }
  }
  else if (start === 2) {
    text("I AM GAMING", 0, 200);
  }
}