
let numL = ['1','0','1','0','1','0','1']
theta = 0
counter = 0

class C {
  constructor(gap,size){
    this.gap = gap
    this.size = size
  }
 show(){
   textSize(this.size)
   for (let x = 0; x < width; x+=this.gap) {
    for (let y = 0; y < height; y+=this.gap) {

      fill('green')
       let l = floor(numL.length*noise(x+cos(theta)+counter,y+sin(theta)+counter+1111))
l = numL[l]
         
        text(l,x,y)  
         
    }
theta += 0.01
   counter += 0.1
     
 }
  
}

  
}


function setup() {
  createCanvas(800, 800);


 c = new C(random(10,50),random(10,50))
}

function draw() {
  if(keyIsDown(DOWN_ARROW)===true){
     window.location.href = 'page.html';
  }
  background(0);
       c.show()
}
function mousePressed(){
  
  print( c = new C(random(10,50),random(10,50)))
}

