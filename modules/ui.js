import { getCurrentDate, viewDetails, sortDateForComparison } from './services.js';
import { vehicle_data } from './vehicle_data.js';
import { sortAlphabetically, transpilToKebabCase } from './utilities.js';

function highlight(dateChangeData, $date) {
  const finalCurrentDate = getCurrentDate();
  const changeDate = dateChangeData.split('-'); // has format dd-MM-yyyy
  const sortedChangeDate = [changeDate[2], changeDate[1], changeDate[0]];
  const finalChangeDate = sortDateForComparison(sortedChangeDate);

  if (finalCurrentDate > finalChangeDate) {
    const alert = ' realizar cambio';
    $date.classList = 'alert';
    $date.append(alert);
  }
}

function checkComment(comment) {
  if (comment !== '') {
    return ` ${comment}`;
  } else return '';
}

function showVehicles(vehicleData) {
  const $tableContent = document.querySelector('#table-content');
  const $title = document.querySelector('#title');

  sortAlphabetically(vehicleData).forEach((vehicle) => {
    const { name, nextChange, nextChangeDate, link, comment } = vehicle;
    const $newVehicle = document.createElement('tr');
    const $vehicleName = document.createElement('th');
    $vehicleName.id = transpilToKebabCase(name);
    const $nextChange = document.createElement('td');
    $nextChange.id = `change-date-${transpilToKebabCase(name)}`;
    const $viewDetails = document.createElement('td');
    const $viewDetailsButton = document.createElement('button');
    $viewDetailsButton.classList = 'btn btn-info';
    $viewDetailsButton.textContent = 'Detalles';
    $viewDetailsButton.onclick = () => {
      viewDetails(link);
    };
    $viewDetailsButton.id = `details-${transpilToKebabCase(name)}`;
    $vehicleName.scope = 'row';
    $vehicleName.textContent = name;
    $nextChange.textContent = `${nextChange} o ${nextChangeDate} ${checkComment(comment)}`;
    $viewDetails.appendChild($viewDetailsButton);
    $newVehicle.appendChild($vehicleName);
    $newVehicle.appendChild($nextChange);
    $newVehicle.appendChild($viewDetails);
    $tableContent.appendChild($newVehicle);
    highlight(nextChangeDate, $nextChange);
    updateH1($title);
  });
}

function updateH1(title) {
  title.textContent = 'Vehiculos M. Clara';
}

function initialize() {
  showVehicles(vehicle_data);
}

export { showVehicles, initialize };
