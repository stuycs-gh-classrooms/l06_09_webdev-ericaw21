function setup() {
  // put setup code here
   createCanvas(800, 800);
  background(0);
  
    drawStrand("tcgcagctcg", 0, 0, 50);

}

function draw() {
  // put drawing code here
    drawStrand("tcgcagctcg", 0, 0, 50);
}

function drawBase(base,  x,  y,  sz){
    textAlign(LEFT, TOP);
  textSize(sz);
  noStroke();
  if (base == 't') {
    fill(color('#F00'));
  } else if (base == 'a') {
    fill(color('#0F0'));
  } else if (base == 'c') {
    fill(color('#00F'));
  } else if (base == 'g') {
    fill(color('#F0F'));
  }
  square(x, y, sz);
  fill(color(255));
  text(base, x, y);
}

function drawStrand( dna,  x,  y,  sz){
  var xCor = x;
  var yCor = y;
  for(var i = 0; i < dna.length; i ++){
    drawBase(dna.charAt(i), xCor, yCor, sz);
    xCor += sz;
  }
}
