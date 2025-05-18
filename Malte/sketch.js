

function setup() {
    createCanvas(600, 600);
    

    
}

function draw() {
    background("blue");
    for (let y = 0; y < height; y += 20) {
        stroke(0, 0, 100, 30);
        strokeWeight(2);
        let wave = sin(frameCount * 0.02 + y * 0.1) * 10;
        line(0, y + wave, width, y + wave);
    }
    
}