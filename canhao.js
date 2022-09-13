class canhao{
    constructor(x,y,largura,altura,angulo){
        this.x=x;
        this.y=y;
        this.largura=largura;
        this.altura=altura;
        this.angulo=angulo;

    }
    mostrar(){
        noFill()
        image(topoImg,this.x,this.y,this.largura,this.altura)
       image(baseImg,165,140,245,150)
    }
    atirar(){
        
    }
}