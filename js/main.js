

function esPublicable(){

    Sumar()

    let exPublicable = false;

    if( positiva.length > negativa.length && texto.value != undefined ){

        exPublicable = true;

        publicacion.innerHTML = "Se puede publicar su mensaje " + " salida de la Neurona es igual a";

    } else {
      
        publicacion.innerHTML = "no se puede publicar su mensaje " + " salida de la Neurona es igual a -1";
     
    }
    
    return exPublicable;

}

