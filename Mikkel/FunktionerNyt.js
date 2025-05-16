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
        coef = lengthPast * 0.006;
    }else if(fish.x < 50){
        lengthPast = 50 - fish.x;
        coef = lengthPast * 0.006;
    }else if(fish.y > 350){
        lengthPast = fish.y - 350;
        coef = lengthPast * 0.006;
    }else if(fish.y < 50){
        lengthPast = 50 - fish.y;
        coef = lengthPast * 0.006;
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

function alignment(fish){
    for(let i = 0; i < fish.length; i++){
        let coArr = [];
        for(let e = 0; e < fish.length; e++){
            if(fish[i].getDistance(fish[e]) <= 30){
                coArr.push(fish[e]);
            }
        }
        if(coArr.length > 1){
            let average = getAvg(coArr);
            let ninetyVek = fish[i].vek.turnNinety();
            if(ninetyVek.dotProd(average) < 0){
                fish[i].rotateLeft(alRad)
            }else{ 
                fish[i].rotateRight(alRad)
            }
        }
        
    }
    // Dot product: fisk + 90 grader højre. Hvis dot produkt er positiv, så drej højre, negativ så venstre.
    // the average of the list: getAvg(CoArr);
}

function getAvg(list){
    let X;
    let Y;
    let avgX;
    let avgY;
    for(let i = 0; i < list.length; i++){
        X =+ list[i].vek.x;
        Y =+ list[i].vek.y;
    }
    avgX = X / list.length;
    avgY = Y / list.length;
    let avgVek = new Vektor(avgX, avgY);
    return avgVek.normalize();
}

function cohesion(fish){
    let coArr = [];
    for(let i = 0; i < fish.length; i++){
        for(let e = 0; e < fish.length; e++){
            if(fish[i].getDistance(fish[e]) <= 30){
                coArr.push(fish[e]);
            }
        }
        if(coArr.length > 1){
            if(fish[i].vek.turnNinety().dotProd(getAvg(coArr)) < 0){
                fish[i].rotateLeft(coRad);
            }else{
                fish[i].rotateRight(coRad);
            }
        }
        
    }
}

function sepperation(fish){
    let coArr = [];
    for(let i = 0; i < fish.length; i++){
        for(let e = 0; e < fish.length; e++){
            if(e == i){
                continue;
            }else if(fish[i].getDistance(fish[e]) <= 15){
                coArr.push(fish[e]);
            }
        }
        if(fish[i].vek.turnNinety().dotProd(getAvg(coArr)) > 0){
            fish[i].rotateLeft(sepRad);
        }else{
            fish[i].rotateRight(sepRad);
        }
    }
}
