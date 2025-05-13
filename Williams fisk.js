let fisk=[]


function setup() {
    createCanvas(400, 400);
    lavfisk()
    
  }
  
  function draw() {
    background(220);
    for (let i = 0; i < fisk.length; i++) {
        fisk[i].show();
    }
  }
  

  function lavfisk(){
    for (let i = 0; i < 30; i++) {
        fisk.push(new Box(random(0,400),random(0,400)))
      }
  }

  class Vector{
    constructor(x,y){
      this.x=x
      this.y=y
    }
    normalize(){
      let length = this.length()
      this.x=this.x/length
      this.y=this.y/length
    }
    length(){
      return sqrt(this.x**2+this.y**2)
    }
  }
  
  class Box{
    constructor(x,y){
    this.x=x
    this.y=y
    this.w=1
    this.h=1
    this.col="red"
    this.direction=new Vector(1,1)
    }

    show(){
      this.direction.normalize()
      this.x+=this.direction.x
      this.y+=this.direction.y
      fill(this.col)
      rect(this.x,this.y,this.w,this.h)
    }
  }