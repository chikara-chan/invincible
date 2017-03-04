import {expect} from 'chai'
import accessCookie from '../src/accessCookie'

describe('accessCookie', () => {
  beforeEach(() => {
    global.document = {}
  })
  afterEach(() => {
    delete global.document
  })
  it('should set cookie correctly when not giving options', () => {
    accessCookie('key', 'value')
    expect(document.cookie).to.match(/^key=value; expires=.+GMT$/)
  })
  it('should set cookie correctly when giving options', () => {
    accessCookie('key', 'value', {
      expires: 30,
      domain: 'www.invincible.com',
      path: '/',
      secure: true
    })
    expect(document.cookie).to.match(/^key=value; expires=.+GMT; path=\/; domain=www.invincible.com; secure$/)
  })
  it('should get correct cookie', () => {
    accessCookie('key', 'value')
    expect(accessCookie('key')).to.equal('value')
  })
  it('should get correct cookie when set special chars', () => {
    accessCookie('key', '&!#>')
    expect(accessCookie('key')).to.equal('&!#>')
  })
  it('should remove cookie correctly', () => {
    const date = new Date(),
      rPattern = /^key=; expires=(.+GMT)$/

    accessCookie('key', null)
    expect(document.cookie).to.match(rPattern)
    expect(document.cookie.match(rPattern)[1]).to.equal(date.toGMTString())
  })
})
