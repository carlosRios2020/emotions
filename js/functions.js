
var texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const btn2 = document.getElementById('enviar-3');
const respuesta = document.getElementById('mostrar-publicacion');
const publicacion = document.getElementById('publicacion');

var ResultadoConteo;

var indices = [];
var conteo = [];
var salidas = [];
var juntarConteos = [];

var x = [], y=[];
var negativa = [];
var positiva = [];


//pesos

var Pesos = [1,1,1,1];


// valores de las emociones
const negaivo = -1;
const positivo = 1;

// tasa de aprendizaje

const tasaAprendizaje = 1;

//listeners
cargarEventlistener();

function cargarEventlistener() {

    btn.addEventListener('click', validadPalabrasPositivas);
    btn2.addEventListener('click', esPublicable);
}

//funciones


function  validadPalabrasPositivas(){

    let i,j, y;

    const textToArreglo = texto.value.split(" ");

    for(j=0; j<textToArreglo.length; j++){
        for(i=0; i<listadoEmocionesPositivas.length; i++){          
      if(textToArreglo[j] == listadoEmocionesPositivas[i]){    
          salidas.push(1); 
            
             }
      }
      
      
      for(y=0; y<listadoEmocionesNegativas.length; y++){
          if(textToArreglo[j]==listadoEmocionesNegativas[y]){
              salidas.push(-1);
          }
      }
      }
    
   
return respuesta.innerHTML = "El mensaje contiene "+ salidas;
}


function Sumar(){
    let vo =[],v;
    let contador;
    for(y=0; y< Pesos.length; y++){
        v++;
        for(v=0; v<= salidas.length; v++) {
            let result1 = Pesos[y];
            let result2 = salidas[v]
            let resultadoSuma = result1 * result2;
            vo.push(resultadoSuma)
            y++;
        }
        
    }
    
    return console.log(contador);
}





