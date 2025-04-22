function borderControl(){
    //Ærlig ... bare ikke pil' med det nu!
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].x > 350 && vArr[i].x > -0.5){
            vArr[i].x -= 1 / Math.abs((50 - (Math.abs(boxArr[i].x) - 350)));
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].x < 50 && vArr[i].x < 0.5){
            vArr[i].x += 1 / (Math.abs(boxArr[i].x));
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].y > 350 && vArr[i].y > -0.5){
            vArr[i].y -= 1 / Math.abs((50 - (Math.abs(boxArr[i].y) - 350)));
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].y < 50 && vArr[i].y < 0.5){
            vArr[i].y += 1 / (Math.abs(boxArr[i].y));
        }
    }
}

function segregation(box, vek){
    for(let i = 0; i != boxNum; i++){
        for(let e = 0; e =! boxNum; e++){
            if(e == i){
                continue;
            }else if(Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y) > 5){
                if(box[i].x - box[e].x > 0){
                    vek[i].x += 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }else if(box[i].x - box[e].x < 0){
                    vek[i].x -= 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }
                if(box[i].y - box[e].y > 0){
                    vek[i].y += 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }else if(box[i].y - box[e].y < 0){
                    vek[i].y += 1 / Math.hypot(box[i].x - box[e].x, box[i].y - box[e].y);
                }
            }
        }
    }
}