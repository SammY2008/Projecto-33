const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var ball_img;
var backgroundImg;
var goal, goal_img;
var score = 0;
function preload(){
  ball_img=loadImage("ball.png");
  backgroundImg = loadImage("bg.png");
  goal_img = loadImage("goal.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 
  ground = new Ground();


 
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  goal = Bodies.rectangle(820,200,20,50);
  goal.isStatic = true;
  World.add(world,goal);
  
  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(backgroundImg); 

  
        textSize(35)
        fill("black")
        text("Score  " + score, width-300, 100)
 

 
  imageMode(CENTER)
  image(ball_img ,ball.position.x,ball.position.y,40,40);
  image(goal_img, goal.position.x,goal.position.y,300,200);

  slingShot.display();

  if(ball.position.x > 775 && ball.position.x < 800 && ball.position.y > 180 && ball.position.y < 220){
    score = score+1;
  }
 
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.ball);
  }
}
