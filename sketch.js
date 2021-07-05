var ship,ship_sailing;
var seaImage;
var sea;




function preload(){
seaImage = loadImage("sea.png");
ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(200,180,400,20);
sea.addImage(seaImage)

ship = createSprite(100,250,30,30);
ship.addAnimation("movingship",ship_sailing);
ship.scale=0.3;



}

function draw() {
  
  // background("blue");
sea.velocityX=-2

if(sea.velocityX<0){
  sea.x=sea.width/2;
}
// ship.collide(sea);

 drawSprites();
}