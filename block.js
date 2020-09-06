class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity=255;
        World.add(world, this.body);
      }
      display(){
      
        if(this.body.speed < 3){
          super.display();
          imageMode(CENTER);
        }
        else{
          World.remove(World,this.body);
        push();
          this.Visiblity=this.Visiblity-5;
          tint(255,this.Visiblity);
          imageMode(CENTER);
        pop();
        }
        
      }
}