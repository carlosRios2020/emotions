

//variables

const listadoEmociones = [
  "amor",
  "paz",
  "feliz",
  "libertad",
  "contento",
  "animado",
  "odio",
  "amoroso",
  "enojado",
  "mal",
  "infeliz",
  "molesto",
  "cansado",
  "bravo",
  "incomodo",
  "triste",
  "deprimido",
];

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

            for(j=  0; j <=listadoEmociones.length;j++){

                if(textToArreglo[i] == listadoEmociones[j]){
                    
                    var textoActual = textToArreglo[i];
                    if(textToArreglo[i] == listadoEmociones[j]){
                        salida.push(textoActual);
                    }else{
                        continue;
                    }
                    console.log("tenemos " + salida.length + " elementos iguales");

                }else{

                    console.log('no hay elementos iguales');
                }
            }
       }
    }else{
        console.log('no hay mensaje para iterar')
    } 
    return document.write("la respuesta son "+ salida + "y son " + salida.length + " elemento de su comentario");
}


