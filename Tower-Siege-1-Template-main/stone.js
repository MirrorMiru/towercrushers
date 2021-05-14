class rock{
constructor(x,y,width,height){
var options = {restitution : 0.3, density : 0.8, friction : 0.7}
this.body = Bodies.rectangle(x,y,width,height,options)
this.image = loadImage("polygon.png")
World.add(world, this.body)
this.w = width
this.h = height
}
display(){
    //var angle = this.body.angle;
    var pos= this.body.position;
    push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.w, this.h);
    pop();
  }


}