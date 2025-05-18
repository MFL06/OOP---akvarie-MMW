let fishArray = [];

function setup() {
    createCanvas(600, 600);
    
    for (let i = 0; i < 10; i++) {
        let pos = new Vector(random(width), random(height));
        let vel = new Vector(random(-3, 3), random(-3, 3));
        fishArray.push(new Fish(pos, vel));
    }
}

function draw() {
    background("blue");
    
    
    for (let i = 0; i < fishArray.length; i++) {
        let fish = fishArray[i];
        
        
        for (let j = 0; j < fishArray.length; j++) {
            if (i !== j) {
                fish.avoid(fishArray[j]);
            }
        }
        
        fish.update();
        fish.show("orange");
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

class Fish {
    #pos;
    #vel;
    #sizeX;
    #sizeY;

    constructor(pos, vel) {
        this.#pos = pos;
        this.#vel = vel;
        this.#sizeX = 60;
        this.#sizeY = 30;
    }

    update() {
        this.#pos = this.#pos.add(this.#vel);
        this.boundaryCheck();
    }

    show(col) {
        fill(col);
        triangle(
            this.#pos.x, this.#pos.y,
            this.#pos.x - this.#sizeX, this.#pos.y - this.#sizeY / 2,
            this.#pos.x - this.#sizeX, this.#pos.y + this.#sizeY / 2
        );
        ellipse(this.#pos.x, this.#pos.y, this.#sizeX, this.#sizeY);
        fill("white");
        rect(this.#pos.x - this.#sizeX / 8, this.#pos.y - this.#sizeY / 2, this.#sizeX / 8, this.#sizeY);
        line(this.#pos.x, this.#pos.y, this.#pos.x + this.#sizeX / 2, this.#pos.y);
        circle(this.#pos.x + this.#sizeX / 4, this.#pos.y - this.#sizeY / 4, 3);
    }

    boundaryCheck() {
        if ((this.#pos.x > width) || (this.#pos.x < 0)) {
            this.#vel.x *= -1;
        }
        if ((this.#pos.y > height) || (this.#pos.y < 0)) {
            this.#vel.y *= -1;
        }
    }

    avoid(otherFish) {
        let diff = this.#pos.sub(otherFish.#pos);
        let distance = diff.mag();
        let minDistance = 50; 

        if (distance < minDistance && distance > 0) {
            let steer = diff.normalize().mult(0.5); 
            this.#vel = this.#vel.add(steer);
        }
    }
}
