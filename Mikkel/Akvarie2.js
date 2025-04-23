function setup(){
    createCanvas(400, 400);
    //generate boxes and vektors
    getBoxes(childBoxArr, boxArr);
}

let boxNum = 50;
let childBoxNum = 10;

let boxArr = [];
let childBoxArr = [];
let proximityArr = [];

function draw(){
    background('black');
    
    //move
    moveBoxes(boxArr);

    //Boids algorithm stuff
    coherenceBias(boxArr);
    borderControl();
    //segregation(boxArr)


    //show boxes
    spawnBoxes(childBoxArr, boxArr);
/*
    for(let i = 0; i < childBoxArr.length; i++){
        childBoxArr[i].followParent(boxArr, childBoxArr[i]);
    }
*/
    
}

class Boxes{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.c = c
        this.w = 5;
        this.h = 5;
        this.vek = new Vektor(random(-1, 1), random(-1, 1));
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

    followParent(box, child){
        for(let i = 0; i < boxNum; i++){
            if(Math.hypot(this.x - box[i].x, this.y - box[i].y) < 10){
                proximityArr.push(box[i].vek);
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

    addV(vek){
        this.x + vek.x;
        this.y + vek.y;
    }
}

class CoherenceVektor extends Vektor{
    constructor(x, y){
        super(x, y);
    }
}


function getBoxes(child, parent){
    for(let i = 0; i < boxNum; i ++){
        parent.push(new ParentBox(random(50, 350), random(50, 350), 'blue'));
    }

    for(let i = 0; i < childBoxNum; i++){
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

function moveBoxes(boxes){
    for(let i = 0; i < boxNum; i++){
        boxes[i].addV(boxes[i].vek.normalize());
    }
}

function coherenceBias(boxes){
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
                coArr.push(boxes[e].vek);
            }
        }
        if(coArr.length >= 1){
            for(let e = 0; e < coArr.length; e ++){
                vekSumX += coArr[e].x;
                vekSumY += coArr[e].y;
            }
            avgVX = vekSumX/coArr.length;
            avgVY = vekSumY/coArr.length;
            
            let coVec = new CoherenceVektor(avgVX * 1000, avgVY * 1000);

            if(coVec = boxes[i].vek){
                console.log('error')
            }
            
            console.log(coArr);
            console.log(coVec);
            boxes[i].vek = coVec.normalize();
            //console.log(boxes[0].vek)
        }
        vekSumX = 0;
        vekSumY = 0;
        coArr = [];
    }
}