import {expect} from 'chai'
import parseDate from '../src/parseDate'

describe('parseDate', () => {
  it('should parse timestamp correactly from long date', () => {
    const dateStr = '2017-01-01 08:10:30'

    expect(
      parseDate(dateStr)
    ).to.equal(new Date(dateStr).getTime())
  })
  it('should parse timestamp correactly from short date', () => {
    const dateStr = '2017-01-01'

    expect(
      parseDate(dateStr)
    ).to.equal(new Date(`${dateStr} 00:00:00`).getTime())
  })
})
