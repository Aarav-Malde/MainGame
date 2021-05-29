class Color{
    constructor(){
        this.redBlock = createSprite(displayWidth/4,500,200,200);
        this.redBlock.shapeColor="red";
        this.greenBlock = createSprite(2*displayWidth/4,500,200,200);
        this.greenBlock.shapeColor="green";
        this.yellowBlock = createSprite(3*displayWidth/4,500,200,200);
        this.yellowBlock.shapeColor="yellow";
        this.color="";
        this.greeting= createElement('h2');
        this.greeting2 = createElement('h2');



    }

    display(){
        background("#FFA07A");
        fill("#008B8B");
        textSize(50);
        strokeWeight(4);
        textFont('Helveltica');
        //text("Choose your colours for the game !!!", 300, 350);
        this.greeting.position(300,350);
        this.greeting.html("Choose your colour for the game !!!");
        
        
        this.redColor();
        this.greenColor();
        this.yellowColor();

        if(mousePressedOver(this.redBlock)){
            this.redBlock.destroy();
            this.redUpdate(1);
            player.color="red";
            player.update();
            this.greeting.hide();
            this.greeting2.hide();
            this.greeting2.html("You have chosen your colour for the game !!!");
            this.greeting2.position(300,350);
            
         }
         if(mousePressedOver(this.greenBlock)){
             
             
            this.greenUpdate(1);
            this.greenBlock.destroy();
            player.color="green";
            player.update();
            this.greeting.hide();
            this.greeting2.hide();
            this.greeting2.html("You have chosen your colour for the game !!!");
            this.greeting2.position(300,350);
         }
         if(mousePressedOver(this.yellowBlock)){
            this.yellowBlock.destroy();
            this.yellowUpdate(1);
            player.color="yellow";
            player.update();
            this.greeting.hide();
            this.greeting2.hide();
            this.greeting2.html("You have chosen your colour for the game !!!");
            this.greeting2.position(300,350);

         }
       

         if(red ==1){
            this.redBlock.destroy();
            textSize(25);
            strokeWeight(4);
            textFont('Helveltica'); 
           
            }
        if(green ==1){
            this.greenBlock.destroy();
          

        }   
        if(yellow ==1){
            this.yellowBlock.destroy();
        }

      
        
         
        
        drawSprites();
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
    
    

    

}