let xLoc = [], yLoc = [];
let numSegments = 100;
let diameter =100;
let speed = 0.005;
let theta = 0



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // for(let i = 0; i<numSegments; i++){
  //   xLoc[i] = 0; 
  //   yLoc[i] = 0;  
  // }
  
 x= width/2
 y= height/2 
  
  fill(0)
  stroke(255)
}

let counter = 0;

function draw() {
  background(0);
  theta+= 0.01
 x=width
  y= height
 
  worm(random(x),random(y)); 
 worm(mouseX,mouseY)

  counter += speed;
  
}

function mousePressed(){
  print(xLoc)
  
}


function worm(x, y){

  xLoc[numSegments-1] = x;
  yLoc[numSegments-1] = y;
  
  for(let i = 0; i<numSegments; i++){
    xLoc[i] = xLoc[i+1]
    yLoc[i] = yLoc[i+1]
    
    let d = map(i, 0,numSegments, 0,PI)
    d = sin(d);
    
    let r = d*170 ;
    let b = 205-d*150;
    
    stroke(r, b , b)
    fill(b,r,r)
    ellipse(xLoc[i], yLoc[i], d*pow(diameter,1+sin(theta)),d*pow(diameter,1+cos(theta)))
  }
 if(keyIsDown(DOWN_ARROW)===true){
     window.location.href = 'page.html';
  }
}