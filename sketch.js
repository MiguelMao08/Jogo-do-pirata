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
var barcoAnimacao = [];
var barcoSpritedata, barcoSpritesheet;


function preload(){
  fundoImg = loadImage("imagens/background.gif");
  torreImg = loadImage("imagens/tower.png");
  baseImg = loadImage("imagens/cannonBase.png");
  topoImg = loadImage("imagens/cannon.png");
  bolaImg = loadImage("imagens/cannonball.png");
  barcoSpritedata = loadJSON("imagens/boat/boat.json");
  barcoSpritesheet = loadImage("imagens/boat/boat.png");
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

  //animação do barco
  var barcoFrames = barcoSpritedata.frames;
  for (var i=0; i<barcoFrames.length;i++){
    var pos = barcoFrames[i].position;
    var img = barcoSpritesheet.get(pos.x,pos.y,pos.w,pos.h);
    barcoAnimacao.push(img);
  }
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
    //mostrar as bolas/balas
    mostrarBolas(Bolas[i],i);
    //detectar a colisao com cada bola
    colisaoBalaBarco(i);
  }
  
  //mostrar o canhão
  Canhao.mostrar();

  //mostrar barcos
  mostrarBarcos();
 

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
        var posicoes = [-90, -50, -70, -20];
        var posicao = random(posicoes);
        //cria os demais barcos, depois do primeiro
        Barco = new barcos(width-80,height-60,170,170,posicao, barcoAnimacao);
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
        //mostrar animação
        Barcos[i].animate();
      }
    }
  }else{
     //criar o primeiro barco
  Barco = new barcos(width-80,height-60,170,170,-80,barcoAnimacao);
  Barcos.push(Barco);
  }
}

//detecção de colisão
function colisaoBalaBarco(index){
  for(var i=0 ; i<Barcos.length;i++){
    if(Bolas[index] !== undefined && Barcos[i] !== undefined){
      var collision = Matter.SAT.collides(Bolas[index].body,Barcos[i].body);

      if(collision.collided){
        Matter.World.remove(world,Bolas[index].body); //remove do mundo
        delete Bolas[index]; //remove da matriz

       Barcos[i].remover(i);
       
      }
    }
  }
}
