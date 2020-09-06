class Player{
    constructor(){
        this.index = null;
        this.rank = null;
        this.distance = 0;
        this.name = null;


    }

    getCount(){
       var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });

    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count,
        })


    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }

    static getPLayerInfo(){
        database.ref("carsAtEnd").on("value", (data)=>{
            this.rank = data.val();
        })

    }

    getCarsAtEnd(){
        database.ref("carsAtEnd").on("value", (data)=>{
            this.rank = data.val();
        })
    }

    static updateCarsAtEnd(){
        database.ref('/').update({
            carsAtEnd:rank
        })
    }
}