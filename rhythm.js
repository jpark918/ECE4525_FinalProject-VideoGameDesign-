//For this first project milestone, Daniel contributed
//with the button press ripple animation in the main menu screen
//as well as the music note sliding animation in the instruction screen.
//Jihoon contributed with the main menu layout, instruction description,
//initial button press implementation,
//code functionality as well as stickman picture and music note picture 
//creation in the instruction screen.

//music note for the animation in the instruction screen
class musicnote {
  constructor(x, y, id) {
    this.x = x;
    this.y = y;
    this.id = id;
  }
  draw() {
    if (this.id == 0) { //eighth note
      eighth.resize(40, 40);
      image(eighth, this.x - 10, this.y - 10);
    }
    else { //quarter note
      quarter.resize(40, 40);
      image(quarter, this.x - 10, this.y - 10);
    }
  }
  move() {
    this.y -= 2;
  }
}

//the main menu screen state that contains the functionallity 
//for the keys
class MenuScreenState {
  constructor() {
    this.x = 200;
    this.y = 150;
    this.a = 0;
    this.s = 0;
    this.d = 0;
    this.j = 0;
    this.j = 0;
    this.l = 0;
  }
  execute(me) {
    if (keyArray[65] === 1 && this.a == 0) { //a
      fill(150);
      circle(this.x - 170, this.y, 40);
      addCircle(this.x - 170, this.y);
      this.a = 1;
    }
    else {
      if (keyArray[65] === 0) {
        this.a = 0;
      }
      fill(255);
      circle(this.x - 170, this.y, 40);
    }
    if (keyArray[83] === 1 && this.s == 0) { //s
      fill(150);
      circle(this.x - 100, this.y, 40);
      addCircle(this.x - 100, this.y);
      this.s = 1;
    }
    else {
      if (keyArray[83] === 0) {
        this.s = 0;
      }
      fill(255);
      circle(this.x - 100, this.y, 40);
    }
    if (keyArray[68] === 1 && this.d == 0) { //d
      fill(150);
      circle(this.x - 30, this.y, 40);
      addCircle(this.x - 30, this.y);
      this.d = 1;
    }
    else {
      if (keyArray[68] === 0) {
        this.d = 0;
      }
      fill(255);
      circle(this.x - 30, this.y, 40)
    }
    if (keyArray[74] === 1 && this.j == 0) { //j
      fill(150);
      circle(this.x + 30, this.y, 40);
      addCircle(this.x + 30, this.y);
      this.j = 1;
    }
    else {
      if (keyArray[74] === 0) {
        this.j = 0;
      }
      fill(255);
      circle(this.x + 30, this.y, 40);
    }
    if (keyArray[75] === 1 && this.k == 0) { //k
      fill(150);
      circle(this.x + 100, this.y, 40);
      addCircle(this.x + 100, this.y);
      this.k = 1;
    }
    else {
      if (keyArray[75] === 0) {
        this.k = 0;
      }
      fill(255);
      circle(this.x + 100, this.y, 40);
    }
    if (keyArray[76] === 1 && this.l == 0) { //l
      fill(150);
      circle(this.x + 170, this.y, 40);
      addCircle(this.x + 170, this.y);
      this.l = 1;
    }
    else {
      if (keyArray[76] === 0) {
        this.l = 0;
      }
      fill(255);
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
class expandCircleObj { //ripple that expands when key is pressed
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.diameter = 40;
    this.red = r;
    this.green = g;
    this.blue = b;
    this.draw = 1;
  }

  draw() {
    push();
    stroke(this.red, this.green, this.blue);
    strokeWeight(5);
    noFill();
    circle(this.x, this.y, this.diameter);
    this.red -= 5;
    this.blue -= 5;
    this.green -= 5;
    if (this.red <= 10) { //when color reaches below 10 stop drawing
      this.draw = 0;
    }
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
var images = [];
var eighth;
var quarter;
var currFrameCount = 0;
var count = 0;

var mouseClicked = function () {
  target.x = mouseX;
  target.y = mouseY;
};

function keyPressed() {
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}

function addCircle(x, y) { //adds a circle to the key
  c[index] = (new expandCircleObj(x, y, 255, 255, 255));
  index++;
  if (index > 60) {
    index = 0;
  }
}

function setup() {
  canvas = createCanvas(400, 400);
  target = new targetObj(100, 100);
  start = 0;
  instruction = 0;
  playgame = 0;
  //draws the eighth and quarter note to save
  noStroke();
  rect(129, 130, 10, 170);
  rect(329, 130, 10, 170);
  push();
  translate(100, 300);
  rotate(-10);
  ellipse(6, -5, 90, 70);
  pop();
  push();
  translate(300, 300);
  rotate(-10);
  ellipse(6, -5, 90, 70);
  pop();
  rect(129, 130, 210, 30);
  eighth = get(0, 0, width, height);
  background(0);
  rect(129, 130, 10, 170);
  push();
  translate(100, 300);
  rotate(-10);
  ellipse(6, -5, 90, 70);
  pop();
  quarter = get(0, 0, width, height);
}

function draw() {
  background(0);
  if (start === 0) {
    for (var i = 0; i < c.length; i++) { //ripples
      if (c[i].draw == 1) {
        c[i].draw();
        c[i].update();
      }
    }
    gamestate[0].execute(gamestate[0]);
    fill(255)
    textSize(30);
    //text("Thursday Night Thrillin'", 50, 100)
    //text("Java Beats", 120, 100)
    text("Ripples", 150, 100)
    textSize(15);
    text("Created by:", 160, 350);
    textSize(20);
    text("Daniel Shin and Jihoon Park", 70, 380);
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
    //mouseClicked();.
    fill(255);
    rect(144,50,110, 100);
    if (currFrameCount < frameCount - 60) { //indicates which notes appear
      switch (count) {
        case 0:
          images[count] = new musicnote(105, 114, 0);
          break;
        case 1:
          images[count] = (new musicnote(275, 114, 1));
          break;
        case 2:
          images[count] = (new musicnote(115, 114, 1));
          break;
        case 3:
          images[count] = (new musicnote(265, 114, 0));
          break;
      }
      count++;
      if (count >= 4) {
        count = 0;
      }
      currFrameCount = frameCount;
    }
    for (var i = 0; i < images.length; i++) { //draws notes
      images[i].draw();
      images[i].move();
    }
    strokeWeight(0);
    fill(137,207,240);
    ellipse(200,160, 270, 14);
    fill(240,225,48)
    ellipse(200,160,270,8)
    fill(128,0,0);
    ellipse(200,160,270,4);
    fill(255)
    //spkr1
    stroke(0);
    strokeWeight(1);
    rect(100, 100, 30, 50);
    circle(115, 114, 20);
    circle(115, 138, 20);
    //spkr 2
    rect(260, 100, 30, 50);
    circle(275, 114, 20);
    circle(275, 138, 20);
    
    fill(255)
    square(200, 110, 20);
    square(210, 130, 20);
    square(190, 130, 20);
    circle(185, 100, 15);
    
    line(186,107,190,130); //body
    line(190,130,180,138); //left thigh
    line(180,138,185,150); //left leg
    line(190,130, 200,135); //right thigh;
    line(200,135, 190,150); //right leg
    line(186,107, 180,120); //left upper arm
    line(180, 120, 185,130); //left lower arm
    line(186, 107, 195, 120); //right upper arm
    line(195, 120, 185, 125);
    fill(255,0,0);
    arc(185,100,15,15,PI+QUARTER_PI, HALF_PI - QUARTER_PI);
    line(180,95, 195, 110);

    textSize(15);
    fill(255);
    //text("THIS GAME IS SCUFFED AF", 0, 200);
    text("Ripples is a rhythm game that tests the player's", 5, 215);
    text("ability to match button presses at a certain time.", 5, 230);
    text("Failure to time button presses will slowly bring", 5, 245);
    text("your score down until you lose. The game will", 5, 260);
    text("only allow a certain amount of misses in a certain", 5, 275);
    text("time frame before you lose. You can recover", 5, 290);
    text("your health and prevent loss by timing button", 5, 305);
    text("presses.", 5, 320);
    //text("This platformer/music game?? will be created by", 0, 20);
    // text("Daniel and Jihoon", 0, 40);
    text("Controls: Use ASDJKL keys to hit the note at the correct", 5, 350);
    text("timing in order to score points.", 5, 365);
    text("Return", 340, 380);
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