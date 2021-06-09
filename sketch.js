var bg, bgImg;
var cat;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);

    //bg = createSprite(500,400);
    //bg.addImage("background", bgImg);

    //create tom and jerry sprites here

    tom = createSprite(800,400,50,50);
    mouse = createSprite(100,400,10,10);

    tom.addAnimation("cat", catimg1);
    mouse.addAnimation("mouse", mouseimg1);

    tom.scale = 0.2;
    mouse.scale = 0.15;


}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - mouse.x < (tom.width - mouse.width)/2) {
        tom.velocityX = 0;
        tom.addAnimation("catRunning", catimg2);
        tom.changeAnimation("catRunning");
        mouse.addAnimation("mouseRunning", mouseimg2);
        mouse.changeAnimation("mouseRunning");
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode === RIGHT_ARROW) {
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
        tom.velocityX = 5;
        tom.addAnimation("catRunning", catimg2)
        tom.changeAnimation("catRunning");
    }

    if(keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
        //cat.x = cat.x + 2;
        tom.velocityX = -5;
        tom.addAnimation("catRunning", catimg2)
        tom.changeAnimation("catRunning");
    }

}
