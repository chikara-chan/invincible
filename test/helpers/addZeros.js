import {expect} from 'chai'
import addZeros from '../../src/helpers/addZeros'

describe('addZeros', () => {
  it('should return string of length 2 when targetLength is unset', () => {
    expect(
      addZeros('2')
    ).to.equal('02')
  })
  it('should return string of length target when targetLength is set', () => {
    expect(
      addZeros('2', 1)
    ).to.equal('2')
    expect(
      addZeros('2', 2)
    ).to.equal('02')
    expect(
      addZeros('2', 3)
    ).to.equal('002')
    expect(
      addZeros('2', 4)
    ).to.equal('0002')
  })
})
