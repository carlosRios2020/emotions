

function esPublicable(){

    Sumar();
    salidasEsperadas()
    error();    

    let exPublicable = false;
    // funcion escalon o umbral 
    if( contador >= 0 && texto.value != undefined ){
        publicacion.innerHTML = "Se puede publicar su mensaje " + " salida de la Neurona es igual a "+ salidaReal + " iteraciones " + iteracion;
    } else if(contador < 0) {
      publicacion.innerHTML = "no se puede publicar su mensaje " + " salida de la Neurona es " + salidaReal + " iteraciones " + iteracion;
    }
    
    return exPublicable;
}

