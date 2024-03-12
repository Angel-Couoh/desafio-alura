let botonEncriptar = document.querySelector(".btnencriptar");
let botonDesencriptar = document.querySelector(".btndesencriptar");
let munieco = document.querySelector(".contenedormunieco");
let contenedor = document.querySelector(".contenedorparrafo");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".caja-texto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
     /* se usa la funcon replace regresa un cadena con una, algunas o todas las coincidencias encontradas, se pasa el parametro regular / -letra-/ y la letra g que indica global */
    let textoencriptado = mensaje
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    return textoencriptado;
}

function desencriptarTexto(mensaje){
    /* se usa la funcon replace regresa un cadena con una, algunas o todas las coincidencias encontradas, se pasa el parametro regular / -letra-/ y la letra g que indica global */
    let textodesencriptado = mensaje
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
    return textodesencriptado;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
// se usa para copiar el resultado 
    btnCopiar.addEventListener("click", copiar = () => {
    const contenido = document.querySelector(".texto-resultado").textContent;
   navigator.clipboard.writeText(contenido);
    
   
});