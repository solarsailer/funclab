const reduce = require('../../lib/reduce.js')

// -------------------------------------------------------------
// Spec.
// -------------------------------------------------------------

describe('#reduce', () => {
  var data = [1, 2, 3]

  it('should combine a list into a single value', () => {
    var result = reduce((acc, val) => acc + val, data)

    expect(result).toBe(6)
  })

  it('should combine a list into a single value with a starting value', () => {
    var result = reduce((acc, val) => acc + val, 1, data)

    expect(result).toBe(7)
  })

  it('should also work with strings', () => {
    var r = reduce((acc, val) => acc + val, ['foo', 'bar'])

    expect(r).toBe('foobar')
  })

  it('should also work with strings and an initial value', () => {
    var r = reduce((acc, val) => acc + val, '42 ', ['foo', 'bar'])

    expect(r).toBe('42 foobar')
  })
})
