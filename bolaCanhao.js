class bolaCanhao{
    constructor(x,y){
        this.r = 25;
        var options = {
            isStatic: true,
        };
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.trajetoria = []; //matriz m3=[[x1,y1],[x2,y2],[x3,y3],...];
    }

    mostrar(){
        
        image(bolaImg,this.body.position.x,this.body.position.y,this.r, this.r);
        
        if(this.body.velocity.x>0 && this.body.position > 250){
            //pegar a informação de posição x e y

            //colocar a informação na matriz trajetoria

        }
        //percorrer a matriz trajetoria para mostrar cada ponto da trajetoria
        for(var i=0; i<this.trajetoria.length; i++){
            //mostrar a trajetoria usando o comando image
        }
       
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