class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();

        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })

    }

async start(){
    if (gameState == 0) {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if (playerCountRef.exists) {
            playerCount = playerCountRef.val();
            player.getCount();
        }

        form = new Form();
        form.display();
        
    }

    car1 = createSprite(100, 200);
    car1.addImage(Mustang);
    car2 = createSprite(300, 200);
    car2.addImage(BuggatiChiron);
    car3 = createSprite(500, 200);
    car3.addImage(MitsubishiSports);
    car4 = createSprite(700, 200);
    car4.addImage(Porsche911);
}

play(){
    form.hide();

    Player.getPlayerInfo();
    player.getCarsAtEnd();

    if (allPlayers !== undefined) {
        

        var index = 0;

        var x ;
        var y;

        for(var player in allPlayers){
            index = index+1;


            x = x+200;

            y = displayHeight - allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;

            if (index === player.index) {
                stroke(10);
                fill('red');
                ellipse(x, y, 60, 60);
                cars[index-1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;

                if (KeyIsDown(RIGHT_ARROW)) {
                    player[index-1].x = player[Index-1].x + x  ;
        
                }
                
            }

        }
    }

    if (keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance+10;
        player.update();
    }

    

    }

}