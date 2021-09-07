/*
her er nogle variable til appelsinen.
*/
// Appelsinen
let x = 0; 
let y = 550;
const rad = 20;
let xspeed = 4;
let yspeed = -10;
let newspeed;
const grav = 0.1; // acceleration nedaf (tyngdekraft.)
const col = [220,110,0];

//frugt
let lime;

// Turbanen
let turban;


// Øvrige
let tid = 150;
let score = 0;
let missed = 0;
let liv = 8;
let spilIgang = true;   //flag

/* 
  her er variablen til billedet og functionen så billedet 
  bliver sat ind.
 */
let turbanbillede;
function preload() {
    turbanbillede = loadImage('Turban.png');
  }

 

function setup() {  // kører kun en gang, når programmet startes
    // for at lave spillets omrids

    createCanvas(750, 600);

    textAlign(CENTER, CENTER);

    newspeed = yspeed;
    x = rad;
    // parametrene fra kurv constructor i "kurv.js" (x, y, bredde, dybde, speed)
    turban = new Kurv(670, 100, 70, 50, 10, turbanbillede);

    lime = new frugt(20, 550, 20, 4, -10, [250, 230, 150])
}

function draw() {
    background(0);
    
    if (spilIgang) {

        // skulle flytte og tegne lime, men dur ikke.
        lime.move();
        lime.checkScore();
        lime.display();

        //til at flytte normale appelsin
        move();
        checkScore();
        display();

        turban.move();

    }
    else {  // så er Game Over det der skal vises
        fill(col);
        textSize(46);
        text("Game Over",width/2 + random(-5,5), height/2 + random(3 ));
        text("Score: "+score, width/2, height/2 + 50);
    }
}
// her fremskrives score og liv oppe i hjørnet.
function display() {
    fill(255);
    textSize(12);
    text("Score: "+score, width-80, 30);
    text("Liv: " + liv, width-160, 30);
    
    //Her skal vi sørge for at appelsinen bliver vist, hvis den skal vises
    if(tid > 0) {
        tid -= 1;
    }
    if (tid < 100) {
        fill(col);
        ellipse(x, y, rad*2, rad*2);

    }

    // Her vises turbanen - nu med billede.
    turban.tegn();
}
    
function move() {
    //Her skal vi sørge for at appelsinen bevæger sig, hvis den er startet
    if (tid <= 0) {
        x += xspeed;
        y += yspeed;
        yspeed += grav;
    }
    if (x > width || y > height) {
        missed += 1;
        liv -= 1;
        if (liv < 1) {
            spilIgang = false;
            genstartKnap.show();
        }
        shootNew();
    }
}

function checkScore() {
    // Her checkes om turbanen har fanget appelsinen. Hvis ja, skydes en ny appelsin afsted
    if (yspeed > 0) {
        if (turban.grebet(x, y, rad)) {
            score += 1;
            shootNew(); 
        }
    }
}
    
function shootNew() {
    //Her skal vi sørge for at en ny appelsin skydes afsted 
    x = rad;
    y = 550;
    yspeed = newspeed;
    xspeed = random(4);
    tid = random(400);
}

    genstartKnap = createButton('Genstart');
    genstartKnap.position(100,20);
    genstartKnap.mousePressed(restart);
    genstartKnap.hide();

    function restart() {
        liv = 10;
        missed = 0;
        score = 0;
        spilIgang = true;
        genstartKnap.hide()
    }

function keyPressed() {
    // Funktionen gør ingenting lige nu
    return false;  // Forebygger evt. browser default behaviour
}


/*
KONKLUSION


spillet dur Starter, men dur ikke som sådan mere.
når enten turbanen eller appelsinen bevæger sig
vil spillet fryse, eller det opdatere ikke efter 
bevægelse, så spillet "stopper jo egentlig taget"
ved ikke hvor fejlen ligger, og kan dermed heller ikke se
om genstart knappen virker heller.
*/