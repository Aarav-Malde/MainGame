class Form {

    constructor() {
      this.input = createInput("Enter Name Here");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.greeting2 = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset');
    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      
    }

  
    display(){
      background(entergamebg);
     // this.title.html("FALL BEASTS: THE ULTIMATE RACE");
      this.title.position(displayWidth/2 - 200, 0);
  
      this.input.position(displayWidth/2 -110  , displayHeight/2 - 50 );
      this.button.position(displayWidth/2 - 30, displayHeight/2 +185);
      // createImage    Add Image
      this.reset.position(30, 30);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();

        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        console.log(playerCount); 
        //nan=3 - playerCount;
        this.greeting2.html("We are waiting for "+ (3 - playerCount)+ " players")
        this.greeting2.position(displayWidth/2 - 150, displayHeight/2);
       
        this.greeting.position(displayWidth/2 - 100, displayHeight/2 - 50);
      });

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        color.redUpdate(0);
        color.greenUpdate(0);
        color.yellowUpdate(0);
        Info.okUpdate(0)

      });
  
    }
  }