/**
 * Use assert function to assert expression assumes to be true.
 */

/**
 * @param {Boolean} condition
 * @param {String} message
 */
function assert(condition, message) {
  if (message === undefined) {
    throw new Error('assert requires an error message argument')
  }

  let error

  if (!condition) {
    error = new Error(message)
    error.name = 'AssertionError'
    throw error
  }
}

export default assert
