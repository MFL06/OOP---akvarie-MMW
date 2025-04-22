function borderControl(){
    //Ærlig ... bare ikke pil' med det nu!
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].x > 330 && vArr[i].x > -0.5){
            vArr[i].x -= 1 / Math.abs((70 - (Math.abs(boxArr[i].x) - 330)));
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].x < 70 && vArr[i].x < 0.5){
            vArr[i].x += 1 / (Math.abs(boxArr[i].x));
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].y > 330 && vArr[i].y > -0.5){
            vArr[i].y -= 1 / Math.abs((70 - (Math.abs(boxArr[i].y) - 330)));
        }
    }
    for(let i = 0; i != boxNum; i++){
        if(boxArr[i].y < 70 && vArr[i].y < 0.5){
            vArr[i].y += 1 / (Math.abs(boxArr[i].y));
        }
    }
}

function segregation(){

}