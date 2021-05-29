class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    

    async start(){
      
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }

        var infoCountRef = await database.ref('ok').once("value");
        if(infoCountRef.exists()){
          okCount - infoCountRef.val();
          info.count();
          console.log(okCount)
        }
        form = new Form();
        form.display();
        color = new Color();
      }
        ball1 = createSprite(100,200);
        ball2 = createSprite(100,200);
        ball3 = createSprite(100,200);
        head1 = createSprite(100,200);
        head2 = createSprite(100,200);
        head3 = createSprite(100,200);
        head = [head1, head2, head3];
        ball = [ball1, ball2, ball3];
//sprite.visible = false        
      
    }


    play(){
     // info.hide();
     // form.hide();
     player.getPlayerInfo();

      if(allPlayers !== undefined){
          background(bgplay);
          image(map, 0,-displayHeight*4,displayWidth, displayHeight*5);

          var index = 0;
          var x= -250;
          var y;
          for(var plr in allPlayers){
            index=index+1;
            x=x+500
            y = displayHeight - allPlayers[plr].distance
            head[index-1].x = x;
            head[index-1].y = y;

          if (index === player.index){
            stroke(10);
            fill("white");
            ellipse(x,y,60,60);

            camera.position.x = displayWidth/2;
            camera.position.y = head[index-1].y;

        }
          }
          if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
            player.y+=10;
          }
/*


          if(keyIsDown(W) && player.index !== null){
            player.distance +=10
            player.update();
          }
          if(keyIsDown(A) && player.index !== null){
            //player.distance +=10
            player.update();
          }
          if(keyIsDown(S) && player.index !== null){
            player.distance -=10
            player.update();
          }
          if(keyIsDown(D) && player.index !== null){
            //player.distance +=10
            player.update();
          }
*/





      }
     // image(track, 0,-displayHeight*5, displayWidth,displayHeight*6);
     drawSprites();
      
    }
    

    
}

  
      
