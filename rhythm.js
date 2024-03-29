//For our final project, Daniel contributed
//with the Music class which includes our tilemap and button checking for score implementation that //is mainly our game class state. 
//Jihoon contributed with button press visualization for the game class state and combo streak //visualization. 

//this class handles the animation for game play state when button press and
//note is pressed at the correct time. The flash animation fades to black and melts 
//in with the background
class flash {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.draw = 1;
    this.color = 255;
  }
  display() {
    noStroke();
    fill(this.r, this.g, this.b);
    this.r -= 10;
    this.g -= 10;
    this.b -= 10;
    this.color -= 10;
    circle(this.x, this.y, 10);
    if (this.color < 0) {
      this.draw = 0;
    }
  }
}

//This function adds new flash to the screen whenever 
//button is pressed on time with the note.
//color can change depending on what the combo streak 
//the player is at.
function addflash(x, y) {
  if (fever === 1) {
    fl[ind] = (new flash(x, y, 255, 255, 255));
  }
  if (fever === 2) {
    fl[ind] = (new flash(x, y, 0, 255, 255));
  }
  if (fever === 3) {
    fl[ind] = (new flash(x, y, 255, 255, 0));
  }
  if (fever === 4) {
    var rando = int(random(0, 6));
    //print(rando);
    switch (rando) {
      case 0:
        fl[ind] = (new flash(x, y, 255, 0, 0));
        break;
      case 1:
        fl[ind] = (new flash(x, y, 0, 255, 0));
        break;
      case 2:
        fl[ind] = (new flash(x, y, 0, 0, 255));
        break;
      case 3:
        fl[ind] = (new flash(x, y, 255, 255, 0));
        break;
      case 4:
        fl[ind] = (new flash(x, y, 255, 0, 255));
        break;
      case 5:
        fl[ind] = (new flash(x, y, 0, 255, 255));
        break;
    }
  }
  ind++;
  if (ind > 60) {
    ind = 0;
  }
}

//This class creates the note object in order to play the game
//in the play state.
class Note {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.played = 0;
  }
  draw() {
    noStroke();
    fill(255);
    circle(this.x, this.y, 30);
    //fill(255, 0, 0);
    //text(this.x, this.x, this.y);
  }
}

//this class includes the tilemap for our main game play,
//note objects in order to play the game, and button checking
//implmentation in order to score points
class Music {
  constructor(speed, text) {
    this.speed = speed;
    this.score = 0;
    //reading from txt file
    this.tilemap = text;
    this.notes = [];
    this.streak = 0;
  }
  initialize() {
    this.score = 0;
    this.notes = [];
    this.streak = 0;
    for (var i = 0; i < this.tilemap.length; i++) {
      for (var j = 0; j < this.tilemap[i].length; j++) {
        switch (this.tilemap[i][j]) {
          case "1":
            this.notes.push(new Note(j * 60 + 50, i * 30 - this.tilemap.length * 30));
            break;
          case "2":
            this.notes.push(new Note(j * 60 + 50, i * 30 - this.tilemap.length * 30 - 10));
            break;
          case "3":
            this.notes.push(new Note(j * 60 + 50, i * 30 - this.tilemap.length * 30 - 20));
            break;
        }
      }
    }
  }
  move() {
    for (var i = 0; i < this.notes.length; i++) {
      this.notes[i].y += this.speed;
    }
  }
  checkPlay() {
    this.scorestreak();
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].y >= 350 - this.speed * 2.5 && this.notes[i].y <= 350 + this.speed * 2.5 && this.notes[i].played === 0) {
        fill(255)
        if (a === 1 && this.notes[i].x === 50) {
          this.notes[i].played = 1;
          this.score += 1 * fever;
          this.streak++;
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
        }
        if (s === 1 && this.notes[i].x === 110) {
          this.notes[i].played = 1;
          this.score += 1 * fever;
          this.streak++;
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
        }
        if (d === 1 && this.notes[i].x === 170) {
          this.notes[i].played = 1;
          this.score += 1 * fever;
          this.streak++;
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
        }
        if (j === 1 && this.notes[i].x === 230) {
          this.notes[i].played = 1;
          this.score += 1 * fever;
          this.streak++;
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
        }
        if (k === 1 && this.notes[i].x === 290) {
          this.notes[i].played = 1;
          this.score += 1 * fever;
          this.streak++;
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
        }
        if (l === 1 && this.notes[i].x === 350) {
          this.notes[i].played = 1;
          this.score += 1 * fever;
          this.streak++;
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
          addflash(random() * width, random() * height);
        }
      }
      if (this.notes[i].y >= 400 && this.notes[i].played === 0) {
        this.score--;
        this.streak = 0; //reset the streak
        fever = 1;
        this.notes[i].played = 1;
      }
    }
  }
  //This function handles the visual for combo streak
  scorestreak() {
    noStroke();
    if (this.streak >= 10 && this.streak <= 29) {  //20 39
      fill(0, 255, 255);
      fever = 2;
    }
    else if (this.streak >= 30 && this.streak <= 49) {  //40 59
      //fill(200, 164.7, 0); //orange
      fill(255, 255, 0); //Dandelion Yellow
      fever = 3;
    }
    else if (this.streak >= 50) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      fever = 4;
    }
    if (this.streak >= 10) {
      rect(371.5, 143, 17, 20);
      if (this.streak >= 30) {
        rect(371.5, 118, 17, 24);
      }
      if (this.streak >= 50) {
        rect(371.5, 96, 17, 20)
      }
    }
  }
} //End music class

//music note for the animation in the instruction screen
class instructionNote {
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
      circle(this.x - 170, this.y, 30);
      addCircle(this.x - 170, this.y);
      this.a = 1;
    }
    else {
      if (keyArray[65] === 0) {
        this.a = 0;
      }
      fill(255);
      circle(this.x - 170, this.y, 30);
    }
    if (keyArray[83] === 1 && this.s == 0) { //s
      fill(150);
      circle(this.x - 100, this.y, 30);
      addCircle(this.x - 100, this.y);
      this.s = 1;
    }
    else {
      if (keyArray[83] === 0) {
        this.s = 0;
      }
      fill(255);
      circle(this.x - 100, this.y, 30);
    }
    if (keyArray[68] === 1 && this.d == 0) { //d
      fill(150);
      circle(this.x - 30, this.y, 30);
      addCircle(this.x - 30, this.y);
      this.d = 1;
    }
    else {
      if (keyArray[68] === 0) {
        this.d = 0;
      }
      fill(255);
      circle(this.x - 30, this.y, 30)
    }
    if (keyArray[74] === 1 && this.j == 0) { //j
      fill(150);
      circle(this.x + 30, this.y, 30);
      addCircle(this.x + 30, this.y);
      this.j = 1;
    }
    else {
      if (keyArray[74] === 0) {
        this.j = 0;
      }
      fill(255);
      circle(this.x + 30, this.y, 30);
    }
    if (keyArray[75] === 1 && this.k == 0) { //k
      fill(150);
      circle(this.x + 100, this.y, 30);
      addCircle(this.x + 100, this.y);
      this.k = 1;
    }
    else {
      if (keyArray[75] === 0) {
        this.k = 0;
      }
      fill(255);
      circle(this.x + 100, this.y, 30);
    }
    if (keyArray[76] === 1 && this.l == 0) { //l
      fill(150);
      circle(this.x + 170, this.y, 30);
      addCircle(this.x + 170, this.y);
      this.l = 1;
    }
    else {
      if (keyArray[76] === 0) {
        this.l = 0;
      }
      fill(255);
      circle(this.x + 170, this.y, 30);
    }
    fill(0);
    noStroke();
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

  display() {
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
//This class is a part of computer cursor functionality
class targetObj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var mode;  //difficulty selection screen state?
var start;
var instruction;
var target;
var canvas;
var gamestate = [new MenuScreenState()];
var playgame;
var keyArray = [];
var c = [];
var fl = [];
var ind = 0;
var index = 0;
var images = [];
var eighth;
var quarter;
var currFrameCount = 0;
var count = 0;
var music;
let song;
var startost = 0;
var txt = 0;
var txt2 = 0;
var sel;
var music2;
let song2;
var gameover = 0;
var a = 0;
var fever = 1;
var highscore1 = 0;
var highscore2 = 0;

var mouseClicked = function () {
  target.x = mouseX;
  target.y = mouseY;
};

function keyPressed() {
  if (keyCode === 65) {
    a = 1;
  }
  if (keyCode === 83) {
    s = 1;
  }
  if (keyCode === 68) {
    d = 1;
  }
  if (keyCode === 74) {
    j = 1;
  }
  if (keyCode === 75) {
    k = 1;
  }
  if (keyCode === 76) {
    l = 1;
  }
  keyArray[keyCode] = 1;
}
function keyReleased() {
  keyArray[keyCode] = 0;
}

function resetKey() {
  a = 0;
  s = 0;
  d = 0;
  j = 0;
  k = 0;
  l = 0;
}

function addCircle(x, y) { //adds a circle to the key
  c[index] = (new expandCircleObj(x, y, 255, 255, 255));
  index++;
  if (index > 60) {
    index = 0;
  }
}

function preload() {
  song = loadSound('poke.mp3');
  song2 = loadSound('sheep.mp3');
  txt = loadStrings("tilemap.txt");
  txt2 = loadStrings("sheep.txt");
}

function setup() {
  frameRate(30);
  canvas = createCanvas(400, 400);
  target = new targetObj(100, 100);
  mode = 0;
  start = 0;
  instruction = 0;
  playgame = 0;
  music = new Music(6.868, txt);
  music.initialize();
  song.setVolume(0.5);
  music2 = new Music(11.805, txt2);
  music2.initialize();
  song2.setVolume(0.3);
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
        c[i].display();
        c[i].update();
      }
    }
    gamestate[0].execute(gamestate[0]);
    fill(255)
    textSize(30);
    text("JavaS. Beats", 120, 100)
    textSize(15);
    text("Created by:", 160, 350);
    textSize(20);
    text("Daniel Shin and Jihoon Park", 70, 380);
    //mouseClicked();
    if (target.x >= 138 && target.x <= 233 && target.y >= 291 && target.y <= 299 && start === 0) {
      start = 1;
    }
    else if (target.x >= 165 && target.y >= 256 && target.x <= 200 && target.y <= 270 && start === 0) {
      start = 5; //5 is unused condition in code
      mode = 1;
    }
    text("Play", 180, 270);
    text("Instructions", 145, 300);
  }
  else if (start === 1) {
    fill(255);
    rect(144, 50, 110, 100);
    if (currFrameCount < frameCount - 60) { //indicates which notes appear
      switch (count) {
        case 0:
          images[count] = new instructionNote(105, 114, 0);
          break;
        case 1:
          images[count] = (new instructionNote(275, 114, 1));
          break;
        case 2:
          images[count] = (new instructionNote(115, 114, 1));
          break;
        case 3:
          images[count] = (new instructionNote(265, 114, 0));
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
    fill(137, 207, 240);
    ellipse(200, 160, 270, 14);
    fill(240, 225, 48)
    ellipse(200, 160, 270, 8)
    fill(128, 0, 0);
    ellipse(200, 160, 270, 4);
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

    line(186, 107, 190, 130); //body
    line(190, 130, 180, 138); //left thigh
    line(180, 138, 185, 150); //left leg
    line(190, 130, 200, 135); //right thigh;
    line(200, 135, 190, 150); //right leg
    line(186, 107, 180, 120); //left upper arm
    line(180, 120, 185, 130); //left lower arm
    line(186, 107, 195, 120); //right upper arm
    line(195, 120, 185, 125);
    fill(255, 0, 0);
    arc(185, 100, 15, 15, PI + QUARTER_PI, HALF_PI - QUARTER_PI);
    line(180, 95, 195, 110);

    textSize(15);
    fill(255);
    text("JavaS Beats is a rhythm game that tests the player's", 5, 215);
    text("ability to match button presses at a certain time.", 5, 230);
    text("Failure to time button presses will slowly bring", 5, 245);
    text("your score down. The more notes you get correct in a row,", 5, 260);
    text("the higher your score multiplier you get.", 5, 275);
    text("Try to get the highest score!", 5, 300);
    
    text("Controls: Use ASDJKL keys to hit the note at the correct", 5, 350);
    text("timing in order to score points.", 5, 365);
    text("Return", 340, 380);
    if (target.x >= 340 && target.y >= 370 && target.x <= 382 && target.y <= 380) {
      start = 0;
    }
  }
  else if (start === 2) {
    images = [];
    c = [];
    if (sel === 0) {
      if (frameCount === startost + 19) {
        song.play();
      }
      background(0);
      for (var i = 0; i < fl.length; i++) { //flash
        if (fl[i].draw == 1) {
          fl[i].display();
        }
      }
      music.move();
      music.checkPlay();
      resetKey();
      for (var i = 0; i < music.notes.length; i++) {
        if (music.notes[i].played === 0 && music.notes[i].y >= -30) {
          music.notes[i].draw();
        }
      }
      fill(255);
      noStroke();
      textSize(15);
      text("Score: " + music.score, 10, 15);
      text("x" + music.streak, 360, 15);
      stroke(255)
      strokeWeight(1)
      line(370, 95, 390, 95); //top bar
      line(370, 100, 370, 160); //left
      line(390, 100, 390, 160);//right
      line(370, 165, 390, 165); //bot bar
      if (frameCount === 7050 + startost + 19) {
        song.stop();
        gameover = 1;
      }
    }
    else if (sel === 1) {
      if (frameCount === startost + 63) {
        song2.play();
      }
      background(0);
      for (var i = 0; i < fl.length; i++) { //flash
        if (fl[i].draw == 1) {
          fl[i].display();
        }
      }
      music2.move();
      music2.checkPlay();
      resetKey();
      for (var i = 0; i < music2.notes.length; i++) {
        if (music2.notes[i].played === 0 && music2.notes[i].y >= -30) {
          music2.notes[i].draw();
        }
      }
      fill(255);
      noStroke();
      textSize(15);
      text("Score: " + music2.score, 10, 15);
      text("x" + music2.streak, 360, 15);
      stroke(255)
      strokeWeight(1)
      line(370, 95, 390, 95); //top bar
      line(370, 100, 370, 160); //left
      line(390, 100, 390, 160);//right
      line(370, 165, 390, 165); //bot bar
      if (frameCount === 7150 + startost + 63) {
        song2.stop();
        gameover = 1;
      }
    }
    stroke(255);
    line(0, 350, 400, 350);


    if (keyArray[65] === 1) { //A
      fill(178, 190, 181);
      circle(50, 350, 30);
      fill(255);
      text("A", 44, 355);
    }
    else {
      fill(255);
      circle(50, 350, 30);
      fill(0);
      text("A", 44, 355);
    }
    if (keyArray[83] === 1) { //S
      fill(178, 190, 181);
      circle(110, 350, 30);
      fill(255);
      text("S", 104, 355);
    }
    else {
      fill(255);
      circle(110, 350, 30);
      fill(0);
      text("S", 104, 355);
    }
    if (keyArray[68] === 1) { //D
      fill(178, 190, 181);
      circle(170, 350, 30);
      fill(255);
      text("D", 164, 355);
    }
    else {
      fill(255);
      circle(170, 350, 30);
      fill(0);
      text("D", 164, 355);
    }
    if (keyArray[74] === 1) { //J
      fill(178, 190, 181);
      circle(230, 350, 30);
      fill(255);
      text("J", 224, 355);
    }
    else {
      fill(255);
      circle(230, 350, 30);
      fill(0);
      text("J", 224, 355);
    }
    if (keyArray[75] === 1) { //K
      fill(178, 190, 181);
      circle(290, 350, 30);
      fill(255);
      text("K", 284, 355);
    }
    else {
      fill(255);
      circle(290, 350, 30);
      fill(0);
      text("K", 284, 355);
    }
    if (keyArray[76] === 1) { //L
      fill(178, 190, 181);
      circle(350, 350, 30);
      fill(255);
      text("L", 344, 355);
    }
    else {
      fill(255);
      circle(350, 350, 30);
      fill(0);
      text("L", 344, 355);
    }
    if (gameover === 1) {
      background(0);
      fill(255);
      textSize(50);
      text("Complete!", 90, 130);
      textSize(30);
      if (sel === 0) {
        text("Score: " + music.score, 90, 200);
        if (highscore1 < music.score) {
          highscore1 = music.score;
        }
      }
      else if (sel === 1) {
        text("Score: " + music2.score, 90, 200);
        if (highscore2 < music2.score) {
          highscore2 = music2.score;
        }
      }
      textSize(15);
      text("Return", 340, 380);
      if (target.x >= 340 && target.y >= 370 && target.x <= 382 && target.y <= 380) {
        start = 0; //return to title screen
        mode = 0;
        gameover = 0;
        music.initialize();
        music2.initialize();
      }
    }
  }
  else if (mode === 1) {
    textSize(20);
    fill(255);
    text("Song Selection", 130, 30);
    text("Mewmore // National Park", 80, 170);
    if (target.x >= 80 && target.y >= 160 && target.x <= 315 && target.y <= 170) {
      start = 2;
      sel = 0;
      startost = frameCount;
      mode = 0;
      //reset score
      music.score = 0;
    }
    text("Chroma - Dark Sheep", 95, 210);
    if (target.x >= 95 && target.y >= 200 && target.x <= 290 && target.y <= 210) {
      start = 2;
      sel = 1;
      startost = frameCount;
      mode = 0;
      //reset score
      music2.score = 0;
    }
    textSize(10);
    text("High Score:", 300, 130); //mewmore
    text("High Score:", 300, 230); //chroma
    text(highscore1, 360, 130);
    text(highscore2, 360, 230);

    textSize(15);
    text("Return", 340, 380);
    if (target.x >= 340 && target.y >= 370 && target.x <= 382 && target.y <= 380) {
      start = 0; //return to title screen
      mode = 0;
    }
  }
}