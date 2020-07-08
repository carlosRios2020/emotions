

function esPublicable(){

    validadPalabrasNegativas();
    validadPalabrasNegativas();
    
    
    let exPublicable = false;
    
    if( indices1 > indices2 && texto.value != undefined ){

        exPublicable = true;

        publicacion.innerHTML = "Se puede publicar su mensaje " + " salida de la Neurona es igual a "+ ResultadoConteo;

    } else {
      
        publicacion.innerHTML = "no se puede publicar su mensaje " + " salida de la Neurona es igual a "+ ResultadoConteo;
     
    }
    
    return exPublicable;

}

