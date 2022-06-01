size(100,100);
background(#E0F0FF);


int moveX, moveY;
moveX = 0; //positive int to move right, negative int to move left
moveY = 0; //positive int to move down, negative int to move up

beginShape(TRIANGLE_FAN);
fill(#0000CF);
vertex(50 + moveX, 60 + moveY);
vertex(50 + moveX, 40 + moveY); 
vertex(75 + moveX, 60 + moveY); 
fill(#0069EE);
vertex(50 + moveX, 80 + moveY); 
fill(#0083EA);
vertex(25 + moveX, 60 + moveY); 
fill(#009BD4);
vertex(50 + moveX, 40 + moveY); 
endShape();

fill(#00B0B4);
triangle(50 + moveX,40 + moveY,25 + moveX,60 + moveY,5 + moveX,40 + moveY);
fill(#00C492);
triangle(50 + moveX,40 + moveY,5 + moveX,40 + moveY,25 + moveX,20 + moveY);
fill(#009E60);
triangle(50 + moveX,40 + moveY,75 + moveX,60 + moveY,95 + moveX,40 + moveY);
fill(#17D574);
triangle(50 + moveX,40 + moveY,95 + moveX,40 + moveY,75 + moveX,20 + moveY);
