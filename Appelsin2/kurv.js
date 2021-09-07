/*
 her bliver kurv classen lavet med dens constructor
*/

class Kurv {
    /* 
     i constructoren bliver parametrene taget og lavet om
     til nye objekter ud fra dem. dette gør så at værdigerne
     bliver husket og kan fremkaldes ved hjælp af nøgleordet "this".
     */
    constructor(x, y, bredde, dybde, speed, turbanbillede) {
        this.x = x;
        this.y = y;
        this.bred = bredde;
        this.dyb = dybde;
        this.speed = speed;
        this.col = [250, 230, 150];
        this.turbanbillede;
    }   
    
    /* 
    her bliver turbanen tegnet, og i mit tilfælde ville man
    højt sandsynligt fjerne "rect" da jeg har lavet en
    "image" istedet, men har alligevel beholdt den.
    */
    tegn = function () {
            fill(this.col);
            rect(this.x, this.y, this.bredde, this.dybde);
            image(turbanbillede, this.x, this.y, 80, 50);
    }
    /* 
    Flytter kurvens position
    move x gør så at boksen kan bevæge sig frem (og tilbage hvis 
    det hvis lavet) på x aksen
    det samme sker her bare med y aksen. 
     */
    move() {
        if (keyIsDown(UP_ARROW)) {
            this.moveY(-this.speed);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.moveY(this.speed);
        }    
        if (keyIsDown(LEFT_ARROW)) {
            this.moveX(-this.speed);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.moveX(this.speed);
        } 
    }

    moveX = function(flyt) {
        this.x += flyt;
        if (this.x < 0) {this.x = 0;};
        if (this.x > width-this.bred) {this.x = width - this.bred;};
    }



    moveY = function(flyt) {
        this.y += flyt;
        if (this.y < 0) {this.y = 0;};
        if (this.y > height-this.dyb) {this.y = height - this.dyb;};
    }

    /* Tjekker om bolden/appelsinen er grebet ved at se om den rammer
     * "rent" ned gennem kurvens overkant. Parametrene er hhv. boldens
     * midtpunkts koordinater og boldens radius
     */
    grebet = function(xa, ya, ra) {
        if ((ya < this.y+3 && ya > this.y-3) && xa > this.x+ra && xa < this.x+this.bred-ra) {
            return true;
        }
        else {
            return false;
        }
    }

} 