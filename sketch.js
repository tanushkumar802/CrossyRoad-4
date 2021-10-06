var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 carAnimation1=loadAnimation("images/car1.png");
carAnimation2=loadAnimation("images/car2.png");
playerAnimation=loadAnimation("images/Player-03.png");
logAnimation=loadAnimation("images/log2.png");
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  for(var i=0;i<6;i++){
    var bottomGrass1= createSprite(683,height-50-(i*400),width,grassHeight)
    city=createSprite(width/2,-1500);
    city.addAnimation("city",cityAnimation);
    if(i%2===0){
      var road=createSprite(683,height-150-(1*400)-grassHeigh,width,300)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor="grey";
  }
  for(var i=0;i<40;i++){
    cars=new Car(2);
    carGroup1.add(cars.spt);
    for(i=1;i<logGroup1.length;i++){
      if(logGroup1[i].x<0){
        logGroup1[i].x=width;
      }
    }
  }
 if(carGroup1.isTouching(player.spt)){
   player.spt.x=width/2;
   player.spt.y=height-75;
 }
   if(logGroup1.isTouching(player.spt)){
     player.spt.x=player.spt.x=-3;
   }
   else if((player.spt.y>height-1550 && player.spt.y<height-1300) ||
   (player.spt.y< height-500 && player.spt.y> height-850) ||
   (player.spt.y>height)||
   (player.spt.x<0)||
   (player.spt>width)){
     player.spt.x=width/2;
     player.spt.y=height-75;
   }
   if(city.isTouching(player.spt)){
     gameState ="Win";
   }
   if(gameState === "Win")
  {
    stroke("Green");
    fill("Green");
    textSize(40);
    text("Congratulations!You Made It.",width/2-250,-1700);
    carGroup1.destroyEach();
    logGroup1.destroyEach();
  }
 }

function draw() {
  background("skyblue");
 
 

  drawSprites();
}

