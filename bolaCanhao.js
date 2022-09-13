class bolaCanhao{
    constructor(x,y){
        this.r = 20;
        var options = {
            isStatic: true,
        };
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }

    mostrar(){
        
        image(bolaImg,this.body.position.x,this.body.position.y,this.r, this.r);
       
    }

    atirar(){
        
    }
}