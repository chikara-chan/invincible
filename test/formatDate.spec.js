import {expect} from 'chai'
import formatDate from '../src/formatDate'

describe('formatDate', () => {
  it('should format default when second argument is unset', () => {
    const timestamp = new Date('2017-01-01 08:00:30')

    expect(
      formatDate(timestamp)
    ).to.equal('2017-01-01 08:00:30')
  })
  it('should format correctly when second argument is set', () => {
    const timestamp = new Date('2017-01-01 08:00:30')

    expect(
      formatDate(timestamp, 'YY-MM-DD hh:mm:ss')
    ).to.equal('17-01-01 08:00:30')
    expect(
      formatDate(timestamp, 'YYYY/MM/DD hh:mm:ss')
    ).to.equal('2017/01/01 08:00:30')
    expect(
      formatDate(timestamp, 'YYYY-MM-DD')
    ).to.equal('2017-01-01')
    expect(
      formatDate(timestamp, 'hh:mm:ss')
    ).to.equal('08:00:30')
  })
})
