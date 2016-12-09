'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

// Iterate a list and map a new value on each item.
// Return the list of the mapped items.
function map (fn, list) {
  var len = list.length

  for (var i = 0; i < len; i++) {
    list[i] = fn(list[i])
  }

  return list
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = map
