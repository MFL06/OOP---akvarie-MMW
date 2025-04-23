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

function borderControl(parent){
    for(let i = 0; i != parent.length; i++){
        if(parent[i].x >= 350 && parent[i].vek.x > 0.2){
            parent[i].vek = parent[i].vek.rotate(1);
        }
    }

    for(let i = 0; i != parent.length; i++){
        if(parent[i].x < 50 && parent[i].vek.x < 0.2){
            parent[i].vek = parent[i].vek.rotate(1);;
        }
    }

    for(let i = 0; i != parent.length; i++){
        if(parent[i].y > 350 && parent[i].vek.y > -0.2){
            parent[i].vek = parent[i].vek.rotate(1);;
        }
    }

    for(let i = 0; i != parent.length; i++){
        if(parent[i].y < 50 && parent[i].vek.y < 0.2){
            parent[i].vek = parent[i].vek.rotate(1);;
        }
    }
}








