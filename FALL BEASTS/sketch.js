var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database;
var red, green, yellow ;

var map,bgplay,form, player, game, color, info, track;
var ball1, ball2, ball3, head1, head2, head3, head, ball;
var okCount=0, ok, okimg, entergamebg;
var infobg;

  
  //createSprite(400, 200, 50, 50);

  function preload(){
    map = loadImage("Game pg.png");
    bgplay = loadImage("Bishapmishap.png");
    ok = loadImage("okk.png");
    infobg = loadImage("infobg.png");
    entergamebg = loadImage("gameinitial.png");
  }



  function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    
    database = firebase.database();
    game = new Game();
    info = new Info();
    game.getState();
    game.start();
    
    
   // color = new Color();
  }


function draw() {
  //background(255,255,255); 
  if(playerCount == 3){
    game.update(1)
  }

  if(gameState == 1){
    color.display();
   // console.log(gameState);
    form.hide();
  }

  if(red==1 && green==1 && yellow==1){
    game.update(2)
  }

  if(gameState == 2){
    color.greeting2.hide();
    clear();
    info.display();
    
   // console.log("Its Working");
  }

  if(okCount==3){
    game.update(3)
  }

  //if(okCount<=2 && okCount>=1){
  //  text("Waiting For everyone to press ok ")
  //}
  
  if(gameState == 3){
    clear();
    game.play();
  }
    
      
    
  // console.log(okCount)
  

  
    


  
 //color.display();
 //drawSprites();
}