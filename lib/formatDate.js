'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addzeros = require('./helpers/addzeros');

var _addzeros2 = _interopRequireDefault(_addzeros);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Number} timestamp
 * @param {String} format
 * @return {String}
 */
function formatDate(timestamp) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD hh:mm:ss';

  var date = new Date(timestamp),
      year = '' + date.getFullYear(),
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      hours = '' + date.getHours(),
      minutes = '' + date.getMinutes(),
      seconds = '' + date.getSeconds(),
      rMatch = /Y+|M+|D+|h+|m+|s+|S+/g;

  return format.replace(rMatch, function (match) {
    var len = match.length;

    switch (match[0]) {
      case 'Y':
        return year.slice(-len);
      case 'M':
        return (0, _addzeros2.default)(month).slice(-len);
      case 'D':
        return (0, _addzeros2.default)(day).slice(-len);
      case 'h':
        return (0, _addzeros2.default)(hours).slice(-len);
      case 'm':
        return (0, _addzeros2.default)(minutes).slice(-len);
      case 's':
        return (0, _addzeros2.default)(seconds).slice(-len);
    }
  });
} /**
   * Use formatDate function to format Date object conveniently.
   */

exports.default = formatDate;