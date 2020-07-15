
var texto = document.getElementById('texto');
const btn = document.getElementById('enviar');
const btn2 = document.getElementById('enviar-3');
const respuesta = document.getElementById('mostrar-publicacion');
const publicacion = document.getElementById('publicacion');

var contador = 0;
var salidas = [];
var negativos;
var positivos;
var salidaExperada;
var diferencia;
var entrada = [];
var salidaReal;


//pesos
var Pesos = [0, 0, 0, 0];


// valores de las emociones
const negativo = -1;
const positivo = 1;

// tasa de aprendizaje
const tasaAprendizaje = 1;


//listeners
cargarEventlistener();

function cargarEventlistener() {

    btn.addEventListener('click', validarEmociones);
    btn2.addEventListener('click', esPublicable);
}

//funciones


    function validarEmociones(){

        let i, j, y;
        entrada = texto.value.split(" ");

        if ( entrada.length < 4 ||entrada.length >4 ) {
            alert("lo siento debes escribir 4 palabras");
        } else {

        for (j = 0; j < entrada.length; j++) {

            for (i = 0; i < listadoEmocionesPositivas.length; i++) {
                if (entrada[j] == listadoEmocionesPositivas[i]) {
                    salidas.push(1);
                    positivos = salidas + 1;
                }
            }

            for (y = 0; y < listadoEmocionesNegativas.length; y++) {
                if (entrada[j] == listadoEmocionesNegativas[y]) {
                    salidas.push(-1);
                    negativos = salidas + 1;
                }
            }
        }

        return respuesta.innerHTML = "El mensaje contiene " + salidas;
    }
}


function Sumar(){

    let vo = [], v;
    for (y = 0; y < Pesos.length; y++) {
        v++;
        for (v = 0; v < salidas.length; v++) {
            let result1 = Pesos[y];
            let result2 = salidas[v]
            let resultadoSuma = result1 * result2;
            contador = contador + resultadoSuma;
            vo.push(resultadoSuma);
            y++;
        }
    }

    if(contador <0){
        salidaReal = -1;
    }else{
        salidaReal = 1;
    }

    salidasEsperadas();
    return error();
}


function salidasEsperadas(){

    if (salidas[0] + salidas[1] + salidas[2] + salidas[3]  > 0){
        salidaExperada = 1;
    } else if (salidas[0] + salidas[1] + salidas[2] + salidas[3] <=0) {

        salidaExperada = -1;
    }
}

function error(){

    diferencia = salidaExperada - salidaReal;

    if (diferencia != 0) {
        console.log("funcion error es igual " + diferencia + " Recalculando pesos sinapticos...");
        recalcularPesos();
    } else {
        console.log("No es necesario aprendizaje - la Neurona Aprendio");
        console.log("funcion error es igual " + diferencia + " nuevos pesos " + Pesos);
    }
}


function recalcularPesos(){

    //ajuste de pesos sinapticos 
    let wo11 = (tasaAprendizaje * diferencia) * salidas[0];
    let wo21 = (tasaAprendizaje * diferencia) * salidas[1];
    let wo31 = (tasaAprendizaje * diferencia) * salidas[2];
    let wo41 = (tasaAprendizaje * diferencia) * salidas[3];

    // calculando nuevos pesos sinapticos
    let wo12 = Pesos[0] + wo11;
    let wo22 = Pesos[1] + wo21;
    let wo32 = Pesos[2] + wo31;
    let wo42 = Pesos[3] + wo41;

    //nuevos pesos 

    Pesos[0] = wo12
    Pesos[1] = wo22;
    Pesos[2] = wo32;
    Pesos[3] = wo42;
 
    publicacion.innerHTML =  "los pesos cambiados son " + Pesos;

    if (Pesos[0] != undefined) {
        return Sumar();
    }
}   