'use strict'

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

// Make a curried version of a function.
//
// Examples:
//
//   var add = autoCurry(function (a, b) { return a + b })
//
//   add(42, 42)       // => 84
//
//   var add2 = add(2) // typeof add2 => 'function'
//   add2(2)           // => 4
function autoCurry (cb) {
  if (typeof cb !== 'function') {
    return
  }

  function recur (callback, prev) {
    if (prev === undefined) prev = []

    return function () {
      var args = Array.prototype.slice.call(arguments)
      var total = prev.concat(args)

      if (callback.length <= total.length) {
        return callback.apply(this, total)
      } else {
        return recur(callback, total)
      }
    }
  }

  return recur(cb)
}

// Add autoCurry to Function's prototype.
Function.prototype.autoCurry = function () {
  return autoCurry(this)
}

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

module.exports = autoCurry
