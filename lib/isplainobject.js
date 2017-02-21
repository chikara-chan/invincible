'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Use isPlainObject function to check wether a value is a plain object.
 */

var getPrototypeOf = _getPrototypeOf2.default,
    toString = Object.prototype.toString,
    funcToString = Function.prototype.toString,
    objectCtorString = funcToString.call(Object);

/**
 * @param {Any} val
 * @return {Boolean}
 */
function isPlainObject(val) {
  var proto = void 0,
      Ctor = void 0;

  if (!val || toString.call(val) !== '[object Object]') {
    return false;
  }

  proto = getPrototypeOf(val);

  if (proto === null) {
    return true;
  }

  Ctor = proto.constructor;

  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
}

exports.default = isPlainObject;