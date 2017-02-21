"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use parseDate function to parse Date object conveniently.
 */

var rShortDate = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/,
    rLongDate = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/;

function pipe(matches) {
  matches = matches.slice(1);

  return matches.map(function (match, i) {
    if (i === 1) {
      return +match - 1;
    }

    return +match;
  });
}

/**
 * @param {String} dateStr
 * @return {Number} Return timestamp
 */
function parseDate(dateStr) {
  var matches = void 0;

  if (matches = rShortDate.exec(dateStr)) {
    matches = pipe(matches);

    return +new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(matches))))();
  } else if (matches = rLongDate.exec(dateStr)) {
    matches = pipe(matches);

    return +new (Function.prototype.bind.apply(Date, [null].concat((0, _toConsumableArray3.default)(matches))))();
  }
}

exports.default = parseDate;