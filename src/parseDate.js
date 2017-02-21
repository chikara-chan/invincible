/**
 * Use parseDate function to parse Date object conveniently.
 */

const rShortDate = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s*$/,
  rLongDate = /^\s*(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})\s*$/

function pipe(matches) {
  matches = matches.slice(1)

  return matches.map((match, i) => {
    if (i === 1) {
      return +match - 1
    }

    return +match
  })
}

/**
 * @param {String} dateStr
 * @return {Number} Return timestamp
 */
function parseDate(dateStr) {
  let matches

  if (matches = rShortDate.exec(dateStr)) {
    matches = pipe(matches)

    return +new Date(...matches)
  } else if (matches = rLongDate.exec(dateStr)) {
    matches = pipe(matches)

    return +new Date(...matches)
  }
}

export default parseDate
