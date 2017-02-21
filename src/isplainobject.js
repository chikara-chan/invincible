const {getPrototypeOf} = Object,
  {toString} = Object.prototype,
  {toString: funcToString} = Function.prototype,
  objectCtorString = funcToString.call(Object)

/**
 * Use isPlainObject function to check wether a value is a plain object.
 *
 * @param {Any} val
 * @return {Boolean}
 */
function isPlainObject(val) {
  let proto, Ctor

  if (!val || toString.call(val) !== '[object Object]') {
    return false
  }

  proto = getPrototypeOf(val)

  if (proto === null) {
    return true
  }

  Ctor = proto.constructor

  return typeof Ctor == 'function' &&
    Ctor instanceof Ctor &&
    funcToString.call(Ctor) === objectCtorString
}

export default isPlainObject
