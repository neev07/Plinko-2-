/*Plinko Game*/
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
  
  var particles = [];
  var plinkos = [];
  var divisions = [];

  var particle;
  
  var divisionHeight=300;
  var score =0;
  var turn = 0;
  var gameState = "play";

  
  function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

    for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,175));
    }

      for (var j = 75; j <=width; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,275));
    }

      for (var j = 50; j <=width-10; j=j+50) 
    {
    
        plinkos.push(new Plinko(j,375));
    }    
  }



  function draw() {
    background("black");
    textSize(20);
    ground.display();
    text("Score : "+score,20,30);
    text("500", 27, 515);
    text("500", 100, 515);
    text("500", 180, 515);
    text("500", 260, 515);
    text("100", 340, 515);
    text("100", 420, 515);
    text("100",500, 515);
    text("200", 580, 515);
    text("200", 660, 515);
    text("200", 740, 515);
    Engine.update(engine);

    if(turn >= 5){
    gameState = "end";
   }
  
    for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }
    //if(particles.body.position.y > 760 && particles.body.position.x < 300){
      //score = score + 500;
    //}
  }

   function mousePressed(){
      if(gameState === "play"){
     particles.push(new Particle(mouseX, 10,10));
     turn++;
      }
    }