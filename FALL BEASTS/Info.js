class Info{
    constructor(){
      this.button = createButton('OK button u gotta fill this space');
      this.greeting = createElement('h2');
      this.greeting1 = createElement('h2');
      this.greeting2 = createElement('h2');
     
        
    }

    display(){
        background(infobg);
        this.button.position(displayWidth/2 - 30, displayHeight/2 +170);
        this.button.hide();
        //this.button.show();
      
        color.greeting2.hide();
        
       // okimg = createSprite(displayWidth/2 - 30, displayHeight/2 +170);
        //okimg.addImage("ok", ok);

        //if(mousePressed on okimg){
        //  okimg.hide();
        //}
       
       
       // okimg.scale(0.3);
        /*fill("black");
        textSize(50);
        strokeWeight(4);
        textFont('Helveltica');
        text("", 300, 350);
        */
        
      
      
        
      
       this.count();
       this.button.mousePressed(()=>{  
        this.button.hide();
        okCount= okCount + 1;
        Info.okUpdate(okCount);
      
        
        });

        Player.getPlayerInfo();
        //console.log(allPlayers);
        var x =0 ;
        for(var plyr in allPlayers){ 
        x+=100;
        text(allPlayers[plyr].name + " has chosen " + allPlayers[plyr].color , displayWidth/2 -150  , x+150);
        /*
        this.greeting1.html(allPlayers[plyr].name + " has chosen" + allPlayers[plyr].name.color);
        this.greeting1.position(100,200);
      
        this.greeting2.html(allPlayers[plyr].name + "has chosen" + allPlayers[plyr].name.color);
        this.greeting2.position(100,300);  
        */       
       } 

       if(red==2 && green==2 && yellow==2){
        game.update(3);
      }
        
      
        drawSprites();
    }

    static okUpdate(value){
      database.ref('/').update({
        ok: value
      })
      console.log(value);
    }

    count(){
      var ok = database.ref('ok');
      ok.on("value", (data)=>{
        okCount = data.val();
        //console.log(okCount);
      })
      
    }

   
    

    redColor(){
      var redReference = database.ref('color/red');
      redReference.on("value",(data)=>{
        red = data.val();
      })
  }

  greenColor(){
      var greenReference = database.ref('color/green');
      greenReference.on("value",(data)=>{
        green = data.val();
      })
  
  }


  yellowColor(){
      var yellowReference = database.ref('color/yellow');
      yellowReference.on("value",(data)=>{
        yellow = data.val();
      })
  
  }

  
      redUpdate(value){
          database.ref("color/").update({
          red: value,
          
          });
  }

      greenUpdate(value){
          database.ref("color/").update({
          green: value
      });
  }

      yellowUpdate(value){
         database.ref("color/").update({
          yellow: value
       });
  }
  

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      color:this.color,
      buttonPressed: this.buttonPressed,
    });

    
  }

    static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })

  }

}




