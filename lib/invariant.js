'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Use invariant function to assert expression assumes to be true.
 * Pay attention, The invariant message will be stripped in production.
 */

/**
 * @param {boolean} condition
 * @param {string} message
 */
function invariant(condition, message) {
  if (message === undefined) {
    throw new Error('invariant requires an error message argument');
  }

  var error = void 0;

  if (!condition) {
    error = new Error(message);
    error.name = 'Invariant Violation';
    throw error;
  }
}

exports.default = invariant;