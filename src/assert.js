/**
 * Use assert function to assert expression assumes to be true.
 */

/**
 * @param {boolean} condition
 * @param {string} message
 */
function assert(condition, message) {
  if (message === undefined) {
    throw new Error('assert requires an error message argument')
  }

  let error

  if (!condition) {
    error = new Error(message)
    error.name = 'Assertion'
    throw error
  }
}

export default assert
