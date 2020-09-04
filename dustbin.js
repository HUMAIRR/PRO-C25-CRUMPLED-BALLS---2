class Bin {
    constructor(x, y) {
      var options = {
          isStatic: true
      }

      this.x = x;
      this.y = y;
      this.image = loadImage("dustbingreen.png");
      
      this.bottom = Bodies.rectangle(this.x, this.y - 70, 200, 20, options)
		  this.left = Bodies.rectangle(this.x - 280, this.y - 107, 20, 250, options)
	    this.right = Bodies.rectangle(this.x - 22, this.y - 107, 20, 250, options)
      
      World.add(world, this.bottom);
      World.add(world, this.left);
      World.add(world, this.right);
    }
    display(){
      rectMode(CENTER)
      var bottom_pos = this.bottom.position;

      fill("gray");
      noStroke();

      imageMode(CENTER);
      image(this.image, bottom_pos.x - 135, bottom_pos.y - 93, 200, 213)
    }
  }