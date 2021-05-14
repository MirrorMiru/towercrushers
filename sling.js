class sling{
    constructor(bodyA, pointB){
        var options = {
            stiffness: 0.03,
            length: 12,
            bodyA: bodyA,
            pointB: pointB
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

       
    fly(){
        this.sling.bodyA = null;
    }
    
    display(){
        if(this.sling.bodyA){
           
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6.5);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
     

        }
    }

    
}
