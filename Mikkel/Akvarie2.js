function setup(){
    createCanvas(400, 400);
    //generate boxes and vektors
    getBoxes(childBoxArr, boxArr);
    randomV(boxArr, vArr);
}

let boxNum = 50;
let childBoxNum = 10;

let boxArr = [];
let childBoxArr = [];
let vArr = [];
let proximityArr = [];

function draw(){
    background('black');
    
    //move
    moveBoxes(boxArr, vArr);
    //show boxes
    spawnBoxes(childBoxArr, boxArr);
    //Boids algorithm stuff
    coherenceBias(boxArr, vArr);
    borderControl();
    segregation(boxArr, vArr)

    for(let i = 0; i < childBoxArr.length; i++){
        childBoxArr[i].followParent(boxArr, vArr, childBoxArr[i]);
    }
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
        fill(this.c);
        rect(this.x, this.y, this.w, this.h);
    }

    addV(vek){
        this.x += vek.x;
        this.y += vek.y;
    }
}

class ParentBox extends Boxes{
    constructor(x, y, c){
        super(x, y, c);
    }
}

class ChildBox extends Boxes{
    constructor(x, y, c){
        super(x, y, c);
    }

    followParent(box, vek, child){
        for(let i = 0; i < boxNum; i++){
            if(Math.hypot(this.x - box[i].x, this.y - box[i].y) < 10){
                proximityArr.push(vek[i]);
            }
        }
        for(let i = 0; i < proximityArr.length; i++){
            if(Math.hypot(this.x - proximityArr[i].x, this.y - proximityArr[i].y) < Math.hypot(this.x - proximityArr[0].x, this.y - proximityArr[0].y)){
                proximityArr[0] = proximityArr[i];
            }
        }
        if(proximityArr.length > 0){
            child.addV(proximityArr[0].normalize());
        }
        proximityArr = [];
        
    }
}


class Vektor{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    length(){
        return Math.hypot(this.x, this.y);
    }

    normalize(){
        return new Vektor((1 / Math.hypot(this.x, this.y)) * (this.x), (1/Math.hypot(this.x, this.y) * (this.y)));
    }
}

class CoherenceVektor extends Vektor{
    constructor(x, y){
        super(x, y);
    }
}


function getBoxes(child, parent){
    for(let i = 0; i != boxNum; i ++){
        parent.push(new ParentBox(random(50, 350), random(50, 350), 'blue'));
    }

    for(let i = 0; i != childBoxNum; i++){
        child.push(new ChildBox(random(50, 350), random(50, 350), 'red'))
    }
}


function spawnBoxes(child, parent){
    for(let i = 0; i != parent.length; i ++){
        parent[i].show();
    }

    for(let i = 0; i != child.length; i++){
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
        boxes[i].addV(vek[i].normalize());
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
        if(coArr.length >= 1){
            for(let e = 0; e != coArr.length; e ++){
                vekSumX += coArr[e].x;
                vekSumY += coArr[e].y;
            }
            avgVX = vekSumX/coArr.length;
            avgVY = vekSumY/coArr.length;
            if(avgVX > 1 || avgVX < -1){
                //console.log(avgVX);
            }else if(avgVY > 1 || avgVY < -1){
                //console.log(avgVY);
            }
            
            let coVec = new CoherenceVektor((avgVX * 200)/100, (avgVY * 200)/100);
            
            boxes[i].addV(coVec.normalize());

            if(vektor[i] == proximityArr[0]){
                child.addV(coVec.normalize())
            }
            
        }
        vekSumX = 0;
        vekSumY = 0;
        coArr = [];
    }
}