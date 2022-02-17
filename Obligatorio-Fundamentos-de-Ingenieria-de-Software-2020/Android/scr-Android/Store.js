//desde aca se maneja la localStorage
function obtenerLecciones() {
  var datosRecuperados = localStorage.getItem('Lecciones');
  if (localStorage.getItem('Lecciones') === null) {
    var arrayLecciones = new Array();
  }
  else {
    var arrayLecciones = JSON.parse(datosRecuperados);
  }
  return arrayLecciones;
}

function almacenarCanciones(arrayLecciones) {
  localStorage.setItem('Lecciones', JSON.stringify(arrayLecciones));
}
