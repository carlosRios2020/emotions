
var texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const btn2 = document.getElementById('enviar-3');
const respuesta = document.getElementById('mostrar-publicacion');
const publicacion = document.getElementById('publicacion');

var ResultadoConteo;

var indices = [];
var conteo = [];
var salida = [];
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

    let i,j;

    const textToArreglo = texto.value.split(" ");
    
    if(textToArreglo.length > 0 || textToArreglo != undefined){

        for(i = 0; i <= textToArreglo.length; i++){

            for(j=  0; j<= listadoEmocionesPositivas.length;j++){

                if( textToArreglo[i] == listadoEmocionesPositivas[j]){

                    salida.push(textToArreglo[i]);
                    positiva.push(textToArreglo[i]);
                    console.log(salida)

                } else if( textToArreglo[i] == listadoEmocionesNegativas[j]) {

                    salida.push(textToArreglo[i]);
                    negativa.push(textToArreglo[i]);
                    console.log(salida)

                    continue;
                        
                }else{

                    console.log("palabra nueva, no aprendio la neurona");
                }
            }
        }

    }
return respuesta.innerHTML = "El mensaje contiene "+ salida;
}


function Sumar(){
    let y,v;
    let vo =[];
    for(y=0; y>= Pesos.length; y++){
        for(v=0; v>= juntarConteos.length; v++) {
            vo = peso[v] * salida[y];
        }
    }
    return console.log(vo);
}
function setValores(){

    if(salida.length != 0){
        positiva.forEach(element => {
               y.push(element = 1)
               console.log(y)
        });
        negativa.forEach(itemt =>{
              x.push(item = -1);
              console.log(x)
        })
    }
    return x,y;

}



