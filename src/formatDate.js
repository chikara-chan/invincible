/**
 * Use formatDate function to format Date object conveniently.
 */

import addZeros from './helpers/addzeros'

/**
 * @param {Number} timestamp
 * @param {String} format
 * @return {String}
 */
function formatDate(timestamp, format = 'YYYY-MM-DD hh:mm:ss') {
  const date = new Date(timestamp),
    year = `${date.getFullYear()}`,
    month = `${date.getMonth() + 1}`,
    day = `${date.getDate()}`,
    hours = `${date.getHours()}`,
    minutes = `${date.getMinutes()}`,
    seconds = `${date.getSeconds()}`,
    rMatch = /Y+|M+|D+|h+|m+|s+|S+/g

  return format.replace(rMatch, match => {
    const len = match.length

    switch (match[0]) {
      case 'Y':
        return year.slice(-len)
      case 'M':
        return addZeros(month).slice(-len)
      case 'D':
        return addZeros(day).slice(-len)
      case 'h':
        return addZeros(hours).slice(-len)
      case 'm':
        return addZeros(minutes).slice(-len)
      case 's':
        return addZeros(seconds).slice(-len)
    }
  })
}

export default formatDate
