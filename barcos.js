class barcos{
    constructor(x,y,width,height,posY,barcoAnimacao){ //características
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.image = loadImage("./imagens/boat.png");
        this.width = width;
        this.height = height;
        this.posY = posY;
        this.animacao = barcoAnimacao;
        this.speed = 0.05; //começa em um valor (inicialização)
    }
    //métodos ou funções
    mostrar(){
        var index = floor(this.speed % this.animacao.length);
        //(%) resto da divisão
        console.log("speed" + this.speed);
        console.log("comprimento" + this.animacao.length);
        console.log("indice" + index);
        push();
        translate(this.body.position.x,this.body.position.y);
        image(this.animacao[index],0,this.posY,this.width, this.height);
        pop();
       
    }
    remover(i){
        setTimeout(()=>{
            Matter.World.remove(world,Barcos[i].body);
            delete Barcos[i];
          },1000)
    }
    //animação
    animate(){
        this.speed += 0.05;
    }
}