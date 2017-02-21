import {expect} from 'chai'
import isPlainObject from '../src/isPlainObject'

describe('isPlainObject', () => {
  it('should return true when give emptry object', () => {
    expect(
      isPlainObject({})
    ).to.be.true
  })
  it('should return true when give not emptry object', () => {
    expect(
      isPlainObject({key: 'value'})
    ).to.be.true
  })
  it('should return true when Obejct.create', () => {
    expect(
      isPlainObject(Object.create(null))
    ).to.be.true
  })

  it('should return false when give null', () => {
    expect(
      isPlainObject(null)
    ).to.be.false
  })
  it('should return false when give undefined', () => {
    expect(
      isPlainObject(undefined)
    ).to.be.false
  })
  it('should return false when give number', () => {
    expect(
      isPlainObject(1)
    ).to.be.false
  })
  it('should return false when give string', () => {
    expect(
      isPlainObject('string')
    ).to.be.false
  })
  it('should return false when give boolean', () => {
    expect(
      isPlainObject(true)
    ).to.be.false
  })
  it('should return false when give function', () => {
    expect(
      isPlainObject(() => {})
    ).to.be.false
  })
  it('should return false when give array', () => {
    expect(
      isPlainObject([])
    ).to.be.false
  })
  it('should return false when give an instance', () => {
    class Test {
      constructor() {
        this.test = 'test'
      }
    }

    expect(
      isPlainObject(new Test())
    ).to.be.false
  })
})
