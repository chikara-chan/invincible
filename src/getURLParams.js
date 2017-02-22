/**
 * Use getURLParams function to get URL object from location.href.
 */

/**
 * @return {Object} Return URL params
 */
function getURLParams() {
  const search = location.search.slice(1),
    rParam = /([^&]*?)=([^&]*)/g
  let param,
    ret = {}

  if (!search) {
    return ret
  }

  while (param = rParam.exec(search)) {
    ret[param[1]] = param[2]
  }

  return ret
}

export default getURLParams
