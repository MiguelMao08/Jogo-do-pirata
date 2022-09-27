class barcos{
    constructor(x,y,width,height,posY){ //características
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.image = loadImage("./imagens/boat.png");
        this.width = width;
        this.height = height;
        this.posY = posY;

    }
    //métodos ou funções
    mostrar(){
        push();
        translate(this.body.position.x,this.body.position.y);
        image(this.image,0,this.posY,this.width, this.height);
        pop();
       
    }
}