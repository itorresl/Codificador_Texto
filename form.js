function validar(e){
    key=e.keyCode || e.which;
    tecla=String.fromCharCode(key).toString();
    letras="abcdefghijklmnñopqrstuvwxyzáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕ";
    
    tecla_espacio=false
    especial=32;
    if(key==especial){
        tecla_espacio=true;
    }
    if(letras.indexOf(tecla)==-1 && !tecla_espacio){
        alert("NO se aceptan numeros ni mayusculas en el mensaje")
        return false 
    }
}

var botonEncriptar=document.querySelector("#encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    encriptar(mensaje);
    
});

var botonDesencriptar=document.querySelector("#desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    desencriptar(mensaje);
    
});



function encriptar(){
    var j=0;
    var ValorEntero=0;
    MensajeEncriptado = "";
    texto=document.getElementById('mensaje').value;
    for (i= 0; i< texto.length; i=i+1)
    {
        j=i+1;
        ValorEntero = (texto.substring(i,j)).charCodeAt(0)+10;
        MensajeEncriptado = MensajeEncriptado + String.fromCharCode(ValorEntero);
    }		
    document.getElementById('mensaje').value="";
    document.getElementById('codificado').value=MensajeEncriptado;		
}  



function desencriptar(){
    var j=0;
    var ValorEntero=0;
    MensajeEncriptado = "";
    texto=document.getElementById('mensaje').value;
    for (i= 0; i< texto.length; i=i+1)
    {
        j=i+1;
        ValorEntero = (texto.substring(i,j)).charCodeAt(0)-10;
        MensajeEncriptado = MensajeEncriptado + String.fromCharCode(ValorEntero);
    }		
    document.getElementById('mensaje').value="";
    document.getElementById('codificado').value=MensajeEncriptado;		

}

function copy() {
    event.preventDefault();
    var copyText = document.querySelector("#codificado");
    copyText.select();
    document.execCommand("copy")
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
  
  