const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var  slingShot;
var ball = [];

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(810,160, 300, 20);

    box1 = new Box(700,320,20,40);
    box2 = new Box(920,320,20,40);
    box3 = new Box(700,240,20,40);
    box4 = new Box(920,240,20,40);
    box5 = new Box(810,100,20,40);
    box6 = new Box(700,320,20,40);
    box7 = new Box(920,320,20,40);
    box8 = new Box(700,240,20,40);
    box9 = new Box(920,240,20,40);
    box10 = new Box(810,100,20,40);
    box11 = new Box(700,320,20,40);
    box12 = new Box(920,320,20,40);
    box13 = new Box(700,240,20,40);
    box14 = new Box(920,240,20,40);
    box15 = new Box(810,100,20,40);
    box16 = new Box(700,320,20,40);
    box17 = new Box(920,320,20,40);
    box18 = new Box(700,240,20,40);
    box19 = new Box(920,240,20,40);
    box20 = new Box(810,100,20,40);

    
    


    ball = new Ball(100,300);
    slingShot = new SlingShot(ball.body,{x:100,y:300});
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    if (ball.x <100) {
        ball.push(new Ball(100, 300));
        slingShot.join();
        slingShot = new SlingShot(ball.body,{x:100,y:300});
    }

    ball.display();


    ground.display();
    platform.display();
    
    slingShot.display();    

    if (mouseIsPressed) {
        Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});


    }
    
}
function mouseReleased(){
    slingShot.fly();
    
}
