let img, img2;
let standing;
let walkCycle = []
let wCi = 0
let y = -100;
let x = 0;



function preload() {
  img = loadImage("horse.png");
  img2 = loadImage("horse2.png");
  imgS = loadImage('horsethink.png')
  imgDoor = loadImage('door.png')
  walkCycle[0] = loadImage("horseWcycle/horsew1.png");
  walkCycle[1] = loadImage("horseWcycle/horsew2.png");
  walkCycle[2] = loadImage("horseWcycle/horsew3.png");
  walkCycle[3] = loadImage("horseWcycle/horsew4.png");
  walkCycle[4] = loadImage("horseWcycle/horsew5.png");
  walkCycle[5] = loadImage("horseWcycle/horsew6.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER);   

}

let flip = 1;
let size = 0.4;
let h = -40
let pHit = false

function draw() {
  background(255);

  line(0,height/4,width,height/4)
  
  image(imgDoor, width/5, height/6.8)
  image(imgDoor, width/2, height/6.8)
  image(imgDoor, width/1.25, height/6.8)
  
  
  // let hit = collidePointRect(floor(x-width/2),floor(y-height/2),
  //                          190,30,115,125);
  
    // let hit = collidePointRect(mouseX,mouseY,190,30,115,125); 

  print(x,y)
  print(mouseX-width/2, mouseY-height/2)
  // if(pHit== false && hit == true ){
  //   y-=100
  //   print(hit)
  // }
  // pHit = hit

  push();
    translate(windowWidth / 2, windowHeight / 2);

  if (frameCount % 10 == 0) {
    flip *= -1;
    
    if(keyIsDown(DOWN_ARROW) === true){
      size += 0.1
      y+=20
    }
     
     if (keyIsDown(UP_ARROW) === true){
       size-=0.1
       y-=20
       
     }
    
    if (keyIsDown(LEFT_ARROW) === true){
      wCi ++
      if(wCi >= walkCycle.length){
        wCi = 0
      }
       x-=20
      
      
     }
    if (keyIsDown(RIGHT_ARROW) === true){
      wCi ++
      if(wCi >= walkCycle.length){
        wCi = 0
      }
       x+=20
     }
    
    
  }
  translate(x, y);
   
  
  if(y<-160 && x>width/5 - width/2 - 50 && x< width/5 - width/2){
    window.location.href = 'page1.html';

    }
    if(y<-160 && x> - 40 && x < 10){
          window.location.href = 'page2.html';

    }
    if(y<-160 && x>width/1.25 - width/2 - 40 && x< width/1.25-width/2)
    {
        window.location.href = 'page3.html';

    }
    
  
  scale(size,size)

  // img.resize(size, 0);
  if (keyIsDown(DOWN_ARROW) === true) {
    scale(flip, 1);
    // y++;
    image(img, 0, 0);
     
  }
  else if (keyIsDown(UP_ARROW) === true) {
    scale(0.5,0.5)
    scale(flip, 1);
    // y--;
    image(img2, 0, 0);
   
  }
  else if (keyIsDown(LEFT_ARROW) === true) {
   scale(0.3,0.3)
      
      
     image(walkCycle[wCi],0,0)
      
  }
  else if (keyIsDown(RIGHT_ARROW) === true) {
   scale(0.3,0.3)
      
    scale(-1,1)
     image(walkCycle[wCi],0,0)
    
  } 
  
  else {
    scale(0.5,0.5)
    image(imgS, 0, 0);
  
    
  }
  
  pop();
  textSize(32)
  text("use arrow keys to move around", 50,windowHeight-200)
  text("Press down arrow move back to this page", 50,windowHeight-100)
}
