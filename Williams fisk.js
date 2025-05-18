let fisk = [];

function setup() {
  createCanvas(400, 400);
  lavfisk();
}

function draw() {
  background(220);
  for (let f of fisk) {
    f.wander();
    f.avoidWalls();
    f.update();
    f.show();  // Polymorfi – hver fisketype har sin egen show-metode
  }
}

function lavfisk() {
  for (let i = 0; i < 15; i++) {
    fisk.push(new Box(random(width), random(height))); // Box-fisk
    fisk.push(new CircleFish(random(width), random(height))); // Cirkel-fisk
  }
}

// Base klasse
class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = new Vector(random(-1, 1), random(-1, 1));
    this.direction.normalize();
  }

  wander() {
    let maxAngle = 0.1;
    this.direction.rotate(random(-maxAngle, maxAngle));
    this.direction.normalize();
  }

  avoidWalls() {
    let margin = 20;
    let turnAngle = 0.2;
    if (this.x < margin) this.direction.rotate(turnAngle);
    else if (this.x > width - margin) this.direction.rotate(-turnAngle);
    if (this.y < margin) this.direction.rotate(turnAngle);
    else if (this.y > height - margin) this.direction.rotate(-turnAngle);
    this.direction.normalize();
  }

  update() {
    this.x += this.direction.x;
    this.y += this.direction.y;
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    // Skal overskrives af subklasser
  }
}

// Box-fisk
class Box extends Fish {
  constructor(x, y) {
    super(x, y);
    this.w = 4;
    this.h = 4;
    this.col = color(255, 100, 100);
  }

  show() {
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }
}

// Cirkel-fisk
class CircleFish extends Fish {
  constructor(x, y) {
    super(x, y);
    this.r = 5;
    this.col = color(100, 100, 255);
  }

  show() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}

// Vektor-klasse
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  normalize() {
    let len = this.length();
    if (len) {
      this.x /= len;
      this.y /= len;
    }
  }

  length() {
    return sqrt(this.x * this.x + this.y * this.y);
  }

  rotate(angle) {
    let c = cos(angle),
        s = sin(angle),
        nx = this.x * c - this.y * s,
        ny = this.x * s + this.y * c;
    this.x = nx;
    this.y = ny;
  }
}
