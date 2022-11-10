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
    fill(255, 0, 0);
    text(this.x, this.x, this.y);
  }
}
class Music {
  constructor(speed) {
    this.speed = speed;
    this.score = 0;
        this.tilemap = [
	  "010000",
	  "000000",
	  "001000",
    "000000",
	  "000000",
	  "000000",
	  "010000",
	  "000000",
	  "000000",
	  "000000",
	  "100000",
	  "000000",
	  "001000",
	  "000000",
	  "000100",
	  "000000",
	  "000010",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "010000",
	  "000000",
	  "000100",
	  "000000",
	  "000010",
	  "000000",
	  "000001",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "001000",
	  "000000",
	  "000100",
	  "000000",
	  "000010",
	  "000000",
	  "000001",
	  "000000",
	  "000010",
	  "000000",
	  "000100",
	  "000000",
	  "001000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000001",
	  "000000",
	  "000010",
      "000000",
	  "000000",
	  "000000",
	  "000001",
	  "000000",
	  "000000",
	  "000000",
	  "100000",
	  "000000",
	  "001000",
	  "000000",
	  "000100",
	  "000000",
	  "000010",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "010000",
	  "000000",
	  "000100",
	  "000000",
	  "000010",
	  "000000",
	  "000001",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "000000",
	  "001000",
	  "000000",
	  "000100",
	  "000000",
	  "000010",
	  "000000",
	  "000001",
    ];
  }
  initialize() {
    for (var i = 0; i < this.tilemap.length; i++) {
      for (var j = 0; j < this.tilemap[i].length; j++) {
        switch (this.tilemap[i][j]) {
          case "1":
            notes.push(new Note(j * 60 + 50, i * 30 - this.tilemap.length * 30));
            break;
        }
      }
    }
  }
  move() {
    for (var i = 0; i < notes.length; i++) {
      notes[i].y += this.speed;
    }
  }
  checkPlay() {
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].y >= 335 && notes[i].y <= 365 && notes[i].played === 0) {
        if (keyArray[65] === 1 && notes[i].x === 50) {
          notes[i].played = 1;
          this.score++;
        }
        if (keyArray[83] === 1 && notes[i].x === 110) {
          notes[i].played = 1;
          this.score++;
        }
        if (keyArray[68] === 1 && notes[i].x === 170) {
          notes[i].played = 1;
          this.score++;
        }
        if (keyArray[74] === 1 && notes[i].x === 230) {
          notes[i].played = 1;
          this.score++;
        }
        if (keyArray[75] === 1 && notes[i].x === 290) {
          notes[i].played = 1;
          this.score++;
        }
        if (keyArray[76] === 1 && notes[i].x === 350) {
          notes[i].played = 1;
          this.score++;
        }
      }
      if (notes[i].y >= 400 && notes[i].played === 0) {
        this.score--;
        notes[i].played = 1;
      }
    }
  }
}
function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}
var notes = [];
var keyArray = [];
var music;
let song;

function preload() {
  
  song = loadSound('poke3.mp3');
}
function setup() {
  createCanvas(400, 400);
  music = new Music(3.45);
  music.initialize();
  song.setVolume(0.5);
}

function draw() {
  if(frameCount === 100) {
    song.play();
  }
  background(0);
  music.move();
  music.checkPlay();
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].played === 0) {
      notes[i].draw();
    }
  }
  stroke(255);
  line(0, 350, 400, 350);
  noStroke();
  fill(255);
  text("Score: " + music.score, 10, 10);
}