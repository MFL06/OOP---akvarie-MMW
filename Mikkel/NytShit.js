function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(200);
}

let fishies;
let c;

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