const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var raindrops = [];
 var batman;
var thunder,thunderimage;

 function preload(){
  thunderimage = loadImage("images/thunderbolt/1.png"); 
  thunderimage2 = loadImage("images/thunderbolt/2.png");
 }
function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(950,500);
 batman = new Batman(400, 400, 225);
 thunder = createSprite(600,5,10,40);
 thunder.scale=0.2;
 thunder2 = createSprite(250,2,10,10);
 thunder2.scale=0.2;

}

function draw() {
  background(0,0,12);
  batman.display(); 

  if(frameCount % 1 === 0){
     var raindrop = new RainDrops(random(0, windowWidth), -100,10);
    raindrops.push(raindrop);
  }
  if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunder.addImage(thunderimage);
               thunder.scale = 2;
                break;
        case 2:thunder.addImage(thunderimage2);
               thunder.scale = 1.3;
                break;
         default: break;
      }
    }   
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunder2.addImage(thunderimage2);
                 thunder2.scale = 2;
                  break;
          case 2:thunder2.addImage(thunderimage);
                 thunder2.scale = 1.7;
                  break;
           default: break;
        }
      }   

  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(40);
    raindrops[i].velocityY++
    raindrops[i].display();
  }
  drawSprites();
}