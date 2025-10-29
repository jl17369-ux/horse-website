
let mus;
let fft; let smoothing = 0.1; let bins = 512
let waveform = []; let r = 100
let theta = 0;

function preload(){
  mus = loadSound('BLOODY STREAM (1).mp3')
  
}

function setup() {
  createCanvas(bins, bins);
  angleMode(DEGREES)
  mus.play()
  fft = new p5.FFT(smoothing, bins)
  mus.setVolume(0.1)

}

function draw() {
    translate(width / 2, height / 2);

  background(255)
  waveform = fft.waveform()

  beginShape()
        

  for(let i = 0; i < waveform.length; i++ ){
    // let y = height/2 + map(waveform[i],-1,1,-r, r)
  beginShape();
           rotate(360/100)

  for (let b = 0; b < 360; b++) {
    let v = map(waveform[i],-1,1,-r, r)
 
    let x = v * 10* cos(b);
    let y = v * 10* cos(b);
    vertex(x, y);
  }
  endShape();
    // curveVertex(i, y ,1,1)
  }
  endShape()
  theta+=0.01
}

// function mousePressed(){
//   if(mus.isPlaying()){
//     mus.pause()
//     background(0)
//   } else {
//     mus.play()
//     background(255)
//   }
//   }
