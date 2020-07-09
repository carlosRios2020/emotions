

function esPublicable(){

    Sumar();

    let exPublicable = false;
    // funcion escalon o umbral 
    if( contador >= 0 && texto.value != undefined ){
        publicacion.innerHTML = "Se puede publicar su mensaje " + " salida de la Neurona es igual a " + contador;
    } else if(contador < 0) {
      publicacion.innerHTML = "no se puede publicar su mensaje " + " salida de la Neurona es igual a " + contador;
    }else{
        publicacion.innerHTML = " La neurona no aprendio ";
    }
    
    return exPublicable;
}

