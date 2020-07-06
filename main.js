
//variables

var texto = "";

var texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const respuesta = document.getElementById('mostrar-publicacion');
const btn2 = document.getElementById('enviar-2');
const respuesta2 = document.getElementById('mostrar-publicacion2');
var indices1 = 0;
var indices2 = 0;

//listeners
cargarEventlistener();

function cargarEventlistener() {

    btn.addEventListener('click', validarPalabrasPositivas);
    btn2.addEventListener('click', validadPalabrasNegativas);
}

//funciones


var publicacion = texto.value + ',';

function validarPalabrasPositivas() {

    let i,j;
    let salida = [];
   
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
    return respuesta.innerHTML = "la respuesta son "+ salida + "y son " + indices1 + " elemento de su comentario positivos";
}


function  validadPalabrasNegativas(){

        let i,j;
        let salida = [];
       
        const textToArreglo = texto.value.split(" ");
        
        if(textToArreglo.length > 0 || textToArreglo != undefined){
    
            for(i = 0; i <= textToArreglo.length; i++){
    
                var textoActual = textToArreglo[i];
    
                for(j=  0; j <=listadoEmocionesNegativas.length;j++){
    
                    if(textToArreglo[i] == listadoEmocionesNegativas[j]){
    
                        salida.push(textoActual);
                        indices2 = salida.length - 1;
    
                    } else {
                         continue;
                    }
                }
           }
        }else{
            console.log('no hay mensaje para iterar')
        } 
        return respuesta2.innerHTML = "la respuesta son "+ salida + "y son " + indices2 + " elemento de su comentario Negativas" + conteoEmociones(indices1, indices2);
}

function conteoEmociones(indices1, indices2){

    let publicable = false;

    if(indices1 > indices2 ){
        publicable = true;
        alert("su mensaje es positivo y se puede publicar")
    } else{
        alert("su mensaje no cumple nuestras politicas ** sea mas positiv@");
    }
    return documet.write(`su aprobacion para publicar es ${publicable}`);
}

