var pathImg,path;
var runner,running;

function preload(){
  //pre-load images
  
 runner=loadAnimation("r1.png","r2.png")
  pathImg=loadImage("path.png")

}


function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200)
  path.addImage(pathImg);
  path.velocityY= 4;
  path.scale=1.2
  running=createSprite(200,180,10,10);
  running.addAnimation("r",runner);
  running.scale=0.1;
}

function draw() {
  background(0);
  if(path.y > 400 )
  {
    path.y=height/2
  }
  drawSprites()
}
