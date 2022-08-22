function verDetalles(link) {
  if (link === null) {
    window.alert('por el momento hay mas detalles');
  } else {
    window.location.href = link;
  }
}

function ordenarFechaParaComparar(arrayFecha) {
  const fechaParaComparar = new Date(
    arrayFecha[0],
    arrayFecha[1] - 1, //los meses arrancan en 0
    arrayFecha[2],
  );
  return fechaParaComparar;
}
function obtenerFechaActual() {
  const fechaActual = new Date().toISOString().split('T');
  const soloFecha = fechaActual[0].toString().split('-'); // devuelve yyyy-MM-dd
  const fechaFinal = ordenarFechaParaComparar(soloFecha);
  return fechaFinal;
}

export { verDetalles, ordenarFechaParaComparar, obtenerFechaActual };
