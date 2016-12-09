const autoCurry = require('../../lib/auto_curry')

// -------------------------------------------------------------
// Spec.
// -------------------------------------------------------------

describe('#autoCurry', () => {
  var add = autoCurry(function (a, b) { return a + b })

  it('should return the result when used with all parameters', () => {
    expect(add(2, 2)).toBe(4)
  })

  it('should return a function if the parameters are not completely provided', () => {
    expect(typeof add()).toBe('function')
    expect(typeof add(2)).toBe('function')
    expect(typeof add(2, 2)).not.toBe('function')
    expect(typeof add(2, 2, 2)).not.toBe('function')
  })
})
