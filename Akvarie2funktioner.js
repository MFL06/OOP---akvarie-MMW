function borderControl(){
    for(let i = 0; i != boxNum - 1; i++){
        if(boxArr[i].x > 350 && vArr[i].x > -0.5){
            vArr[i].x -= 1 / (50 - (boxArr[i].x - 350));
        }
    }
    for(let i = 0; i != boxNum - 1; i++){
        if(boxArr[i].x < 50 && vArr[i].x < 0.5){
            vArr[i].x += 1 / (boxArr[i].x);
        }
    }
    for(let i = 0; i != boxNum - 1; i++){
        if(boxArr[i].y >= 350 && vArr[i].y > -0.5){
            vArr[i].y -= 1 / (50 - (boxArr[i].y - 350));
            console.log(vArr[i].y)
        }
    }
    for(let i = 0; i != boxNum - 1; i++){
        if(boxArr[i].y <= 50 && vArr[i].y < 0.5){
            vArr[i].y += 1 / (boxArr[i].y);
            console.log(vArr[i].y)
        }
    }
}

function segregation(){

}