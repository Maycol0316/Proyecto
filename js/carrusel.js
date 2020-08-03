const descripcion = document.getElementById("descripcion");
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");
const imagen3 = document.getElementById("imagen3");
const imagen4 = document.getElementById("imagen4");
const imagen5 = document.getElementById("imagen5");
const imagen6 = document.getElementById("imagen6");
const imagen7 = document.getElementById("imagen7");
const imagen8 = document.getElementById("imagen8");
const imagen9 = document.getElementById("imagen9");

const descripciones = [
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>", 
    "<div>¿Sufres de dolores en tu Túnel Carpiano?  <br> <span>Nosotros te ayudamos<span></div>"
]

imagen1.addEventListener("mouseover", escribirDescripcion1);
imagen2.addEventListener("mouseover", escribirDescripcion2);
imagen3.addEventListener("mouseover", escribirDescripcion3);
imagen4.addEventListener("mouseover", escribirDescripcion4);
imagen5.addEventListener("mouseover", escribirDescripcion5);
imagen6.addEventListener("mouseover", escribirDescripcion6);
imagen7.addEventListener("mouseover", escribirDescripcion7);
imagen8.addEventListener("mouseover", escribirDescripcion8);
imagen9.addEventListener("mouseover", escribirDescripcion9);
imagen1.addEventListener("mouseleave", borrarDescripcion);
imagen2.addEventListener("mouseleave", borrarDescripcion);
imagen3.addEventListener("mouseleave", borrarDescripcion);
imagen4.addEventListener("mouseleave", borrarDescripcion);
imagen5.addEventListener("mouseleave", borrarDescripcion);
imagen6.addEventListener("mouseleave", borrarDescripcion);
imagen7.addEventListener("mouseleave", borrarDescripcion);
imagen8.addEventListener("mouseleave", borrarDescripcion);
imagen9.addEventListener("mouseleave", borrarDescripcion);

function escribirDescripcion1(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Dolor de Rodilla?  </div><div class="consejo">Contáctanos para ayudarte!</div>';
}
function escribirDescripcion2(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Fuertes Dolores de Cuello?  </div><div class="consejo">Contáctanos para solicitar una cita con nosotros</div>';
}
function escribirDescripcion3(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Dolores en la Columna?  </div><div class="consejo">Nosotros te ayudamos</div>';
}
function escribirDescripcion4(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Escoliosis, Cifosis, e Hiperlordosis?  </div><div class="consejo">Nosotros te ayudamos</div>';
}
function escribirDescripcion5(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Dolor de Cabeza y Migraña?  </div><div class="consejo">Contáctanos y agenda tu cita ahora!</div>';
}
function escribirDescripcion6(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Dolores en tus Músculos, Articulaciones, Ligamentos o Tendones?  </div><div class="consejo">Nosotros te podemos ayudar!</div>';
}
function escribirDescripcion7(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Dolores en tu Túnel Carpiano?  </div><div class="consejo">Nosotros te ayudamos</div>';
}
function escribirDescripcion8(){
    descripcion.innerHTML = '<div class="malestar">¿Tienes Dolores en las Articulaciones Superiores?  </div><div class="consejo">Te estamos esperando, Agenda una cita!</div>';
}
function escribirDescripcion9(){
    descripcion.innerHTML = '<div class="malestar">¿Sufres de Dolor en tu cadera?  </div><div class="consejo">Agenda una cita con nosotros, te ayudaremos!</div>';
}



function borrarDescripcion(){
    descripcion.innerHTML = "";
}