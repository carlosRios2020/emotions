

function esPublicable(){

    validadPalabrasNegativas();
    validadPalabrasNegativas()
    
    let exPublicable = false;

    if( indices1 > indices2 && texto.value != undefined ){
        exPublicable = true;
        document.write("su mensaje es publicable");

    } else {
        document.write('no se puede publicar su mensaje')
    }
    
    return exPublicable;

}

