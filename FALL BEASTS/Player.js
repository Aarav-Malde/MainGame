class Player{

    constructor(){
        
            this.index = null;
            this.distance = 0;
            this.name = null;
            this.rank = null;
            this.color = null;
            this.buttonPressed = false;
            
        }
            
      getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
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
       getPlayerRank(){
        var rankref = database.ref('Rank');
        rankref.on("value",(data)=>{
          this.rank=data.val();
        })
      
       }
       static updatePlayerRank(rank){
        database.ref('/').update({
          Rank: rank
        })
       }
    }