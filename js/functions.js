
var texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const btn2 = document.getElementById('enviar-2');
const btn3 = document.getElementById('enviar-3');
const respuesta = document.getElementById('mostrar-publicacion');
const respuesta2 = document.getElementById('mostrar-publicacion2');

var indices1 = 0;
var indices2 = 0;

//listeners
cargarEventlistener();

function cargarEventlistener() {

    btn.addEventListener('click', validarPalabrasPositivas);
    btn2.addEventListener('click', validadPalabrasNegativas);
    btn3.addEventListener('click', esPublicable);
}

//funciones


var publicacion = texto.value + ',';

function validarPalabrasPositivas() {

    let i,j;
    var salida = [];
   
    const textToArreglo = texto.value.split(" ");
    
    if(textToArreglo.length > 0 || textToArreglo != undefined){

        for(i = 0; i <= textToArreglo.length; i++){

            var textoActual = textToArreglo[i];

            for(j=  0; j <=listadoEmocionesPositivas.length;j++){

                if(textToArreglo[i] == listadoEmocionesPositivas[j]){

                    salida.push(textoActual);
                    indices1 = salida.length - 1;

                } else {
                     continue;
                }
            }
       }
    }else{
        console.log('no hay mensaje para iterar')
    } 
    return respuesta.innerHTML = "El mensaje contiene "+ salida + "y son " + indices1 + " elemento de su comentario positivos";
}


function  validadPalabrasNegativas(){

        let i,j;
        var salida2 = [];
       
        const textToArreglo = texto.value.split(" ");
        
        if(textToArreglo.length > 0 || textToArreglo != undefined){
    
            for(i = 0; i <= textToArreglo.length; i++){
    
                var textoActual = textToArreglo[i];
    
                for(j=  0; j <=listadoEmocionesNegativas.length;j++){
    
                    if(textToArreglo[i] == listadoEmocionesNegativas[j]){
    
                        salida2.push(textoActual);
                        indices2 = salida2.length - 1;
    
                    } else {
                         continue;
                    }
                }
           }
        } else {

            console.log('no hay mensaje para iterar')
        } 

    return respuesta2.innerHTML = "El mensaje contiene "+ salida2 + "y son " + indices2 + " elemento de su comentario Negativas";
}
