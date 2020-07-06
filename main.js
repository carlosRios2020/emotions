
"use estrict"

//variables

const listadoEmociones = [
  "amor",
  "paz",
  "feliz",
  "libertad",
  "contento",
  "animado",
  "feliz",
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

publicacion = false;

const texto  = document.getElementById('texto');
const btn = document.getElementById('enviar');
const respuesta = document.getElementById('mostrar-publicacion');

//listeners
cargarEventlistener();

function cargarEventlistener() {

    btn.addEventListener('click', traerTexto);

}


//funciones


function traerTexto() {
    let i,j;
    let salida = 0;
    const textToArreglo = [texto.value];
    
    if(textToArreglo.length > 0 || textToArreglo != undefined){

        for(i = 0; i <= listadoEmociones.length; i++){

            for(j=  0; j <=textToArreglo.length;j++){

                if(textToArreglo[i] == listadoEmociones[j]){
                     salida = salida + 1
                    console.log("tenemos " + listadoEmociones[j] +" elementos iguales");
                }else{
                    console.log('no hay elementos iguales');
                }
            }
       }
    }else{
        console.log('no hay mensaje para iterar')
    } 
    return console.log("la respuesta son "+ salida);
}


