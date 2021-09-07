


/*
her starter jeg ud med en class og dens constructor

*/
class frugt {


    constructor(x, y, r, xs, ys, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xs = xs;
        this.ys = ys;
        this.col = c;
        this.tid = random(100, 400);
        this.moving = false;
        this.showing = false;
        console.log("ny frugt er lavet, dens ventid er "+ this.tid);
    }

/*
her displayer den hvilken figur der skal vises
*/
    display = function() {
        if (this.showing) {
        file(this.col);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        }
    }

/*
her er hvordan frugten bevæger sig, giver point og får en til at mistee liv.
*/
    move() {
        if (this.moving) {
            this.x += this.xspeed;
            this.y += this.yspeed;
            this.yspeed += grav;

            if (this.x > witdh || this.y > height) {
                missed += 1;
                liv -= 1;

                if (liv < 1) {
                    spilIgang = false;
                    genstartknap.show();
                }
                console.log("afskyder frugt igen")
                this.shootNew();
            }


        } 
         else {
            this.tid -= 1;
            if (this.tid < 60) {
                this.showing = true;
                if (tid < 0) {
                    this.moving = true;

                }
            }
        }
    }


    /*
    her er hvordan frugten fremstilles og hvor den gør det.
    */
    shootnew() {
        this.x = this.r;
        this.y = random(200, 550);
        this.yspeed = -10 * (this.y/550);
        this.xspeed = random(4);
        this.moving = false;
        this.moving = false;
        this.tid = random(100, 400);
    }

/*
 og denne function checker så din score, altså om du greb bolden
 og skal have point for det.
*/
    checkScore = function() {
        if (this.yspeed > 0) {
            if (turban.grebet(this.x, this.y, this.r)) {
                score += 1;
                this.shootnew();
            }
        }
    }
}