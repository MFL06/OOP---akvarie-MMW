function borderControl(parent){
    //Ærlig ... bare ikke pil' med det nu!
    for(let i = 0; i != parent.length; i++){
        if(parent[i].x > 350 && parent[i].vek.x > -0.5){
            parent[i].vek.x -= (50 - ((parent[i].x) - 350)) / 50;
        }
    }
    for(let i = 0; i != parent.length; i++){
        if(parent[i].x < 50 && parent[i].vek.x < 0.5){
            parent[i].vek.x += Math.abs(parent[i].x) / 50;
        }
    }
    for(let i = 0; i != parent.length; i++){
        if(parent[i].y > 350 && parent[i].vek.y > -0.5){
            parent[i].vek.y -= (50 - ((parent[i].y) - 350)) / 50;
        }
    }
    for(let i = 0; i != parent.length; i++){
        if(parent[i].y < 50 && parent[i].vek.y < 0.5){
            parent[i].vek.y += Math.abs(parent[i].y) / 50;
        }
    }
}

function segregation(box){
    for(let i = 0; i != box.length; i++){
        for(let e = 0; e =! box.length; e++){
            if(e == i){
                
            }else if(box[i].distance(box[e]) < 20){
                if(box[i].x - box[e].x > 0){
                    box[i].vek.x += 1 / box[i].distance(box[e]);
                }else if(box[i].x - box[e].x < 0){
                    box[i].vek.x -= 1 / box[i].distance(box[e]);
                }
                if(box[i].y - box[e].y > 0){
                    box[i].vek.y += 1 / box[i].distance(box[e]);
                }else if(box[i].y - box[e].y < 0){
                    box[i].vek.y += 1 / box[i].distance(box[e]);
                }
            }
        }
    }
}