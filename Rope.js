class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
      //this.pointB = pointB;

      var options = {
        bodyA: body1,
        isStatic : false,
        bodyB: body2,
        pointB:{x:this.offsetX, y:this.offsetY}
      };
  
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }

    display() {
      if (this.rope.bodyA) {
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        push();
  
        stroke("cyan");
        strokeWeight(5);
  
        line(point1.x, point1.y, point2.x+this.offsetX, point2.y+this.offsetY);
  
        pop();
      }
    }
  }