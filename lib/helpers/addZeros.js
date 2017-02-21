"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param {String} string
 * @param {Number} targetLength
 * @return {String}
 */
function addZeros(str) {
  var targetLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  while (str.length < targetLength) {
    str = "0" + str;
  }

  return str;
}

exports.default = addZeros;