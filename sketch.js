function setup() {
  // put setup code here
   createCanvas(800, 800);
  background(0);

  drawStrand("tcgcagctcg", 0, 0, 50);
}

function draw() {
  // put drawing code here
}

function drawBase(char base, int x, int y, int sz){
  textSize(sz);
  noStroke();
  if (base == 't') {
    fill(#FF0000);
  } else if (base == 'a') {
    fill(#00FF00);
  } else if (base == 'c') {
    fill(#0000FF);
  } else if (base == 'g') {
    fill(#FF00FF);
  }
  square(x, y, sz);
  fill(255);
  text(base, x, y);
}

function drawStrand(String dna, int x, int y, int sz){
  int xCor = x;
  int yCor = y;
  for(int i = 0; i < dna.length(); i ++){
    drawBase(dna.charAt(i), xCor, yCor, sz);
    xCor += sz;
  }
 }
)
