var cx, cy, r;
var hrs, mins, secs, m, ds, yr;
var shortTick, longTick;
function setup() {
  createCanvas(1000, 1000);
  background(color('#FFDAB9'));
  frameRate(1);

  r = 400.0;
  cx = width/2;
  cy = height/2;
  shortTick = 10.0;
  longTick = 20.0;
}


function draw() {
  background(color('#FFDAB9'));
  updateTime();
  clockFace();
  drawHand();
  Ticks();
  cal();
  digital();
}

function clockFace() {
  fill(color('#FFF4EB'));
  circle(cx, cy, r*2);
}

function updateTime() {
  hrs = hour();
  mins = minute();
  secs = second();
  m = month();
  ds = day();
  yr = year();
}

function drawHand() {
  //second hand
  strokeWeight(2);
  stroke(color('#FBC4AB'));
  line(cx, cy, timeToAngleSx(r*2 * 0.4375, width/2), timeToAngleSy(r*2 * 0.4375, height/2));
  //minute hand
  strokeWeight(7);
  stroke(color('#F4978E'));
  line(cx, cy, timeToAngleMx(r*2 * 0.375, width/2), timeToAngleMy(r*2 * 0.4, height/2));
  //hour hand
  strokeWeight(10);
  stroke(color('#FF6060'));
  line(cx, cy, timeToAngleHx(r*2 * .25, width/2), timeToAngleHy(r*2 * .25, height/2)) ;
  //reset stroke so clock outline doesn't change
  strokeWeight(1);
  stroke(0);
}

function Ticks() {
  for (var i = 1; i <= 60; i++) {
    updateTime();
    //every hour will be a long tick while the others are short
    var len = shortTick;
    if (i % 5 == 0) {
      len = longTick;
    }
    //create a line starting from a point on the circumference of the clock
    //that goes towards the center of the clock with a length of short or long based on the counter
    //
  }
}

function cal() {
  var yrs = str(yr);
  var yrs1 = yrs.substring(2);

  var x = 0.0;
  var y = 0.0;
  var size = 40.0;
  for (var i=0; i < 3; i++) {
    fill(color(255));
    rect(x, y, 100, 100);
    x += 100;
  }

  textSize(size);
  fill(0);
  text(str(m), 25, 60);
  text(str(ds), 125, 60);
  text(yrs1, 225, 60);
}

function digital() {
  var yrs = str(yr);
  var yrs1 = yrs.substring(2);

  var x = width - 300;
  var y = 0;
  var size = 40;
  fill(color(255));
  rect(x, y, 300, 100);

  textSize(size);
  fill(0);
  var zero = "0";
  var hour = str(hrs);
  var minutes = str(mins);
  if (hrs < 10) {
    hour = zero + hour;
  }
  if (mins < 10) {
    minutes = zero + minutes;
  }
  text(hour +":"+minutes, x + 100, 60);
}

function timeToAngleHx (amplitude, offset) {
  var x = cos(hrs%12 * PI/6 - PI/2);
  x = x * amplitude + offset;
  return x;
}
function timeToAngleHy( amplitude, offset) {
  var y = sin(hrs%12 * PI/6 - PI/2);
  y = y * amplitude + offset;
  return y;
}

//x-cor / y-cor of min hand
function timeToAngleMx(amplitude, offset) {
  var x = cos(mins * PI/30 - PI/2);
  x = x * amplitude + offset;
  return x;
}
function timeToAngleMy(amplitude, offset) {
  var y = sin(mins * PI/30 - PI/2);
  y = y * amplitude + offset;
  return y;
}

//x-cor / y-cor of sec hand
function timeToAngleSx(amplitude, offset) {
  var x = cos(secs * PI/30 - PI/2);
  x = x * amplitude + offset;
  return x;
}
function timeToAngleSy(amplitude, offset) {
  var y = sin(secs * PI/30 - PI/2);
  y = y * amplitude + offset;
  return y;
}
