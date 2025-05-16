function setup(){
    createCanvas(400, 400);
    getFish(fishArr);
}

function draw(){
    background(200);
    moveFish(fishArr);
    showFish(fishArr);
    borderControl(fishArr);
    alignment(fishArr);
    cohesion(fishArr);
    sepperation(fishArr);
}


// Variable
let fishNumber = 30;
let fishArr = [];

let radians = Math.PI/100;

let coRad = Math.PI/150;
let alRad = Math.PI/150;
let sepRad = Math.PI/100;


// ParentClass fish
class Fish{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.c = c;
        this.r = 5;
        this.vek = new Vektor(random(-1, 1), random(-1, 1));
        this.bigR = 30;
    }

    show(){
        fill(this.c);
        stroke(this.c);
        circle(this.x, this.y, this.r);
        /*noFill();
        circle(this.x, this.y, this.bigR);*/
    }

    addVek(){
        this.vek = this.vek.normalize();
        this.x += this.vek.x;
        this.y += this.vek.y;
    }

    rotateRight(ang){
        this.vek.x = cos(ang)*this.vek.x - sin(ang)*this.vek.y;
        this.vek.y = sin(ang)*this.vek.x + cos(ang)*this.vek.y;
    }

    rotateLeft(ang){
        this.vek.x = cos(-ang)*this.vek.x - sin(-ang)*this.vek.y;
        this.vek.y = sin(-ang)*this.vek.x + cos(-ang)*this.vek.y;
    }

    getAngle(){
        return Math.abs(Math.atan2(this.vek.y, this.vek.x));
    }

    getDistance(other){
        return Math.hypot(this.x - other.x, this.y - other.y)
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

    dotProd(other){
        return (this.x * other.x) + (this.y * other.y);
    }

    turnNinety(){
        let x = cos(90 * (Math.PI/180))*this.x - sin(90 * (Math.PI/180))*this.y;
        let y = sin(90 * (Math.PI/180))*this.x + cos(90 * (Math.PI/180))*this.y;
        
        return new Vektor(x, y);
    }
}