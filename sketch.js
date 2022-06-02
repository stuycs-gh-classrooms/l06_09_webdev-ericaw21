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
  textSize(sz);
  noStroke();
  if (base == 't') {
    stroke(#F00);
  } else if (base == 'a') {
    stroke(#0F0);
  } else if (base == 'c') {
    stroke(#00F);
  } else if (base == 'g') {
    stroke(#F0F);
  }
  square(x, y, sz);
  fill(255);
  text(base, x, y);
}

function drawStrand( dna,  x,  y,  sz){
  var xCor = x;
  var yCor = y;
  for(int i = 0; i < dna.length(); i ++){
    drawBase(dna.charAt(i), xCor, yCor, sz);
    xCor += sz;
  }
 }
)
