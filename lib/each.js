'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

// Iterate over a list and invoke a function on each item sequentially.
// Return the list.
function each (fn, list) {
  var len = list.length

  for (var i = 0; i < len; i++) {
    fn(list[i])
  }

  return list
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = each
