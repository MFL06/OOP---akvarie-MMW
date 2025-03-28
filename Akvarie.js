function setup(){
    createCanvas(400,400);
    TenBoxes();
}

function draw(){
    background('white');
    ShowBoxes();
}

class Box{
    constructor(x, y, vx, vy){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.w = 25;
        this.h = 25;
        this.c = 'red';
    }



    show(){
        stroke(this.c)
        fill(this.c)
        rect(this.x, this.y,this.w, this.h);
    }


    VibrateIn(){

    }

    VibrateOut(){

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

let xVib, yVib;

let arr;

let b1, b2;