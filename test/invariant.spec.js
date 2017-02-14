import {expect} from 'chai'
import invariant from '../src/invariant'

describe('invariant', () => {
  it('should throw when `message` argument is undefined', () => {
    expect(() => {invariant(false)}).to.throw(Error)
  })
  it('should throw when `condition` argument is false', () => {
    expect(() => {invariant(false, 'something wrong')}).to.throw(Error)
  })
  it('should not throw when `condition` argument is true', () => {
    expect(() => {invariant(true, 'something wrong')}).to.not.throw(Error)
  })
})
