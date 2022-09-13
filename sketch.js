const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismoFisica, world;
var solo, torre;
var fundoImg, torreImg;

var Canhao;
var baseImg,topoImg;
function preload(){
  fundoImg = loadImage("imagens/background.gif");
  torreImg = loadImage("imagens/tower.png");
  baseImg = loadImage("imagens/cannonBase.png")
  topoImg = loadImage("imagens/cannon.png")
}


function setup() {
  //criação da tela
  createCanvas(1200,600);
  //mecanismo de física
  mecanismoFisica = Engine.create();
  //mundo
  world = mecanismoFisica.world;
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
  Canhao = new canhao(160,125,160,50,20);
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

  Canhao.mostrar()  



  
  
}

