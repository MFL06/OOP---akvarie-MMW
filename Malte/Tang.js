let TangArray = [];//Array for tangen

function setup() {
    createCanvas(600, 600);
    
    for (let i = 0; i < 20; i++) {//Laver random tang
        let pos = new Vector(random(width), height);
        TangArray.push(new Tang(pos));
    }
}

function draw() {
    background("blue");
    
    
    for (let i = 0; i < TangArray.length; i++) {
        TangArray[i].show();
        
  
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show(col, x0 = 0, y0 = 0) {
        fill(col);
        stroke(col);
        line(x0, y0, x0 + this.x, y0 + this.y);
        circle(x0 + this.x, y0 + this.y, 10);
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    sub(other) {
        return new Vector(this.x - other.x, this.y - other.y);
    }

    mult(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    mag() {
        return sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        let m = this.mag();
        if (m > 0) {
            return new Vector(this.x / m, this.y / m);
        } else {
            return new Vector(0, 0);
        }
    }
}

class Tang {
    #pos;
    #vel;
    #sizeX;
    #sizeY;
    #col;

    constructor(pos) {
        this.#pos = pos;
        this.#sizeX = 60;
        this.#sizeY = random(8,15);//laver tilfældig højde
        this.#col = (random(20,40), random(150,200), random(30,60)); // tilfældig farve mellem mørkegrøn og lysegrøn
    }



    show() {
        noFill();
        stroke(this.#col)
        strokeWeight(4);
    
        beginShape();
        for (let i = 0; i < this.#sizeY; i++) {//laver bevægelserne og gør det baseret på højden
            let offsetX = sin(frameCount * 0.1 + i * 0.5 + this.#pos.x * 0.01) * 5;
            let x = this.#pos.x + offsetX;
            let y = this.#pos.y - i * 10;
            vertex(x, y);
        }

        endShape();
    }
   
}
