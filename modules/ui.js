import { getCurrentDate, viewDetails, sortDateForComparison } from './services.js';
import { dataDeVehiculos } from './vehicle_data.js';
import { sortAlphabetically, transpilToKebabCase } from './utilities.js';

function resaltar(dataFechaDeCambio, $fecha) {
  const fechaActualFinal = getCurrentDate();
  const fechaDeCambio = dataFechaDeCambio.split('-'); /// tiene formato dd-MM-yyyy
  const fechaDeCambioOrdenada = [fechaDeCambio[2], fechaDeCambio[1], fechaDeCambio[0]];
  const fechaDeCambioFinal = sortDateForComparison(fechaDeCambioOrdenada);

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

  sortAlphabetically(dataDeVehiculos).forEach((vehiculo) => {
    const { nombre, proximoCambio, fechaProximoCambio, link, comentario } = vehiculo;
    const $nuevoVehiculo = document.createElement('tr');
    const $nombreDelVehiculo = document.createElement('th');
    $nombreDelVehiculo.id = transpilToKebabCase(nombre);
    const $proximoCambio = document.createElement('td');
    $proximoCambio.id = `fecha-de-cambio-${transpilToKebabCase(nombre)}`;
    const $verDetalles = document.createElement('td');
    const $botonVerDetalles = document.createElement('button');
    $botonVerDetalles.classList = 'btn btn-info';
    $botonVerDetalles.textContent = 'Detalles';
    $botonVerDetalles.onclick = () => {
      viewDetails(link);
    };
    $botonVerDetalles.id = `detalles-${transpilToKebabCase(nombre)}`;
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
