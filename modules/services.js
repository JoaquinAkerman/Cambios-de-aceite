function viewDetails(link) {
  if (link === null) {
    window.alert('por el momento hay mas detalles');
  } else {
    window.location.href = link;
  }
}

function sortDateForComparison(dateArray) {
  const dateForComparison = new Date(
    dateArray[0],
    dateArray[1] - 1, //months start at 0
    dateArray[2],
  );
  return dateForComparison;
}

function getCurrentDate() {
  const currentDate = new Date().toISOString().split('T');
  const justDate = currentDate[0].toString().split('-'); //returns yyyy-MM-dd
  const finalDate = sortDateForComparison(justDate);
  return finalDate;
}

export { viewDetails, sortDateForComparison, getCurrentDate };
