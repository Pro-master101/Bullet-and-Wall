var bullet,wall;
var speed,weight,thickness;




function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(100,200,50,20);
  thickness = random(22,83);
  wall = createSprite(900,200,thickness,height / 2);
  
  bullet.shapeColor = "White";
  wall.shapeColor = "Grey";
  

}

function draw() {
  background(0);
  bullet.velocityX = speed;
  if(wall.x - bullet.x < (bullet.width + wall.width) /2 ) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage > 10) {
      wall.shapeColor = "Red";
    } 
    else {
      wall.shapeColor = "Green";
       

    }

    
  }
 

 fill("yellow");
 text("damage : " + damage,500,200 );
  drawSprites();
}