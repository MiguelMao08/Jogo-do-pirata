class canhao{
    constructor(x,y,largura,altura,angulo){
        this.x=x;
        this.y=y;
        this.largura=largura;
        this.altura=altura;
        this.angulo=angulo;

    }
    mostrar(){
        noFill();
        if(keyIsDown(UP_ARROW)&&this.angulo>-50){
            this.angulo -= 1;
        }
        if(keyIsDown(DOWN_ARROW)&&this.angulo<30){
            this.angulo += 1;
        }
        push();
        translate(this.x,this.y);
        rotate(this.angulo);
        image(topoImg,0,0,this.largura,this.altura);
        pop();
        image(baseImg,165,140,245,150);
    }
   
}