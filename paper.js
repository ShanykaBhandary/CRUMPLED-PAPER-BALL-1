class paper{
    contructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.body=Bodies.circle(x,y,radius,options)
      this.radius=radius
    
      World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}

      function keyPressed(){
       if(keyCode === UP_ARROW){

         Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});


    }
}