class bolaCanhao{
    constructor(x,y){
        this.r = 25;
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
        var novoAngulo=Canhao.angulo-28;
        novoAngulo=novoAngulo*(3.14/180);
        var velocidade=p5.Vector.fromAngle(novoAngulo);
        velocidade.mult(0.2);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocidade.x*(180/3.14),y:velocidade.y*(180/3.14)});
    }
}