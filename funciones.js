window.sr = ScrollReveal();
  sr.reveal('#Fondo',{
  duration: 3000,
  origin: 'right',
  distance: '100px'
});



function apagar() {

document.getElementById("img").src="bombillo2.png";

}

function encender(){

document.getElementById('img').src="bombillo.png";

}




function CambiarRojo(){
document.getElementById("Fondo").style.backgroundColor="Red";
}

function Normal(){
document.getElementById("Fondo").style.backgroundColor="White";


}

function Agregar(){

var lista = document.getElementById("Lista");
var dato = document.getElementById("dato").value;
var li = document.createElement("li");
li.textContent= dato; 
lista.appendChild(li);
document.getElementById("dato").value="";
}




function Eliminar(){

    var lista = document.getElementById("Lista");
lista.removeChild(lista.lastElementChild);
document.getElementById("dato").value="";

}