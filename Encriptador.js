const d = document;
const textArea = d.querySelector(".form_input");
const imagenMuneco = d.querySelector(".resultado__img");
const loaderOjos = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".resultado__titulo");
const resultadoTexto = d.querySelector(".resultado__texto");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".resultado__btn");

const llaves = [
    ["e", "enter"], 
    ["i", "imes"], 
    ["a", "ai"], 
    ["o", "ober"], 
    ["u", "ufat"], 
];
// Funcion para encriptar
function encriptarMensaje(mensaje){
        let mensajeEncriptado = "";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje [i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++ ){
            if (letra === llaves [j][0]) {
                encriptada = llaves [j][1]; // Reemplaza la letra por su equivalente encriptado
            break; // Termina el bucle cuando encuentra la correspondencia
        }
            }
            mensajeEncriptado += encriptada;
    }

    return mensajeEncriptado;
}
// Funcion para desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje; 
    for (let i = 0; i < llaves.length; i++ ){
        let regex = new RegExp(llaves[i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves [i][0]);
    }
    return mensajeDesencriptado;
}
//Ocultar elementos dinamicamente
textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = 'none';
    loaderOjos.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje.";
    resultadoTexto.textContent = "";
})
//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
})
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
})
botonCopiar.addEventListener("click", ()=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imagenMuneco.style.display = "block";
        loaderOjos.classList.add("hidden");
        resultadoTitulo.textContent = "El texto se copió";
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent = "";

    })
    
});