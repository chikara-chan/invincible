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
    return snippets.pop().split(';').shift()
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
    opts.expires ? `; expires=${opts.expires.toGMTString()}` : '',
    opts.path ? `; path=${opts.path}` : '',
    opts.domain ? `; domain=${opts.domain}` : '',
    opts.secure ? '; secure' : ''
  ]
}

function removeCookie(key) {
  setCookie(key, '', {
    expires: -1
  })
}

/**
 * @param {boolean} condition
 * @param {string} message
 */
function accessCookie(key, val, opts) {
  if (val === undefined) {
    return getCookie(key)
  }
  if (!val) {
    removeCookie(key)
  }
  setCookie(key, val, opts)
}

export default accessCookie
