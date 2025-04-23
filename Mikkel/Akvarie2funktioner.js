function borderControl(){
    //Ærlig ... bare ikke pil' med det nu!
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].x > 350 && boxArr[i].vek.x > -0.5){
            boxArr[i].vek.x -= (50 - ((boxArr[i].x) - 350)) / 5;
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].x < 50 && boxArr[i].vek.x < 0.5){
            boxArr[i].vek.x += boxArr[i].x / 5;
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].y > 350 && boxArr[i].vek.y > -0.5){
            boxArr[i].vek.y -= (50 - ((boxArr[i].y) - 350)) / 5;
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].y < 50 && boxArr[i].vek.y < 0.5){
            boxArr[i].vek.y += boxArr[i].y / 5;
        }
    }
}

function segregation(box){
    for(let i = 0; i != boxNum; i++){
        for(let e = 0; e =! boxNum; e++){
            if(e == i){
                continue;
            }else if(Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y) > 5){
                if(box[i].x - box[e].x > 0){
                    box[i].vek.x += 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }else if(box[i].x - box[e].x < 0){
                    box[i].vek.x -= 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }
                if(box[i].y - box[e].y > 0){
                    box[i].vek.y += 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }else if(box[i].y - box[e].y < 0){
                    box[i].vek.y += 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }
            }
        }
    }
}