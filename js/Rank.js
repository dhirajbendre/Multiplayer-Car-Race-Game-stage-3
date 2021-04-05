class Rank{
    constructor(){

    }
    display(){
        var win=createElement('h3')
        win.html("playerRank:"+player.rank)
        win.position(displayWidth/2-100,displayHeight/2);
    }
}