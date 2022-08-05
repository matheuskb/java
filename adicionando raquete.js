
function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento 
  && yBolinha - raio < yRaquete + raqueteAltura 
  && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

// falta ajustar a raquete oponente.


let xbolinha = 300;
let ybolinha = 200;
let dbolinha = 25;
//d bolinha é diametro
let raio = dbolinha /2;

let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

//variaveis raquete

let xraquete = 5
let yraquete = 150
let comprimentoraquete = 10
let alturaraquete = 100

//variaveis raquete inimigo

let xraqueteoponente = 585
let yraqueteoponente = 150
let comprimentoraqueteop = 10
let alturaraqueteop = 100

function setup() {
  
  createCanvas(600, 400); 
}

function draw() 
{	
	background(0);
	mostrabolinha ();
	velocidadabolinha();
	colisaodaborda();
    raquete();
    raqueteoponente();
    verificaColisaoRaquete();
    verificaColisaoRaqueteop();
    movimentaraquetecima();
    movimentaraquetebaixo();


function mostrabolinha() {
	circle (xbolinha,ybolinha,dbolinha)

}

function velocidadabolinha() {
	xbolinha += velocidadexbolinha
	ybolinha += velocidadeybolinha 

}

function colisaodaborda() {

		if (xbolinha + raio > width || 
		xbolinha - raio < 0)
		velocidadexbolinha *= -1; 
}

	if (ybolinha + raio > height || 
        ybolinha - raio < 0) 
	{

		velocidadeybolinha *= -1; 
    }
  
  function raquete() {
    
    rect(xraquete, yraquete,comprimentoraquete, alturaraquete);
  }
  
  function raqueteoponente(){
    
    rect (xraqueteoponente, yraqueteoponente, comprimentoraqueteop, alturaraqueteop);
    
  } 
    
  function verificaColisaoRaquete(){
  if (xbolinha - raio < xraquete + comprimentoraquete && 
      ybolinha - raio < yraquete + alturaraquete && 
      ybolinha + raio > yraquete){
    velocidadexbolinha *= -1;
  }
    
}
  function verificaColisaoRaqueteop(){
  if (ybolinha - raio < yraqueteoponente + comprimentoraqueteop && 
      xbolinha - raio < xraqueteoponente + alturaraqueteop && 
      xbolinha + raio > xraqueteoponente){
    velocidadexbolinha *= -1;
     }
   }
  
  function movimentaraquetecima()
  {
    if (keyIsDown(UP_ARROW)) {
      yraquete -=10;
    }
  }
  
  function movimentaraquetebaixo()
  {
    if (keyIsDown(DOWN_ARROW)) {
      yraquete +=10;
    }
}

}



