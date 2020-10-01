var car, wall;
var speed, weight;
var defornation; 


function setup() {
 createCanvas(1600,400);

 car =   createSprite(50, 200, 50, 50);
 wall = createSprite(1500, 200, 60, height/2);

speed = random(55,90);
weight = random(400,1500);
car.velocityX=speed;


}

function draw()
{
  background(0);  
 
 
  defornation = (0.5 * weight * speed * speed) /22500;
textSize(20);
text("Defornation "+ defornation,200,100);
  if (defornation<100)
  {
   car.shapeColor=rgb(0,255,0);
  }
   else if (defornation>=100 && defornation<180)
  {
   car.shapeColor=rgb(230,230,0);
  }
   else if(defornation>=180)
   {
  car.shapeColor=rgb(255,0,0);
   }
  
  car.collide(wall);
  drawSprites();
}