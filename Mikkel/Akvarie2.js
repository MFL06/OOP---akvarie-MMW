function setup(){
    createCanvas(400, 400);
    //generate boxes and vektors
    getBoxes(childBoxArr);
    randomV(boxArr, vArr);

}



let v1;
let box1;

let boxNum = 50;
let childBoxNum = 10;

let boxArr = [];
let childBoxArr =[];
let vArr = [];

function draw(){
    background('black');
    //move
    moveBoxes(vArr, boxArr);
    //show boxes
    spawnBoxes(childBoxArr);

    //Boids algorithm stuff
    coherenceBias(boxArr, vArr);
    borderControl();
    segregation(boxArr, vArr)
}

class Boxes{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.c = c
        this.w = 5;
        this.h = 5;
    }
    
    normalize(vek){
        return new ParentBox(1/Math.hypot(this.x + vek, this.y + vek)) * (this.x + vek), (1/Math.hypot(this.x + vek, this.y + vek) * (this.y + vek));
    }

    addV(vek, boxes){
        boxes = boxes.normalize(vek);
    }

    show(){
        fill(this.c)
        rect(this.x, this.y, this.w, this.h);
    }
}

class ParentBox extends Boxes{
    constructor(x, y, c){
        super(x, y, c);
    }
}

class ChildBox extends Boxes{
    followParent(){

    }
}


class Vektor{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

function getBoxes(child){
    for(let i = 0; i != boxNum; i ++){
        boxArr.push(new Boxes(random(50, 350), random(50, 350), 'blue'));
    }

    for(let i = 0; i != childBoxNum; i++){
        child.push(new ChildBox(random(50, 350), random(50, 350), 'red'))
    }
}


function spawnBoxes(child){
    for(let i = 0; i != boxNum; i ++){
        boxArr[i].show();
    }

    for(let i = 0; i != childBoxNum; i++){
        child[i].show();
    }

}

function randomV(boxes, vek){
    for(let i = 0; i != boxes.length; i ++){
        vek.push(new Vektor(random(-1, 1), random(-1, 1)));
    }
}

function moveBoxes(boxes, vek){
    for(let i = 0; i != boxNum; i++){
        boxes[i].addV(vek[i], boxes[i]);
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
            }else if(Math.hypot((boxes[i].x - boxes[e].x), (boxes[i].y - boxes[e].y)) < 30){
                coArr.push(vektor[e]);
            }
        }
        //console.log(coArr);
        if(coArr.length >= 1){
            for(let e = 0; e < (coArr.length - 1); e ++){
                vekSumX += coArr[e].x;
                vekSumY += coArr[e].y;
            }
            avgVX = vekSumX/coArr.length;
            avgVY = vekSumY/coArr.length;
            if(avgVX > 1 || avgVX < -1){
                console.log(avgVX[e]);
            }else if(avgVY > 1 || avgVY < -1){
                console.log(avgVY[e]);
            }
            
            let partOfX = (avgVX * 200)/100;
            let partOfY = (avgVY * 200)/100;

            boxes[i].x += partOfX;
            boxes[i].y += partOfY;
        }
        
        
        vekSumX = 0;
        vekSumY = 0;
        coArr = [];
    }
}