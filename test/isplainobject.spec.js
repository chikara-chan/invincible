import {expect} from 'chai'
import isplainobject from '../src/isplainobject'

describe('isplainobject', () => {
  it('should return true when give emptry object', () => {
    expect(
      isplainobject({})
    ).to.be.true
  })
  it('should return true when give not emptry object', () => {
    expect(
      isplainobject({key: 'value'})
    ).to.be.true
  })
  it('should return true when Obejct.create', () => {
    expect(
      isplainobject(Object.create(null))
    ).to.be.true
  })

  it('should return false when give null', () => {
    expect(
      isplainobject(null)
    ).to.be.false
  })
  it('should return false when give undefined', () => {
    expect(
      isplainobject(undefined)
    ).to.be.false
  })
  it('should return false when give number', () => {
    expect(
      isplainobject(1)
    ).to.be.false
  })
  it('should return false when give string', () => {
    expect(
      isplainobject('string')
    ).to.be.false
  })
  it('should return false when give boolean', () => {
    expect(
      isplainobject(true)
    ).to.be.false
  })
  it('should return false when give function', () => {
    expect(
      isplainobject(() => {})
    ).to.be.false
  })
  it('should return false when give array', () => {
    expect(
      isplainobject([])
    ).to.be.false
  })
  it('should return false when give an instance', () => {
    class Test {
      constructor() {
        this.test = 'test'
      }
    }

    expect(
      isplainobject(new Test())
    ).to.be.false
  })
})
