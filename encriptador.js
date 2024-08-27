/*accion a realizar al precionar el boton de encriptar*/
function encriptarBtn(){
    let solicitudDeUsuario = document.getElementById("entrada").value;
    let textoEncriptado = encriptar(solicitudDeUsuario);
    console.log("este es otro" + textoEncriptado)
    let resultado = document.getElementById("salida");
    if (textoEncriptado.value = undefined) {
        return resultado.style.backgroundImage
    }
    resultado.style.backgroundImage = "none"
    resultado.value = textoEncriptado;
    document.getElementById("entrada").value="";
    
}

/*Funcion que realiza el encriptado del texto introducido*/
function encriptar(texto){
    let comprueba=/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/ /*expresion regular que devuelve false por caracteres especiales y tildes*/
    if(texto!==texto.toLowerCase()) return alert("Solo se aceptan frases en minusculas")
    if(comprueba.test(texto)==0) return alert("No se aceptan caracteres especiales,tildes y valores nulos")
    let  cifrado={a:"basti",e :"lantern",i:"wing",o:"oracle",u : "umbrella"}
    let busqueda =new RegExp(Object.keys(cifrado).join("|"),"gi");
    texto = texto.replace(busqueda,function(match){
        return cifrado[match];
    })
    console.log("esta es" + texto)
    return texto
}

/*accion a realizar al precionar el boton de desencriptar*/
function desencriptarBtn(){
    let solicitudDeUsuario = document.getElementById("entrada").value;
    let textoEncriptado = desencriptar(solicitudDeUsuario);
    console.log("este es otro" + textoEncriptado)
    let resultado = document.getElementById("salida");
    if (textoEncriptado.value = undefined) {
        return resultado.style.backgroundImage
    }
    resultado.style.backgroundImage = "none"
    resultado.value = textoEncriptado;
    document.getElementById("entrada").value="";
}

/*Funcion que realiza el desencriptado del texto introducido*/
function desencriptar(texto){
    let comprueba=/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/ /*cexpresion regular que devuelve false por caracteres especiales y tildes*/
    if(texto!==texto.toLowerCase()) return alert("Solo se aceptan frases en minusculas")
    if(comprueba.test(texto)==0) return alert("No se aceptan caracteres especiales,tildes y valores nulos")
    let  cifrado={basti:"a",lantern :"e",wing:"i",oracle:"o",umbrella : "u"}
    let busqueda =new RegExp(Object.keys(cifrado).join("|"),"gi");
    texto = texto.replace(busqueda,function(match){
        return cifrado[match];
    })
    return texto
}

/*accion a realizar al precionar el boton de copiar*/
function copiar(){
    let resultado = document.getElementById("salida");
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
    resultado.value = "";
    
}


