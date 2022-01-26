var pa1, pa2, pa3, pa4;
var pontuaçao = 0;
var player, vida = 100;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7, ground8, ground9, ground10;
var  fantasma, grupoFantasmas;
var estadojogo = 1;

function preload(){

}

function setup(){
//tem 1550 de altura, cada andar tem 150 de tamanho.
canvas = createCanvas(400, 1500);
pa1 = createSprite(0, 750, 10, 1500);
pa2 = createSprite(400, 750, 10, 1500);
pa3 = createSprite(200, 0, 400, 10);
pa4 = createSprite(200, 1500, 400, 10);
player = createSprite(30, 120, 20, 50);
player.shapeColor = "blue"

ground1 = createSprite(130, 150, 370, 20);  
ground2 = createSprite(230, 300, 370, 20); 
ground3 = createSprite(130, 450, 370, 20); 
ground4 = createSprite(230, 600, 370, 20); 
ground5 = createSprite(130, 750, 370, 20); 
ground6 = createSprite(230, 900, 370, 20); 
ground7 = createSprite(130, 1050, 370, 20); 
ground8 = createSprite(230, 1200, 370, 20); 
ground9 = createSprite(130, 1350, 370, 20); 
ground10 = createSprite(200, 1500, 400, 20); 


   //grupoFantasmas = new Group();
}

function draw(){
  background("black")
  if (estadojogo === 1){
  createEdgeSprites();
  textSize(20)
  fill("white")
  text("Tempo de duração: " + pontuaçao, 50, 25, 300, 300)
  text("Vida: " + vida, 300, 25, 300, 300)
  pontuaçao = pontuaçao + Math.round(frameCount%30 === 0)
  console.log(frameCount);

player.velocityY = player.velocityY + 0.8;

  
player.collide(ground1);
player.collide(ground2);
player.collide(ground3);
player.collide(ground4);
player.collide(ground5);
player.collide(ground6);
player.collide(ground7);
player.collide(ground8);
player.collide(ground9);
player.collide(ground10);
player.collide(pa1);  
player.collide(pa2);  
player.collide(pa3);   
player.collide(pa4);  

pa1.visible = false;
pa2.visible = false;
pa3.visible = false;
pa4.visible = false;

//if(player.isTouching(grupoFantasmas)){
 // vida = vida - 10;
//}
  GerarFantasma();
  drawSprites();
}
}


function keyPressed() {
   if (keyCode === LEFT_ARROW) { 
    player.velocityX = -5; 
    player.velocityY = 0;
    
     } else if (keyCode === RIGHT_ARROW) {
      player.velocityX = +5; 
      player.velocityY = 0; 
     
    
     //} else if (keyCode === DOWN_ARROW) {
      //player.velocityY = +7;
     // player.velocityX = 0; 
//depois, arrume o sistema de pulo :)
    } else if (keyCode === UP_ARROW ) {
      player.velocityY = -9;
    
    }
    if (keyCode === 32){
      
      player.velocityX = 0;
    }
  }
function GerarFantasma(){

  if(frameCount% 60 === 0){
   
    fantasma = createSprite(player.x + 200, player.y, 15, 40)
  
if (player.velocityX >= 0){
  fantasma.velocityX = -5;
}
if (player.velocityX < 0){
  fantasma.x = player.x - 200;
  fantasma.velocityX = +5;
  
}
  }

    //fantasma = new Fantasma(player.x + 200, player.y, 15, 40);
    //fantasma.y = player.y;
    //fantasma.x = player.x + 200;
    //fantasma.velocityX = -5;
    //fantasma.velocityY = 5;
   // fantasma.lifetime = 150;



   // grupoFantasmas.add(fantasma);
}
