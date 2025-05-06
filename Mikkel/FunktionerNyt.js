function getFish(fish){
    for(let i = 0; i < fishNumber; i++){
        fish.push(new RedFish(random(50, 350), random(50, 350), 'red'));
    }
}

function showFish(fish){
    for(let i = 0; i < fish.length; i++){
        fish[i].show();
    }
}

function moveFish(fish){
    for(let i = 0; i < fish.length; i++){
        fish[i].addVek();
    }
}

function rotateFish(fish){
    for(let i = 0; i < fish.length; i++){
        fish[i].rotateRight();
    }
}