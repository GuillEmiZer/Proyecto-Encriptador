const TextoUsuario = document.querySelector(".input-texto");
const TextoUsuariofinal = document.querySelector(".output-texto");


function BtnEncriptar(){
    const TextoUsuario = document.querySelector(".input-texto");
    const TextoUsuariofinal = document.querySelector(".output-texto");
    const TextoEncrip = encriptar(TextoUsuario.value);
    
    TextoUsuariofinal.value = TextoEncrip;
    TextoUsuariofinal.style.backgroundImage = "none";
    TextoUsuario.value = "";
 
}

function encriptar(TextoEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    TextoEncriptado = TextoEncriptado.toLowerCase();
    
    for (let i = 0 ; i < matrizCodigo.length; i++){
        if (TextoEncriptado.includes(matrizCodigo[i][0])){
            TextoEncriptado = TextoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }

    return TextoEncriptado;

}


function BtnDesencriptar(){
    const TextoUsuario = document.querySelector(".input-texto");
    const TextoUsuariofinal = document.querySelector(".output-texto");
    const TextoDesencrip = Desencriptar(TextoUsuario.value);

    TextoUsuariofinal.value = TextoDesencrip;
    TextoUsuariofinal.style.backgroundImage = "none";
    TextoUsuario.value = "";
 
}

function Desencriptar(TextoDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
    TextoDesencriptado = TextoDesencriptado.toLowerCase();
    
    for (let i = 0 ; i < matrizCodigo.length; i++){
        if (TextoDesencriptado.includes(matrizCodigo[i][1])){
            TextoDesencriptado = TextoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }

    return TextoDesencriptado;

}


function copiar(){
    const TextoUsuariofinal = document.querySelector(".output-texto");

    TextoUsuariofinal.select();
    navigator.clipboard.writeText(TextoUsuariofinal.value);
    TextoUsuariofinal.value = "¡TEXTO COPIADO!";
    TextoUsuariofinal.style.textAlign = "Center";

}

