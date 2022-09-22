class barcos{
    constructor(x,y,width,height,posY){ //características
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
        this.image = loadImage("./imagens/boat.png");
        this.width = width;
        this.height = height;

    }
    //métodos ou funções
    mostrar(){
        image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);

       
    }
}