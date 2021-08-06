var jakeImg,pathImg,path,jake,coinImg,coin,bombImg,bomb,leftBoundary,rightBoundary


function preload(){
 //pre-load images
 jakeimg1=loadImage("runner-1.png","runner-2.png");
 pathimg=loadImage("path.png");
 coinImg=loadImage("coin.png");
 bombImg=loadImage("bomb.png")
 
 
}


function setup(){
  createCanvas(400,400);
 path=createSprite(400,400)
  path.addImage(pathImg)
  path.velocityY=5
  path.y=path.height/30;
  jake=createSprite(180,340,50,170)
  jake=addAnimation("running",jakeimg1)
  coin=createSprite(200,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  coin=createSprite(300,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3
  leftBoundary=createSprite(0,300,100,400);
  rightBoundary=createSprite(390,300,80,400);
  leftBoundary.visible=false;
  rightBoundary.visible=false;
}
function draw() {
  background(0);
   text('coinScore',1,200);
  textSize(10);
  path.velocityY=5
  jake.x=world.mouseX;
  if(path.y<400){
    path.y=height/2
if(jake.isTouching(coin)){
  coinScore=coinScore+1
}
  }
  jake.collide(leftBoundary);
  jake.collidal(rightBoundary);
  edges=createEdgeSprite();
  jake.collide(edges[3]);
  drawSprites()
}
