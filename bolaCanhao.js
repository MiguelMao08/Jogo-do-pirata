class bolaCanhao{
    constructor(x,y){
        this.r = 25;
        var options = {
            isStatic: true,
        };
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.trajetoria = []; //matriz m3=[[x1,y1],[x2,y2],[x3,y3],...];
        this.afundou = false;
        this.bolaImg = loadImage("imagens/cannonball.png");
        this.animacao = [ this.bolaImg]
        this.speed = 0.05
    }

    mostrar(){
        var index = floor(this.speed % this.animacao.length);

        image(this.animacao[index],this.body.position.x,this.body.position.y,this.r, this.r);
       
        if(this.body.velocity.x>0 && this.body.position.x >200){
            //pegar a informação de posição x e y
             
          var posicao = [this.body.position.x,this.body.position.y];
            //colocar a informação na matriz trajetoria
          this.trajetoria.push(posicao)
        }
        //percorrer a matriz trajetoria para mostrar cada ponto da trajetoria
        for(var i=0; i<this.trajetoria.length; i++){
            //mostrar a trajetoria usando o comando image
            image(this.bolaImg,this.trajetoria[i][0],this.trajetoria[i][1],10,10)
        }
       
    }

    atirar(){
        var novoAngulo=Canhao.angulo-28;
        novoAngulo=novoAngulo*(3.14/180);
        var velocidade=p5.Vector.fromAngle(novoAngulo);
        velocidade.mult(0.3);
        Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body,{x:velocidade.x*(180/3.14),y:velocidade.y*(180/3.14)});
    }

    bolaAfundou(i){
        Matter.Body.setVelocity(this.body,{x:0,y:0});
        this.animacao = bolaNaAgua
        this.r = 100
        setTimeout(()=>{
            Matter.World.remove(world,this.body);
            delete Bolas[i];
          },2000)
    }
    

    animate(){
        this.speed += 0.05;
    }
}