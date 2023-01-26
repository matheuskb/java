//Lista Carro
let yCarro = [69,260,460];
let xCarro = [900,900,900,900];
let larguraCarro = [70,70,70,70];
let diametroCarro = [70,70,70,70];

function mostraCarro1() 
{
  image(imagemCarro1, xCarro[0], yCarro[0], larguraCarro[0], diametroCarro[0]);
  image(imagemCarro2, xCarro[1], yCarro[1], larguraCarro[1], diametroCarro[1]);
  image(imagemCarro3, xCarro[2], yCarro[2], larguraCarro[2], diametroCarro[2]);
}

function movimentaCarro1()
{
  
  xCarro[0] -=15
  xCarro[1] -=12
  xCarro[2] -=20
}

function voltaPosicaoinicialDoCarro1()
{
  if (xCarro[0] < -60)
    {
      xCarro[0] = 900
    }
  
}

function voltaPosicaoinicialDoCarro2()
{
 if (xCarro[1]< -60)
    {
      xCarro[1] = 900
    }
  
}

function voltaPosicaoinicialDoCarro3()
{
  if (xCarro[2]< -60)
    {
      xCarro[2] = 900
    }
  
}
