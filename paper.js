class Paper{
 constructor(x,y,r)
 {
     var option={
         isStatic:false,
         restitution:0.3,
         friction:0,
         density:1.2  
     }
     this.x=x;
     this.y=y;
     this.r=r
     this.image=loadImage("paper.png")
     this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
     World.add(World,this.body);

    }
    display()
    {
        var paperpos=this.body.position;

        Push()
        Translatee(paperpos.x,paperpos.y);
        rectMode(CENTER)
        Fill(255,0.225)
        imageMode(CENTER)
        image(this.image,o,o,this.r,this.r)
        Pop()
    }













 }                        