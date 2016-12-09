'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

// Iterate over a list and invoke a function on each item sequentially.
// Returns the list.
function each (list, cb) {
  var len = list.length

  for (var i = 0; i < len; i++) {
    cb(list[i])
  }

  return list
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = each
