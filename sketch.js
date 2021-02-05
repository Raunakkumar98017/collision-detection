var mr;
var fr;


function setup() {
  createCanvas(400,400);
  fr=createSprite(200, 200, 50, 50);
  mr= createSprite(200,200,50,50);
}

function draw() {
  background("black");  
  mr.x=mouseX;
  mr.y=mouseY;
  if(mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<fr.width/2+mr.width/2&&mr.y-fr.y<mr.height/2+fr.height/2&&fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor=("blue");
    fr.shapeColor=("blue");
  } else {
    mr.shapeColor=("yellow");
    fr.shapeColor=("yellow");
  }
  drawSprites();
}