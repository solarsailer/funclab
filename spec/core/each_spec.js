const each = require('../../lib/each')

describe('#each', () => {
  var list = ['1', '2', '3']

  it('should get each value of a list sequentially', () => {
    var index = 0
    each(list, (item) => {
      expect(+item).toBe(index + 1)
      index += 1
    })

    expect(index).toBe(list.length)
  })
})
