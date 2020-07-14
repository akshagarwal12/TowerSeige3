class Player {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution: 1.0,
          friction: 0.5,
          density: 1.0

      }
      this.body = Bodies.circle(x,y,25,options);
      this.radius = radius;
      World.add(world, this.body);
    }

    display(){


      fill(255,0,0)
      circle(this.body.position.x, this.body.position.y, this.radius, this.radius);
    

    }
  };