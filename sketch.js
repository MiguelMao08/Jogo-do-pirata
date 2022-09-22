const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismoFisica, world;
var solo, torre;
var fundoImg, torreImg, bolaImg;
var Bola, Bolas = [];
var Canhao;
var baseImg,topoImg;
var angulo;
var Barco, Barcos = [];


function preload(){
  fundoImg = loadImage("imagens/background.gif");
  torreImg = loadImage("imagens/tower.png");
  baseImg = loadImage("imagens/cannonBase.png");
  topoImg = loadImage("imagens/cannon.png");
  bolaImg = loadImage("imagens/cannonball.png");
}


function setup() {
  //criação da tela
  createCanvas(1200,600);
  //mecanismo de física
  mecanismoFisica = Engine.create();
  //mundo
  world = mecanismoFisica.world;

  //configuração do ângulo
  angleMode(DEGREES);
  angulo = 20;
  //opções do solo
  var opçoes = {
    isStatic: true, //solo fica parado
  }
  //criar o corpo do solo
  solo = Bodies.rectangle(width/2,height-1,width,1,opçoes);
  World.add(world,solo);

  //criar o corpo da torre
  torre = Bodies.rectangle(160,350,160,310,opçoes);
  World.add(world,torre);

  //configuração dos desenhos
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);

  //criar o canhao
  Canhao = new canhao(160,135,210,75,angulo);

 
}

function draw() 
{
  //imagem de fundo
  image(fundoImg,width/2,height/2,1200,600);

  //background("lightgray");

  //atualizar o mecanismo de física
  Engine.update(mecanismoFisica);
  
  //desenhar o solo
  rect(solo.position.x,solo.position.y,width,1);

  //desenhar a torre
  image(torreImg,torre.position.x,torre.position.y,160,310);

  //mostrar as bolas
  for (var i=0; i<Bolas.length; i++){
    mostrarBolas(Bolas[i],i);
  }
  
  //mostrar o canhão
  Canhao.mostrar();

  //mostrar barcos
  mostrarBarcos()
 

}

function keyReleased(){
  if(keyCode == RIGHT_ARROW){
  Bolas[Bolas.length-1].atirar();
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
      //criar a bola
      Bola = new bolaCanhao(Canhao.x,Canhao.y+5);
      Bolas.push(Bola);
  }
}

function mostrarBolas(bola,i){
  if(bola){
     //mostrar a bola
    bola.mostrar();
  }
}

function mostrarBarcos(){
  if(Barcos.length > 0){ //comprimento ou tamanho da matriz => não tem barco na matriz
    if(Barcos[Barcos.length-1] === undefined 
      || Barcos[Barcos.length-1].body.position.x < width-300){
        var posicoes = [-110, -190, -70, -50];
        var posicao = random(posicoes);
        Barco = new barcos(width-80,height-60,170,170,posicao);
        Barcos.push(Barco);
      }
      for(var i=0; i<Barcos.length; i++){
        if(Barcos[i]){
      Matter.Body.setVelocity(Barcos[i].body, {
        x: -2,
        y: 0,
      });
       //mostrar o barco
        Barcos[i].mostrar();
      }
    }
  }else{
     //criar o primeiro barco
  Barco = new barcos(width-80,height-60,170,170,-80);
  Barcos.push(Barco);
  }
}
