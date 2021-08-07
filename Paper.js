class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'density':0.5,
            'friction':1.3
        }
        
        this.body=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius
        World.add(world,this.body);
    }
    
     display(){
    
        fill("yellow");
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);

     }
    }

