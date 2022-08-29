import {
  obtenerFechaActual,
  verDetalles,
  ordenarFechaParaComparar,
} from './servicios.js';
import { dataDeVehiculos } from './data_de_vehiculos.js';
import { ordenaralfabeticamente, kebabCase } from './utilidades.js';

function resaltar(dataFechaDeCambio, $fecha) {
  const fechaActualFinal = obtenerFechaActual();
  const fechaDeCambio = dataFechaDeCambio.split('-'); /// tiene formato dd-MM-yyyy
  const fechaDeCambioOrdenada = [
    fechaDeCambio[2],
    fechaDeCambio[1],
    fechaDeCambio[0],
  ];
  const fechaDeCambioFinal = ordenarFechaParaComparar(fechaDeCambioOrdenada);

  if (fechaActualFinal > fechaDeCambioFinal) {
    const aviso = ' realizar cambio';
    $fecha.classList = 'alerta';
    $fecha.append(aviso);
  }
}

function chequearComentario(comentario) {
  if (comentario !== '') {
    return ` ${comentario}`;
  } else return '';
}

function mostrarVehiculos(dataDeVehiculos) {
  const $contenidoDeTabla = document.querySelector('#contendio-de-tabla');
  const $titulo = document.querySelector('#titulo');

  ordenaralfabeticamente(dataDeVehiculos).forEach((vehiculo) => {
    const { nombre, proximoCambio, fechaProximoCambio, link, comentario } =
      vehiculo;
    const $nuevoVehiculo = document.createElement('tr');
    const $nombreDelVehiculo = document.createElement('th');
    $nombreDelVehiculo.id = kebabCase(nombre);
    const $proximoCambio = document.createElement('td');
    $proximoCambio.id = `fecha-de-cambio-${kebabCase(nombre)}`;
    const $verDetalles = document.createElement('td');
    const $botonVerDetalles = document.createElement('button');
    $botonVerDetalles.classList = 'btn btn-info';
    $botonVerDetalles.textContent = 'Detalles';
    $botonVerDetalles.onclick = () => {
      verDetalles(link);
    };
    $botonVerDetalles.id = `detalles-${kebabCase(nombre)}`;
    $nombreDelVehiculo.scope = 'row';
    $nombreDelVehiculo.textContent = nombre;
    $proximoCambio.textContent = `${proximoCambio} o el ${fechaProximoCambio} ${chequearComentario(
      comentario,
    )}`;
    $verDetalles.appendChild($botonVerDetalles);
    $nuevoVehiculo.appendChild($nombreDelVehiculo);
    $nuevoVehiculo.appendChild($proximoCambio);
    $nuevoVehiculo.appendChild($verDetalles);
    $contenidoDeTabla.appendChild($nuevoVehiculo);
    resaltar(fechaProximoCambio, $proximoCambio);
    actualizaH1($titulo);
  });
}

function actualizaH1(titulo) {
  titulo.textContent = 'Vehículos';
}

function inicializar() {
  mostrarVehiculos(dataDeVehiculos);
}

export { mostrarVehiculos, inicializar };
