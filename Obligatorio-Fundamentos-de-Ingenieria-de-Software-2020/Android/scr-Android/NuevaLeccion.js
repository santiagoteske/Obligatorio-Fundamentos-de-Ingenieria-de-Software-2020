function cancelar() {
  location.href = "NuevaLeccion.html";
}
//onclick
function borrarGuionesCeldaTablatura() {
  this.firstChild.nodeValue = "";
}
//onblur
function agregarGuionesCeldaTablatura() {
  var texto = this.firstChild.nodeValue;
  if (texto.length < 1) {
    this.firstChild.nodeValue = "_____";
  }
}
//keydown
function validacionCeldaTablatura(e) {
  var key = window.Event ? e.which : e.keyCode;
  //Valida que las teclas son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48
  if (validacionCaracterAcorde(key) == false) {
    alert("Caracter incorrecto");
    e.preventDefault();
    var texto = this.firstChild.nodeValue;
    texto.nodeValue = "";
  }
  //si el proximo key no es retroceso (ascci 08) ni delete (ascci 127)
  if (key !== 8 && key !== 127) {
    var texto = this.firstChild.nodeValue;
    //valida el largo del acorde que no supere 5, deja poner el 5to y avisa
    if (validarLargoCampo(texto, 4) == false) {
      alert("Máximo de caracteres permitidos por acorde es 5");
      e.preventDefault();
      e.stopPropagation();
    }
  }
}
function generaTabla() {
  let letras = ["e", "B", "G", "D", "A", "E"];
  var div = document.getElementById("div-tabla-nueva-leccion");
  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tabla.id = "tabla-tablatura";
  tabla.className = "tabla-tablatura";
  // Crea las celdas
  for (var i = 0; i < 6; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    for (var j = 0; j < 1000; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      celda.id = "celda" + i + j;
      celda.contentEditable = "true";
      var texto = "-";
      if (j == 0) {
        texto = letras[i];
        var textoCelda = document.createTextNode(texto);
        celda.appendChild(textoCelda);
      } else {
        texto = "_____";
        var textoCelda = document.createTextNode(texto);
        celda.appendChild(textoCelda);
        celda.addEventListener("keydown", validacionCeldaTablatura);
        celda.addEventListener("click", borrarGuionesCeldaTablatura);
        celda.addEventListener("blur", agregarGuionesCeldaTablatura);
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
  // appends <table> into <body>
  //body.appendChild(tabla);
  div.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "0");
}
function grabar() {
  if (validarCamposRequeridos()) {
    var unaLeccion = crearLeccion();
    var arrayLecciones = obtenerLecciones();
    if (validacionCancionUnica(unaLeccion.cancion, arrayLecciones)) {
      arrayLecciones.push(unaLeccion);
      almacenarCanciones(arrayLecciones);
      alert("La lección fue guardada con éxito");
    } else {
      alert("Ya existe esa canción");
    }
  }
}
function crearLeccion() {
  var ObjInputCancion = document.getElementById("InputNombreCancion");
  var cancion = ObjInputCancion.value;
  var ObjInputInterprete = document.getElementById("InputInterprete");
  var interprete = ObjInputInterprete.value;
  var ObjSelectDificultad = document.getElementById("SelectDificultad");
  var dificultad = ObjSelectDificultad.value;
  var ObjInputTempo = document.getElementById("InputTempo");
  var tempo = ObjInputTempo.value;
  var ObjTabla = document.getElementById("tabla-tablatura");
  var ObjTablatura = new Array(6);
  //para cada fila de las 6 hago un array
  for (var k = 0; k < 6; k++) {
    ObjTablatura[k] = new Array(1000);
  }
  for (var i = 0, fila; (fila = ObjTabla.rows[i]); i++) {
    for (var j = 0, col; (col = fila.cells[j]); j++) {
      ObjTablatura[i][j] = col.firstChild.nodeValue;
    }
  }
  var unaLeccion = new Leccion(
    cancion,
    interprete,
    dificultad,
    tempo,
    ObjTablatura
  );
  return unaLeccion;
}

function validarCamposRequeridos() {
  var cancion = document.getElementById("InputNombreCancion").value;
  var interprete = document.getElementById("InputInterprete").value;
  var tempo = document.getElementById("InputTempo").value;
  if (validarCamposRequeridosBack(cancion, interprete, tempo) == false) {
    alert("Corrobore que todos los campos esten completos");
    return false;
  } else {
    return true;
  }
}

function validarCamposRequeridosBack(nombre, interprete, tempo) {
  if (nombre == "" || interprete == "" || tempo == "") {
    return false;
  } else {
    return true;
  }
}
function validarLargoCampo(texto, largo) {
  if (texto.length > largo) {
    return false;
  } else {
    return true;
  }
}
function validacionCaracterAcorde(key) {
  //Valida que las teclas son: b,h,p,h,s,49,50,51,52,53,54,55,56,57,48
  if (
    !(
      (key > 47 && key <= 57) ||
      (key > 95 && key <= 105) ||
      key == 8 ||
      key == 66 ||
      key == 88 ||
      key == 80 ||
      key == 72 ||
      key == 83 ||
      key == 118
    )
  ) {
    return false;
  } else {
    return true;
  }
}
function validacionCancionUnica(nombreCancion, arrayLecciones) {
  for (var i = 0; i < arrayLecciones.length; i++) {
    if (nombreCancion == arrayLecciones[i].cancion) {
      return false;
    }
  }
  return true;
}
module.exports = {
  validarCamposRequeridosBack,
  validarLargoCampo,
  validacionCaracterAcorde,
  validacionCancionUnica,
};
