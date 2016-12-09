const map = require('../../lib/map')

// -------------------------------------------------------------
// Spec.
// -------------------------------------------------------------

describe('#map', () => {
  var data = [1, 2, 3]

  it('should return an empty list with an empty list', () => {
    var result = map(val => val * 2, [])

    expect(result.length).toBe(0)
  })

  it('should double the values', () => {
    var result = map(val => val * 2, data)

    expect(result[0]).toBe(2)
    expect(result[1]).toBe(4)
    expect(result[2]).toBe(6)
  })
})
