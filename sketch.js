var garden,rabbit;
var gardenImage,rabbitImage;
var apple, appleImage;
var leaf, leafImage;
function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  leafImage = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImage);

//creating boy running
rabbit = createSprite(180,334,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImage);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=World.mouseX
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0) {
  if (select_sprites  == 1) 
  { createApples(); }
  else if  (select_sprites == 2) {         createApples(); }
else {  createApples(); } }
  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 100 == 0) {
  if (select_sprites  == 1) 
  { createLeaves(); }
  else if  (select_sprites == 4) {
    createLeaves(); }
else {  createLeaves(); } }
  drawSprites();
}
function createApples() {
apple=createSprite(random(50,350),40,10,10)
apple.addImage(appleImage);
apple.scale=0.1;
apple.velocityY=5;
apple.lifetime=150;
}
function createLeaves() {
leaf=createSprite(random(50,350),40,10,10)
leaf.addImage(leafImage);
leaf.scale=0.08;
leaf.velocityY=4;
leaf.lifetime=150;
}