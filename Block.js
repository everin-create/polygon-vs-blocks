class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.04,
            density : 0.1
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility=255
        World.add(world, this.body);
      }
      display(){
        // var angle = this.body.angle;
        // var pos= this.body.position;
      //console.log(this.body.speed)
     if(this.body.speed<4){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body)
          push()
          this.Visibility=this.Visibility-3
          tint(255,this.Visibility)
        //  rectMode(CENTER)
         rect(this.body.position.x,this.body.position.y,this.width, this.height);
          pop()
       }
      }
      
        
        // translate(pos.x, pos.y);
        // rotate(angle);
        // rectMode(CENTER);
     
    s
}