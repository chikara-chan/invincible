import {expect} from 'chai'
import getURLParams from '../src/getURLParams'

describe('getURLParams', () => {
  beforeEach(() => {
    global.location = {}
  })
  afterEach(() => {
    delete global.location
  })
  it('should get params obejct correctly from normal search', () => {
    location.search = '?a=1&b=2&c=3'

    const URLParams = getURLParams()

    expect(Object.keys(URLParams)).to.have.lengthOf(3)
    expect(URLParams).to.have.property('a', '1')
    expect(URLParams).to.have.property('b', '2')
    expect(URLParams).to.have.property('c', '3')
  })
  it('should get empty obejct correctly from empty search', () => {
    location.search = ''

    const URLParams = getURLParams()

    expect(Object.keys(URLParams)).to.have.lengthOf(0)
  })
  it('should get params obejct correctly from werid search', () => {
    location.search = '?a=1&&b&c==3&&&&'

    const URLParams = getURLParams()

    expect(Object.keys(URLParams)).to.have.lengthOf(2)
    expect(URLParams).to.have.property('a', '1')
    expect(URLParams).to.have.property('c', '=3')
  })
})
