import {expect} from 'chai'
import assert from '../src/assert'

describe('assert', () => {
  it('should throw when `message` argument is undefined', () => {
    expect(() => {
      assert(false)
    }).to.throw(Error)
    expect(() => {
      assert(true)
    }).to.throw(Error)
  })
  it('should throw when `condition` argument is false', () => {
    expect(() => {
      assert(false, 'something wrong')
    }).to.throw(Error)
  })
  it('should not throw when `condition` argument is true', () => {
    expect(() => {
      assert(true, 'something wrong')
    }).to.not.throw(Error)
  })
})
