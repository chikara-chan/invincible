/**
 * Use invariant function to assert expression assumes to be true.
 * Pay attention, The invariant message will be stripped in production.
 *
 * @param  {boolean} condition
 * @param  {string} message
 */
const NODE_ENV = process.env.NODE_ENV
let invariant = function() {}

if (NODE_ENV !== 'production') {
  invariant = function(condition, message) {
    if (message === undefined) {
      throw new Error('invariant requires an error message argument')
    }

    let error

    if (!condition) {
      error = new Error(message)
      error.name = 'Invariant Violation'
      throw error
    }
  }
}

export default invariant
