var zBereich;

function zentriereZBereich() {
  var xPos = (windowWidth - width) / 2;
  var yPos = 15;
  zBereich.position(xPos, yPos);
}

function setup() {
  zBereich = createCanvas(250, 150);
  zentriereZBereich();
}

function windowResized() {
  zentriereZBereich();
}

function draw() {
  background('teal');
  stroke(255);
  ellipse(width/2, height/2, 40, 40);
}