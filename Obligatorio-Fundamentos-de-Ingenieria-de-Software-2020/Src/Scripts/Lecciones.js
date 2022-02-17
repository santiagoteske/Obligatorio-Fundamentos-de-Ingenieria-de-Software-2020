/* Cuando el usuario cliquea el boton, 
intercambia entre mostrar y esconder el contenido del menú */
function mostrarOEsconder() {
  document.getElementById("dropdown-dificultad").classList.toggle("show");
  document.getElementById("dropLecciones").classList.remove("show");
}
// Cierra el drop si el usuario clickea afuera
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-contenido");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var abrirDropdown = dropdowns[i];
      if (abrirDropdown.classList.contains("show")) {
        abrirDropdown.classList.remove("show");
      }
    } // Código obtenido de https://www.w3schools.com/howto/howto_js_dropdown.asp
  }
};

function MuestraDropLecciones() {
  document.getElementById("dropLecciones").classList.toggle("show");
  document.getElementById("dropdown-dificultad").classList.remove("show");
}

function CargarLecciones() {
  var arrayLecciones = obtenerLecciones();
  if (arrayLecciones.length == 0) {
    alert("No hay lecciones creadas en el sistema");
  } else {
    document.getElementById("dropLecciones").innerHTML = "";
    var filtroDificultad = document.getElementById("button-dificultad")
      .textContent;
    for (var i = 0; i < arrayLecciones.length; i++) {
      if (
        filtroDificultad == "Dificultad" ||
        filtroDificultad == arrayLecciones[i].dificultad
      ) {
        var a = document.createElement("a");
        a.text = arrayLecciones[i].cancion;
        //carga el nombre de la cancion al drop
        document.getElementById("dropLecciones").appendChild(a);
        a.addEventListener("click", mostrarCancion);
      }
    }
  }
}
function setearDificultadFacil() {
  var buttonDificultad = document.getElementById("button-dificultad");
  buttonDificultad.textContent = "Fácil";
}
function setearDificultadIntermedio() {
  var buttonDificultad = document.getElementById("button-dificultad");
  buttonDificultad.textContent = "Intermedio";
}
function setearDificultadAvanzado() {
  var buttonDificultad = document.getElementById("button-dificultad");
  buttonDificultad.textContent = "Avanzado";
}
function setearDificultadTodas() {
  var buttonDificultad = document.getElementById("button-dificultad");
  buttonDificultad.textContent = "Dificultad";
}

function mostrarCancion() {
  var arrayLecciones = obtenerLecciones();
  var nombreCancion = this.textContent;
  for (var i = 0; i < arrayLecciones.length; i++) {
    if (nombreCancion == arrayLecciones[i].cancion) {
      var labelDificultad = document.getElementById("label-dificultad");
      var labelCancion = document.getElementById("label-cancion");
      var labelInterprete = document.getElementById("label-interprete");
      var labelTempo = document.getElementById("label-tempo-valor");
      labelDificultad.textContent =
        "Dificultad:" + arrayLecciones[i].dificultad;
      labelCancion.textContent = "Canción:" + arrayLecciones[i].cancion;
      labelInterprete.textContent =
        "Interprete:" + arrayLecciones[i].interprete;
      labelTempo.textContent = arrayLecciones[i].tempo;
      dibujaTabla(arrayLecciones[i].ObjTablatura);
    }
  }
}
function dibujaTabla(tablaTablatura) {
  let letras = ["e", "B", "G", "D", "A", "E"];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.getElementById("tablatura-cancion-seleccion");
  var tblBody = document.createElement("tbody");
  //borra las tablas anteriores
  tabla.innerHTML = "";

  // Crea las celdas //Partes del codigo obtenido de https://developer.mozilla.org/es/docs/Trazado_de_una_tabla_HTML_mediante_JavaScript_y_la_Interface_DOM
  for (var i = 0; i < 6; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1000; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      celda.id = "celda" + i + j;
      var texto = "-";
      if (j == 0) {
        texto = letras[i];
        var textoCelda = document.createTextNode(texto);
        celda.appendChild(textoCelda);
      } else {
        texto = tablaTablatura[i][j];
        var textoCelda = document.createTextNode(texto);
        celda.appendChild(textoCelda);
      }
      celda.style.width = "20px";
      celda.style.backgroundColor;
      //carga la celda a la fila
      hilera.appendChild(celda);
    }
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "0");
}

/**FUNCION DE AUTO SCROLL *********************************************/
var bpm = document.getElementById("label-tempo-valor").textContent;
var id;
var intervalo;

function startScroll() {
  intervalo =
    60000 / document.getElementById("label-tempo-valor").textContent / 5;

  id = setInterval(function inicio() {
    document.getElementById("div-scroll").scrollBy(2, 0);

    if (document.getElementById("div-scroll").scrollLeft > 10000) {
      detener();
    }
  }, intervalo);
  function detener() {
    clearInterval(id);
  }
  document.getElementById("boton-stop").disabled = false;
  document.getElementById("boton-play").disabled = true;
} // Código obtenido de https://codepen.io/shrutibalasa/pen/jOWgPmY

function irAInicio() {
  document.getElementById("div-scroll").scrollTo(0, 0);
}

function irAFinal() {
  document.getElementById("div-scroll").scrollTo(40585, 0);
}

function parar(event) {
  clearInterval(id);
  document.getElementById("boton-stop").disabled = true;
  document.getElementById("boton-play").disabled = false;
}
