class Ball 
{
    constructor(x, y, width, height) {
    this.image = loadImage("paper.png")
               
      var options = {
          'restitution':0.3,
          'friction':0,
          'density':1.3,
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      ellipse(0, 0, this.width, this.height);
      image(this.image, 0, 0, this.width, this.height);
     pop();
    }
  };
  
