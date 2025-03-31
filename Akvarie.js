let v1 , v2, vsum;
function setup(){
    createCanvas(400,400);
    //TenBoxes();
    v1 = new Vektorer(100, 100);
    v2 = new Vektorer(200, 150)
    vsum = v1.add(v2);
    v1k = v1.addK(5);
    v1.toString();
    v2.toString();
    vsum.toString();
    v1k.toString();
    v2.skalarProdukt(v1k);
    v1normalize = v1.normalize();
}


function draw(){
    background('white');
    /*ShowBoxes();
    MakeVecArr();
    MoveBoxes();*/
    v1.ShowVec('red', 0, 0);
    v2.ShowVec('black', v1.x, v1.y);
    vsum.ShowVec('blue', 0, 0);
    v1k.ShowVec('yellow', 0, 0);
    v1normalize.ShowVec('red', 100, 100);
    circle(300, 250, 5);
}

// Boxene
/*
class Box{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.w = 5;
        this.h = 5;
        this.c = 'red';
    }



    show(){
        stroke(this.c);
        fill(this.c);
        rect(this.x, this.y,this.w, this.h);
    }
}

function TenBoxes(){
    arr = [];
    for(let i = 0; i != 10; i++){
        let x = random(0, 201);
        let y = random(0, 201);
        arr[i] = new Box(x, y);
    }
}

function ShowBoxes(){
    for(let i = 0; i != 10; i++){
        arr[i].show();
    }
}
*/
let xVib, yVib;

let arr;

let b1, b2;
// Vektorer

let vecArr = [];

class Vektorer{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    ShowVec(c, vstartx, vstarty){
        stroke(c);
        line(vstartx, vstarty, this.x + vstartx, this.y + vstarty);

    }

    add(other){
        return new Vektorer(this.x + other.x, this.y + other.y)
    }

    addK(k){
        return new Vektorer(this.x * k, this.y * k);
    }

    toString(){
        console.log('Position: ' + '(' + String(this.x) + '; ' + String(this.y) + '. Længde: ' + Math.hypot(this.x, this.y));
    }

    skalarProdukt(other){
        console.log((this.x * other.x) + (this.y * other.y)); 
    }

    normalize(){
        return new Vektorer((1/Math.hypot(this.x, this.y)) * this.x, (1/Math.hypot(this.x, this.y) * this.y));
    }

    isParallel(){
        
    }
}

/*
function MakeVecArr(){
    for(let i = 0; i != 10; i ++){
        vecArr.push(new Vektorer(random(-5, 5), random(-5, 5)));
    }
}

function MoveBoxes(){
    for(let i = 0; i !=10; i++){
        arr[i].x += vecArr[i].vx;
        arr[i].y += vecArr[i].vy;
    }
}*/