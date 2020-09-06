class Form{
constructor(){
    this.input = createInput("Name");
    this.button1 = createButton("Quick Play");
    this.button2 = createButton("Options");
    this.greeting = createElement("h1");
    this.title = createElement("h1");
    this.button3 = createButton("LeaderBoard");
}
hide(){
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.input.hide();
    this.title.hide();


}

display(){
this.title.html("Car Bash Ultimate Racing 2D")
this.title.position(displayWidth/2 - 50,0);

this.input.position(displayWidth/10 - 40 , displayHeight/6 - 80);

this.button2.position(displayWidth-200, 70);
//this.button3.position();

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide(0);
    player.name = this.input.value();
    playerCount+=1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("Let's GO "+ player.name);
    this.greeting.position(displayWidth/2 - 70, displayHeight/4);
});
   this.reset.mousePressed(()=>{
   player.updateCount(0);
   game.update(0);
   });


}
}