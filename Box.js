class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1.0,
          'friction':1.0,
          'density':0.5
      }
      this.box = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255
      this.image= loadImage("red.jpg")
      
      World.add(world, this.box);
    }
    display(){
      var pos =this.box.position;
      var angle= this.box.angle
      if(this.box.speed<4){

      rotate(angle)
      imageMode(CENTER);
      fill(255);
      image(this.image,pos.x,pos.y, this.width, this.height);

      }
      else{
        this.visibility=this.visibility-5
        tint(255,this.visibility)
        image(this.image,pos.x,pos.y,this.width,this.height)
        World.remove(world,this.box)


      }
    }
      score(){
        if(this.visibility<0 && this.visibility>-1005){
          score++
      }
    }
    }

  