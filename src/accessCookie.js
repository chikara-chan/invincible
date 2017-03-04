/**
 * Use accessCookie function to get, set and delete cookie.
 */

const defaultOpts = {
  expires: 365
}

function getCookie(key) {
  const val = `; ${document.cookie}`,
    snippets = val.split(`; ${key}=`)

  if (snippets.length === 2) {
    return unescape(snippets.pop().split(';').shift())
  }
}

function setCookie(key, val, opts = {}) {
  opts = {
    ...defaultOpts, ...opts
  }

  const expires = new Date()

  expires.setTime(expires.getTime() + opts.expires * 864e+5)

  document.cookie = [
    `${key}=${escape(val)}`,
    `; expires=${expires.toGMTString()}`,
    opts.path ? `; path=${opts.path}` : '',
    opts.domain ? `; domain=${opts.domain}` : '',
    opts.secure ? '; secure' : ''
  ].join('')
}

function removeCookie(key) {
  setCookie(key, '', {
    expires: 0
  })
}

/**
 * @param {String} key
 * @param {String} val
 * @param {Object} val
 */
function accessCookie(key, val, opts) {
  if (val === undefined) {
    return getCookie(key)
  }

  if (!val) {
    removeCookie(key)

    return
  }
  setCookie(key, val, opts)
}

export default accessCookie
