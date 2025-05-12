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


// Border
function rotateFish(fish){
    for(let i = 0; i < fish.length; i++){
        fish[i].rotateLeft();
    }
}


function borderControl(fish){
    for(let i = 0; i < fish.length; i++){
        if(fish[i].x <= 50 || fish[i].x >= 350){
            if(shouldRigth(fish[i]) == true){
                fish[i].rotateRight(radians + borderCoef(fish[i]));
            }else{
                fish[i].rotateLeft(radians + borderCoef(fish[i]));
            }
            
        }else if(fish[i].y < 50 || fish[i].y > 350){
            if(shouldRigth(fish[i]) == true){
                fish[i].rotateRight(radians + borderCoef(fish[i]));
            }else{
                fish[i].rotateLeft(radians + borderCoef(fish[i]));
            }
        }
    }
}

function borderCoef(fish){
    let coef;
    let lengthPast;
    if(fish.x > 350){
        lengthPast = fish.x - 350;
        coef = lengthPast * 0.004;
    }else if(fish.x < 50){
        lengthPast = 50 - fish.x;
        coef = lengthPast * 0.004;
    }else if(fish.y > 350){
        lengthPast = fish.y - 350;
        coef = lengthPast * 0.004;
    }else if(fish.y < 50){
        lengthPast = 50 - fish.y;
        coef = lengthPast * 0.004;
    }
    return coef;
}

function shouldRigth(fish){
    if(fish.x > 350){
        if(fish.vek.y >= 0){
            return true;
        }else{
            return false;
        }
    }else if(fish.x < 50){
        if(fish.vek.y <= 0){
            return true;
        }else{
            return false;
        }
    }
    
    if(fish.y > 350){
        if(fish.vek.x <= 0){
            return true;
        }else{
            return false;
        }
    }else if(fish.y < 50){
        if(fish.vek.x >= 0){
            return true;
        }else{
            return false;
        }
    }
}
