/**
 * @param {String} string
 * @param {Number} targetLength
 * @return {String}
 */
function addZeros(str, targetLength = 2) {
  while (str.length < targetLength) {
    str = `0${str}`
  }

  return str
}

export default addZeros
