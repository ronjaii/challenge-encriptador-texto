/*ELEMENTOS*/
const btnEncriptar = document.querySelector(".boton-encriptar");
const txtEncriptar = document.querySelector(".ingresar-texto");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".mostrar-texto");
const contenido = document.querySelector(".componentes-espacio-dos");
const btnCopiar = document.querySelector(".boton-copiar");
const btnDesencriptar = document.querySelector(".boton-desencriptar");
area = document.getElementById("txtArea");

/*BOTON ENCRIPTAR*/
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    
    if(texto == ""){
        aviso.style.color = "#041c3b";
        aviso.style.fontwight = "900";
        aviso.textContent = "El cuadro de texto no debe estar vacío";        
        setTimeout(()=>{aviso.removeAttribute("style")},1800);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.color = "#041c3b";
        aviso.style.fontwight = "900";
        aviso.textContent = "El texto debe ser todo en minúscula";        
        setTimeout(()=>{aviso.removeAttribute("style")},1800);
        area.value = ""; /*Limpia el cajon de texto*/
        area.focus();
    }
    else{     
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
})

/*BOTON DESENCRIPTAR*/
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    
    if(texto == ""){
        aviso.style.color = "#041c3b";
        aviso.style.fontwight = "900";
        aviso.textContent = "El cuadro de texto no debe estar vacío";        
        setTimeout(()=>{aviso.removeAttribute("style")},1800);
    }
    else if(texto !== texto.toLowerCase()){
        aviso.style.color = "#041c3b";
        aviso.style.fontwight = "900";
        aviso.textContent = "El texto debe ser todo en minúscula";        
        setTimeout(()=>{aviso.removeAttribute("style")},1800);
        area.value = ""; /*Limpia el cajon de texto*/
        area.focus();
    }
    else{                    
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();            
    }
})

/*BOTON COPIAR*/
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
    area.value = ""; /*Limpia el cajon de texto*/
    area.focus();
});
