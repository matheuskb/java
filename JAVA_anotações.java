
* para criar variavel em java 
 
LET

Let xBOLINHA = 100;
Let yBOLINHA = 50;
Let dBOLINHA = 50;

funcion draw() {
	
	backgrund (0);
	circle (xBOLINHA,yBOLINHA,dBOLINHA);

}

*D = diametro, que é 2X o raio. (raio e a distancia do cetro da bolinha até a lateral)

* if = se -> variavel
* width -> largura X.
* Height -> altura Y.
* -> sinal de maior

> Maior que o operador
>> Deslocamento para a direita
>= Operador maior ou igual
<     Operador menor que
<>, != Operador não igual
<<    Desvio à esquerda
<= Operador menor ou igual
<=>   NULL-safe igual ao operador
* Operador de multiplicação
/     Operador de divisão
DIV   Divisão inteira


if (xbolinha > widtch)

---------------

Let xBOLINHA = 100;
Let yBOLINHA = 50;
Let dBOLINHA = 50;

lET VELOCIDADExBOLINHA = 6;
lET VELOCIDADEyBOLINHA = 6;

funcion draw() {
	
	backgrund (0);
	circle (xBOLINHA,yBOLINHA,dBOLINHA);
	xBOLINHA += VELOCIDADExBOLINHA
	//xBOLINHA += VELOCIDADExBOLINHA 

	if (xbolinha > Width);

}

//Qual a função do Draw?

		/*O que a função draw faz é renderizar os elementos na tela, 	
		basciamente ela executar o código que está dentro dela infinitamente e uma quantidade específica de vezes, 
		até que haja uma instrução que faça o programa parar.*/

Let xBOLINHA = 100;
Let yBOLINHA = 50;
Let dBOLINHA = 50;

lET VELOCIDADExBOLINHA = 6;
lET VELOCIDADEyBOLINHA = 6;

funcion draw() {
	
	backgrund (0);
	circle (xBOLINHA,yBOLINHA,dBOLINHA);
	xBOLINHA += VELOCIDADExBOLINHA
	//xBOLINHA += VELOCIDADExBOLINHA 

	if (xbolinha > Width || 
		xbolinha < 0) {
		velocidadexbolinha *= -1; 
	}

* || -> significa "OU" No java script 

Let xBOLINHA = 100;
Let yBOLINHA = 50;
Let dBOLINHA = 50;
Let raio = dbolinha / 2 

lET VELOCIDADExBOLINHA = 6;
lET VELOCIDADEyBOLINHA = 6;

funcion draw() {
	
	backgrund (0);
	circle (xBOLINHA,yBOLINHA,dBOLINHA);
	xBOLINHA += VELOCIDADExBOLINHA
	yBOLINHA += VELOCIDADEyBOLINHA 

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






