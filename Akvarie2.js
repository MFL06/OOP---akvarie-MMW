function setup(){
    createCanvas(400, 400);
    //box1 = new Boxes(100, 100, 'white');
    //v1 = new Vektor(1, 1);
}

let v1;
let box1;

let boxArr = [];
let vArr = [];

function draw(){
    background('black');
    spawnBoxes();
    randomV(boxArr);
}

class Boxes{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.c = c
        this.w = 5;
        this.h = 5;
    }

    show(){
        rect(this.x, this.y, this.w, this.h);
    }

 
}

class Vektor{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    addV(box){
        box.x += this.x;
        box.y += this.y;
    }
}



function spawnBoxes(){
    for(let i = 0; i != 5; i ++){
        boxArr.push(new Boxes(random(100, 300), random(100, 300), 'white'));
        boxArr[i].show();
    }
}

function randomV(boxes){
    for(let i = 0; i != 5; i ++){
        vArr.push(new Vektor(random(-1, 1), random(-1, 1)));
        vArr[i].addV(boxes[i]);
    }
}