// Naive implementation of `each`.
function each (list, cb) {
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    cb(item)
  }
}

module.exports = each
