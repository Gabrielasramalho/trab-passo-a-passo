//criar uma função( função=comando) (escuScroll)
function escutaRolagem () { 

 
 let gatilhos = document.querySelectorAll('.gatilhos > div'); 
 // p/ cada gatilho da gatilho da lista de gatinhos faça o que estiver dentro da {}

 

 for(let gatilho of gatilhos){   

     // aqui vai gerar um retangulo com a altura e largura do elemento e posição x e y (n   entendi o getBoundingClientRect e gatilho.dataSet.alvo )??
     let posicao = gatilho.getBoundingClientRect();
     // criou variavel 
      let alvo = gatilho.dataset.alvo; 
       let passo = document.querySelector('.'+alvo);
          // aqui eu estou pedindo para verificar se chegou a posição 0 e quando passar a tela some
   if(posicao.top <=0 && posicao.top > -posicao.height)
   
   { passo.classList.add('passo-ativo');
   }
   else{
      passo.classList.remove( 'passo-ativo');
   }
  }
}

//criar comando para escutar o evendo de scroll e quando escutar a rolagem executa a função (escutaScroll)

window.addEventListener('scroll', escutaRolagem);