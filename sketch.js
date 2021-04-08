const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(600,600);

   engine = Engine.create();
   world = engine.world;
   
    
   if(frameCount%10 ===0){
    for(var i =0; i<maxDrops; i++){
     drops.push(new Drop(random(0,600), random(0,600)));
    }
   } 
    
}

function draw(){
    background("black");



  for(var i = 0;i<maxDrops;i++){
      drops[i].display();
      drops[i].update();
  }

    
}   

