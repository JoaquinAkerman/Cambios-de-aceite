import { dataDeVehiculos } from './modules/data_de_vehiculos.js';
import { mostrarVehiculos } from './modules/ui.js';

function inicializar() {
  mostrarVehiculos(dataDeVehiculos);
}

inicializar();
