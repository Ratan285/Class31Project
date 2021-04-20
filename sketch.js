const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100;

function preload() {
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");
}

function setup() {
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

  if (frameCount % 150 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      drops.push(new Drop(random(0, 600), random(0, 600), 5));
    }
  }
  man = new Man(250, 500);
}

function draw() {
  background("black");

  Engine.update(engine);

  for (var i = 0; i < maxDrops; i++) {
    drops[i].display();
    drops[i].update();
  }

  man.display();

  thunderSpawn();

  drawSprites();

}
function thunderSpawn() {
  var rand = Math.round(random(1, 4));
  if (frameCount % 50 === 0) {
    thunder = createSprite(random(0, 600), random(0, 20), 100, 100);
    thunder.lifetime=20;
    switch (rand) {
      case 1: thunder.addImage(thunder1);
        break;
      case 2: thunder.addImage(thunder2);
        break;
      case 3: thunder.addImage(thunder3);
        break;
      case 4: thunder.addImage(thunder4);
        break;
      default: break;
    }
    thunder.scale = random(0.3, 0.6);
  }
}

