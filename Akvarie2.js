function setup(){
    createCanvas(400, 400);
    //box1 = new Boxes(100, 100, 'white');
    //v1 = new Vektor(1, 1);
    getBoxes();
}

let v1;
let box1;

let boxNum = 50;

let boxArr = [];
let vArr = [];

function draw(){
    background('black');
    spawnBoxes();
    randomV(boxArr);
    coherenceBias(boxArr, vArr);
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

function getBoxes(){
    for(let i = 0; i != boxNum; i ++){
        boxArr.push(new Boxes(random(50, 350), random(50, 350), 'white'));
    }
}


function spawnBoxes(){
    for(let i = 0; i != boxNum; i ++){
        boxArr[i].show();
    }

}

function randomV(boxes){
    for(let i = 0; i != boxes.length; i ++){
        vArr.push(new Vektor(random(-1, 1), random(-1, 1)));
        vArr[i].addV(boxes[i]);
    }
}

function coherenceBias(boxes, vektor){
    let coArr = [];
    let vekSumX = 0;
    let vekSumY = 0;
    let avgVX;
    let avgVY;


    for(let i = 0; i != boxes.length; i++){
        for(let e = 0; e != boxes.length; e++){
            if(i == e){
                continue;
            }else if(Math.hypot((boxes[i].x - boxes[e].x), (boxes[i].y - boxes[e].y)) < 40){
                coArr.push(vektor[e]);
            }
        }
        //console.log(coArr);
        if(coArr.length >= 1){
            for(let e = 0; e != (coArr.length - 1); e ++){
            vekSumX += coArr[e].x;
            vekSumY += coArr[e].y;
            }
            avgVX = vekSumX/coArr.length;
            avgVY = vekSumY/coArr.length;
            console.log(avgVX)
        }


        

        coArr = [];
    }
}