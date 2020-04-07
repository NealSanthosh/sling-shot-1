class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 1
        }
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);
    }
    fly(){
        this.slingShot.bodyA = null;
    }
    display(){
        if (this.slingShot.bodyA != null){
            var pointA = this.slingShot.bodyA.position;
            var pointB = this.slingShot.pointB;
            push();
            strokeWeight(4);
            stroke("white")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}