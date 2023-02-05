const textArea = document.querySelector(".txtArea");
const mensaje = document.querySelector(".txtMsj");

function btnEncriptar(){
    const txtEncriptado = encriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none";
}

function btnDesencriptar(){
    const txtEncriptado = desencriptar(textArea.value);
    mensaje.value = txtEncriptado;
    textArea.value="";
}
function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    alert("El texto se ha copiado a su portapapeles");

}

function encriptar(stringEncriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matriz[i][0], matriz[i][1])

        }

    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matriz.length; i++){
        if(stringDesencriptado.includes(matriz[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matriz[i][1], matriz[i][0])

        }

    }
    return stringDesencriptado;
}