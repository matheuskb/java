melhorando codigo com funcion

podemos utlizar funcion para melhorar o codigo

// parametros da bola
Let xBOLINHA = 100;
Let yBOLINHA = 50;
Let dBOLINHA = 50;
Let raio = dbolinha / 2 

// velocidade da borda
lET VELOCIDADExBOLINHA = 6;
lET VELOCIDADEyBOLINHA = 6;

funcion draw() 
{	
	backgrund (0);
	mostralinha ();
	velocidadabolinha();
	colisaodaborda ();


funcion mostralinha() {
	circle (xBOLINHA,yBOLINHA,dBOLINHA)

}

funcio velocidadabolinha() {
	xBOLINHA += VELOCIDADExBOLINHA
	yBOLINHA += VELOCIDADEyBOLINHA 

}

funcion verifica colisaodaborda() {

		if (xbolinha + raio >Width || 
		xbolinha - raio < 0)
		velocidadexbolinha *= -1; 
}

	if (ybolinha + raio > Height
		|| ybolinha - raio < 0) 
	{

		velocidadeybolinha *= -1; 
	}
}


