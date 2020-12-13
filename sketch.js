

var bullet;
var speed;
var weight;
var thickness;
var wall;






function setup() {
  createCanvas(1200,400);


 wall =  createSprite(1200, 200, thickness, 200);
 wall.shapeColor = color("blue");

 bullet = createSprite(50, 200, 100, 20);
 bullet.shapeColor = color("yellow");
 bullet.velocityX = 156;
 



  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

}

function draw() {
  background(0); 

 
  if(hasCollided(bullet,wall)){

bullet.velocityX=0;

var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

if(damage>10){

  wall.shapeColor = color(255,0,0);
}
if(damage<10){

  wall.shapeColor = color(0,255,0);
}



  }
  


  drawSprites();
}


