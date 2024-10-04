//tipos;
// aventura, terror, infantil, ação 

//Nomes de filmes
// need for Speed: 14, ação
// Divertidamente: livre, infantil
// Sobrenatural: 12, terror
// Guardiões da Galáxia:14, aventura
// Spider-Man: 12, aventura

function setup() {
  
  createCanvas(400, 400);
    
  }
  
  function draw() {
    background(220);
    let idade= 15;
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width / 2, height / 2);
  }  
  
  function geraRecomendacao(idade) {
    if(idade >= 10) {
      return "Spider-Man"
    } else {    
      return "Divertidamente"
    }
  }  
   