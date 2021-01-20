var fixedRect,movingRect;
var car,wall;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(200,200,50,80);
  movingRect.shapeColor="blue";
  car=createSprite(20,260,50,40);
  car.shapeColor="black";
  car.velocityX=5;
  wall=createSprite(780,100,30,800);
  wall.shapeColor="pink";

  console.log(fixedRect.y-movingRect.y)

}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(car,wall)){
    
   car.shapeColor="red";

  }else{
    
    car.shapeColor="grey";

  }

  if(collide(car,wall)){
    car.velocityX=0;

  }
  else{

    car.velocityX=5;
  }


  drawSprites();
}




