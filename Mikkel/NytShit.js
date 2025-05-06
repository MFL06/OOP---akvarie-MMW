function setup(){
    createCanvas(400, 400);
    getFish(fishArr);
}

function draw(){
    background(200);
    showFish(fishArr);
    moveFish(fishArr);
}


// Variable
let fishNumber = 30;
let fishArr = [];


// ParentClass fish
class Fish{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.c = c;
        this.r = 5;
        this.vek = new Vektor(random(-1, 1), random(-1, 1));
    }

    show(){
        fill(this.c);
        stroke(this.c);
        circle(this.x, this.y, this.r);
    }

    addVek(){
        this.vek = this.vek.normalize();
        this.x += this.vek.x;
        this.y += this.vek.y;
    }
}

class RedFish extends Fish{
    constructor(x, y, c){
        super(x, y, c);
    }
}

class BlueFish extends Fish{
    constructor(x, y, c){
        super(x, y, c);
    }
}

class Vektor{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    normalize(){
        return new Vektor((1 / Math.hypot(this.x, this.y)) * this.x, (1/Math.hypot(this.x, this.y) * this.y));
    }
}