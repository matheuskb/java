//Naruto
let xNaruto = 430;
let yNaruto = 640;
let larguraNaruto = 55;
let diametroNaruto = 55;
let Colisao = false;

function mostraNaruto()
{
  
  image(imagemDoNaruto, xNaruto, yNaruto, larguraNaruto, diametroNaruto);
  
  }

function movimentaNaruto()

{
    if (keyIsDown(UP_ARROW)){
    yNaruto -= 6;
  }
  if (keyIsDown(DOWN_ARROW)){
    yNaruto += 6;
  }

function verificaColisao()
{
  
  for (let i = 0; i< mostraCarro1.length; i = i + 1)
    
    {
      Colisao = collideRectcircle(xCarro [1], yCarro[1], 50, 40, xNaruto,yNaruto, 40)
      if (Colisao)
        
      {
       print ("colidiu"); 
      }
    }
}
  
}