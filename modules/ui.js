import { verDetalles } from './servicios.js';

function chequearFecha(fechaDeCambio, fechaActual) {}

function mostrarVehiculos(dataDeVehiculos) {
  const $contenidoDeTabla = document.querySelector('#contendio-de-tabla');
  dataDeVehiculos.forEach((vehiculo) => {
    const { nombre, proximoCambio, fechaProximoCambio, link } = vehiculo;
    const $nuevoVehiculo = document.createElement('tr');
    const $nombreDelVehiculo = document.createElement('th');
    const $proximoCambio = document.createElement('td');
    const $verDetalles = document.createElement('td');
    const $botonVerDetalles = document.createElement('button');
    $botonVerDetalles.classList = 'btn btn-info';
    $botonVerDetalles.textContent = 'Detalles';
    $botonVerDetalles.onclick = () => {
      verDetalles(link);
    };
    $nombreDelVehiculo.scope = 'row';
    $nombreDelVehiculo.textContent = nombre;
    $proximoCambio.textContent = `${proximoCambio} o el ${fechaProximoCambio}`;
    $verDetalles.appendChild($botonVerDetalles);
    $nuevoVehiculo.appendChild($nombreDelVehiculo);
    $nuevoVehiculo.appendChild($proximoCambio);
    $nuevoVehiculo.appendChild($verDetalles);
    $contenidoDeTabla.appendChild($nuevoVehiculo);
  });
}

export { mostrarVehiculos };
