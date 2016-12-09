const each = require('../../lib/each')

// -------------------------------------------------------------
// Spec.
// -------------------------------------------------------------

describe('#each', () => {
  var data = ['1', '2', '3']

  it('should get each value of a list sequentially', () => {
    var index = 0
    each(item => {
      expect(+item).toBe(index + 1)
      index += 1
    }, data)

    expect(index).toBe(data.length)
  })
})
