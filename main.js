
//variables

var texto = "";

var texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const respuesta = document.getElementById('mostrar-publicacion');

//listeners
cargarEventlistener();

function cargarEventlistener() {

    btn.addEventListener('click', traerTexto);

}

//funciones


var publicacion = texto.value + ',';

function traerTexto() {

    let i,j;
    let salida = [];
   
    const textToArreglo = texto.value.split(" ");
    
    if(textToArreglo.length > 0 || textToArreglo != undefined){

        for(i = 0; i <= textToArreglo.length; i++){

            var textoActual = textToArreglo[i];

            for(j=  0; j <=listadoEmocionesPositivas.length;j++){

                if(textToArreglo[i] == listadoEmocionesPositivas[j]){

                    salida.push(textoActual);
                    var indices = salida.length - 1;
            
                    console.log(" tenemos " + indices + " elementos iguales");

                }else{
                     continue;
                }
            }
       }
    }else{
        console.log('no hay mensaje para iterar')
    } 
    return document.write("la respuesta son "+ salida + "y son " + indices + " elemento de su comentario positivos");
}


