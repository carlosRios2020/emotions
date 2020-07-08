
var texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const btn2 = document.getElementById('enviar-2');
const btn3 = document.getElementById('enviar-3');
const respuesta = document.getElementById('mostrar-publicacion');
const respuesta2 = document.getElementById('mostrar-publicacion2');
const publicacion = document.getElementById('publicacion');

var ResultadoConteo;

var indices1 = [];
var indices2 = [];
var salida2 = [];
var salida = [];
var juntarConteos = [];


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

    btn.addEventListener('click', validarPalabrasPositivas);
    btn2.addEventListener('click', validadPalabrasNegativas);
    btn3.addEventListener('click', esPublicable);
}

//funciones

function validarPalabrasPositivas() {

    let i,j, x;
    
    const textToArreglo = texto.value.split(" ");
    
    if( textToArreglo.length > 0 || textToArreglo != undefined ){

        for( i = 0; i <= textToArreglo.length; i++ ){

            
            for( j=  0; j <= listadoEmocionesPositivas.length; j++ ){
                
                var textoActual = textToArreglo[i];

                if( textoActual == listadoEmocionesPositivas[j]){

                  for( x = 0; x >= salida.length;  x++){
                        salida.push(salida[x]= 1);
                        juntarConteos.push(salida);
                  };
                      
                } else {

                     continue;
                }
            }
       }
    }else{
        console.log('no hay mensaje para iterar');
    } 
    return respuesta.innerHTML = "El mensaje contiene "+ juntarConteos + "y son " + indices1 + " elemento de su comentario positivos";
}


function  validadPalabrasNegativas(){

        let i,j;
    
        const textToArreglo = texto.value.split(" ");
        
        if(textToArreglo.length > 0 || textToArreglo != undefined){
    
            for(i = 0; i <= textToArreglo.length; i++){
    
                for(j=  0; j <=listadoEmocionesNegativas.length;j++){
                    
                    var textoActual = textToArreglo[i];
    
                    if( textoActual == listadoEmocionesNegativas[j]){
    
                        for( x = 0; x >= salida2.length;  x++){
                            salida2.push(salida2[x]= -1);
                            juntarConteos = salida.concat(salida2);
                        };

                    } else {

                         continue;
                    }

                    if(indices2 > 2 ){

                        ResultadoConteo = 1;

                    }if(indices2 <= 2){

                        ResultadoConteo = -1;
                    }
                }
           }
        } else {

            console.log('no hay mensaje para iterar');
        } 

    return respuesta2.innerHTML = "El mensaje contiene "+ salida2 + "y son " + indices2 + " elemento de su comentario Negativas";
}

function Sumar(){
    let y,v;
    let vo =[];
    for(y=0; y>= Pesos.length; y++){
        for(v=0; v>= juntarConteos.length; v++) {
            vo = peso[v] * juntarConteos[y];
        }
    }
    return console.log(vo);
}

