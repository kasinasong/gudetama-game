let Egg;
let Bowl;
let Myfont;
let Song;
let x=200;
let y=-20;
let score=0;
let screen=0;
let fast = 2;
let themesong;
let bell;
let startgame=false;

let directiond=1;
let d =-20;
let directiond2=1;
let d2=-20

let directions=1;
let s=-20;
let directions2=1;
let s2=-20;


let bx=10;
let by=20;
let directionbx= 2;
let directionby= 2

let a =0;



function preload(){
themesong = loadSound('themesong-2.mp3');
bell = loadSound('bell.mp3');
Egg = loadImage("egg.png"); 
Bowl = loadImage("bowl.png");
Myfont= loadFont("Sile.ttf");
splatob = loadImage("splat.png");
balloonob = loadImage("balloon.png");
swirl = loadImage("swirl.png");
sun = loadImage("sun.png");
eggquake = loadImage("eggquake.png");
slugob= loadImage("slug.png");
}

function setup() {
  createCanvas(600, 400);
  background(255,200,0);
	themesong.loop();
}

function draw() {
	if(screen == 0){
    startScreen();
  }else if(screen == 1){
  	play()
  }else if(screen==2){
  	endScreen()
  }}

function startScreen(){
		background(255,200,0)
		fill(0)
		textAlign(CENTER);
        textFont(Myfont);
        textSize(80);
        text('gudetama', width / 2, height / 2 );
        textSize(30);
		text('click to play catch the eggs', width / 2, height / 2 +30)
		reset();
	
}
  
  function play(){
   background(x,y,0);
   
    push();
    imageMode(CENTER);
    
    
    rectMode(CENTER);
  translate(width/2, height/2);
  rotate(a);
  image(swirl,0,0,1000,800);
  image(sun,0,0,200,150);
  a = a + 0.01
    
    pop();
    
    textFont(Myfont);
    textSize(30);
    text("eggs = " + score,70,30);
    
    y=y+fast
    image(Egg,x,y,80,80);
    image(Bowl,mouseX,300,150,150);
    distance = dist(mouseX, 300, x, y);
    
      if(distance<60){
         y=-20;
        score+= 1
        fast+= 0.3
		bell.play();
         }

      if(y==-20){
  	pickRandom();  }
    
    
    if(y>300){ 
      screen=2
       }
    
//splat obstacle at score=6
    if(score>5){
  push();
  imageMode(CENTER);
  d=d+directiond;
  image(splatob,300,d,350,350);
  pop();
    }
    
//splat obstacle at score=25
    if(score>24){
  push();
  imageMode(CENTER);
  d2=d2+directiond2;
  image(splatob,300,d2,350,350);
  pop();
    }

//balloon obstacle 
  bx=bx+directionbx;
  by=by+directionby;
  image(balloonob,bx,by,100,100);
  
  if((bx>600) || (by<0)){
    directionbx = directionbx*-1;
  }
 if((by>400) ||(by<0)){
   directionby = directionby*-1;
  }

//eggquake obstacle
    if(score>10 && score<15){
      push();
      imageMode(CENTER);
      image(eggquake,random(0,600),height/2,300,300);
      textSize(50);
      text("Oh No! Eggquake.",width/2,height/2)
      pop();
    }
    
//slug obstacle at score=1
    if(score>1){
  push();
  imageMode(CENTER);
  s=s+directions;
  image(slugob,s,300,450,400);
  pop();
  }
    
//slug obstacle at score=18
    if(score>18){
  push();
  imageMode(CENTER);
  s2=s2+directions2;
  image(slugob,s2,300,450,400);
  pop();
  }
    
//eggquake obstacle at score = 21-24
    if(score>21 && score<24){
      push();
      imageMode(CENTER);
      image(eggquake,random(0,600),height/2,300,300);
      textSize(50);
      text("Oh No! Eggquake.",width/2,height/2)
      pop();
    }
  }
function pickRandom(){
	x= random(20,560)
    
  }

function endScreen(){
		background(0)
        fill(255)
		textAlign(CENTER);
        textSize(70);
		text('game over', width / 2, height / 2 - 10)
        textSize(30);
  	    text("score = " + score, width / 2, height / 2 +20 )
		text('(click to play again)', width / 2, height / 2 + 40);
}

function mousePressed(){
	if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }
}

function reset(){
	score=0;
  	fast=2;
  	y=-20;
    d=-20;
}
