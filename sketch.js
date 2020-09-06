var database;

var gameState = 0;

var game, form, player;
var car1, car2, car3, car4;
var BuggatiChiron, Pagani, Porsche911, MercedesBenz,
    NissanGTR, NissanSuper, AudiR8, AstonMartin,
    Mustang, LaFerrai, LamborghiniAventador, MitsubishiSports,
    KoenigsEggra;

    var playerCount;


function preload(){
 car1 = loadImage("images/car1.png");
 car2 = loadImage("images/car2.png");
 car3 = loadImage("images/car3.png");
 car4 = loadImage("images/car4.png");
 car9 = loadImage("images/car9.jpg");
 KoenigsEggra = loadImage("images/KoenigsEggra.jpg");
 BuggatiChiron = loadImage("images/BuggatiChiron.jpg");
 //LaFerrai = loadImage("images/LaFerrai.jpg");
 LamborghiniAventador = loadImage("images/LamborghiniAventador.jpg");
 //MercedesBenz = loadImage("images/MercedesBenz.jpg");
 MitsubishiSports = loadImage("images/MitsubishiSports.jpg");
 Mustang = loadImage("images/Mustang.jpg");
 NissanGTR = loadImage("images/NissanGTR.jpg");
 NissanSuper = loadImage("images/NissanSuper.jpg");
 Pagani = loadImage("images/Pagani.jpg");
 Porsche911 = loadImage("images/Porsche911.jpg");
 AstonMartin = loadImage("images/AstonMartin.jpg");
 AudiR8 = loadImage("images/AudiR8.jpg");


}

function setup (){
 createCanvas(400,600);
 database = firebase.database();

 game = new Game();
 game.getState();
 game.start();

}

function draw() {
    if (playerCount === 4) {
        game.update(1);
    }

    if (gameState === 1) {
        clear();
        game.play();

    }

    if (gameState == 2) {
        game.end();
    }
  
}