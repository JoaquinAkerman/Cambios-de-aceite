function ordenaralfabeticamente(objeto) {
  /**
   * Function to sort alphabetically an array of objects by some specific key.
   *
   * @param {String} property Key of the object to sort.
   */
  function dynamicSort(property) {
    var sortOrder = 1;

    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    };
  }

  objeto.sort(dynamicSort('nombre'));

  return objeto;
}
const transpilToKebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
export { transpilToKebabCase, ordenaralfabeticamente };
